/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2, Edit2, Plus, Search, Calendar } from "lucide-react";
import ReactQuill from "react-quill";
//@ts-expect-error "module not available"
import "react-quill/dist/quill.snow.css";
// import { useToast } from "@/hooks/use-toast";

export default function BlogManagement() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<number | string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "",
    status: "draft" as "draft" | "published",
    imageUrl: "",
  });
  // const { toast } = useToast();

  // 🔹 Fetch blogs initially
  useEffect(() => {
    fetchBlogs();
    // 🔹 Real-time subscription
    const channel = supabase
      .channel("blogs-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "billif_blogs" },
        (payload) => {
          console.log("Realtime change:", payload);
          fetchBlogs();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function fetchBlogs() {
    const { data, error } = await supabase
      .from("billif_blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      //   toast({
      //     error:
      //   });
      //   console.error(error);
      //   toast({
      //     error: (
      //       <div className="space-y-2">
      //         <h2 className="font-heading text-2xl font-semibold text-emerald-500">
      //           Success
      //         </h2>
      //         <p>Login successful</p>
      //       </div>
      //     ),
      //   });
      console.error(error);
    } else setBlogs(data as BlogPost[]);
  }

  const handleAddNew = () => {
    setFormData({
      title: "",
      excerpt: "",
      author: "",
      status: "draft",
      imageUrl: "",
    });
    setEditingId(null);
    setIsAddingNew(true);
    setImage(null);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.excerpt || !formData.author) {
      alert("Please fill all fields");
      return;
    }
    let imageUrlToSave = formData.imageUrl;
    setSaving(true);

    // 🔹 If user selected a new image, upload it first
    if (image) {
      const uploadResult = await handleUploadImage(image);
      if (uploadResult.error) {
        console.error(uploadResult.error);
        alert("Image upload failed");
        setSaving(false);
        return;
      }

      // ✅ Use the uploaded image URL directly
      imageUrlToSave = uploadResult.url;
    }

    if (editingId) {
      // Update existing post
      const { error } = await supabase
        .from("billif_blogs")
        .update({
          title: formData.title,
          excerpt: formData.excerpt,
          author: formData.author,
          status: formData.status,
          imageUrl: imageUrlToSave || "",
          updated_at: new Date().toISOString(),
        })
        .eq("id", editingId);

      if (error) console.error(error);
    } else {
      // Add new post
      const { error } = await supabase.from("billif_blogs").insert([
        {
          title: formData.title,
          excerpt: formData.excerpt,
          author: formData.author,
          status: formData.status,
          imageUrl: imageUrlToSave || "",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error(error);
      }
    }

    setIsAddingNew(false);
    setFormData({
      title: "",
      excerpt: "",
      author: "",
      status: "draft",
      imageUrl: "",
    });
    setImage(null);
    setSaving(false);
  };

  const handleEdit = (blog: BlogPost) => {
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      author: blog.author,
      status: blog.status,
      imageUrl: blog.imageUrl || "",
    });
    setEditingId(blog.id);
    setIsAddingNew(true);
  };

  const handleUploadImage = async (file: File) => {
    const newData = new FormData();
    newData.append("file", file);

    try {
      const res = await fetch("/api/uploadImage", {
        method: "POST",
        body: newData,
      });

      const resData = await res.json();
      console.log({ response: "response data" });
      console.log({
        ...resData,
      });
      if (resData?.url) {
        setFormData((prev) => ({ ...prev, imageUrl: resData.url }));
      }
      return { ...resData };
    } catch (err) {
      return { error: err };
    }
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (error) console.error(error);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const publishedCount = blogs.filter((b) => b.status === "published").length;
  const draftCount = blogs.filter((b) => b.status === "draft").length;

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-primary">
              {publishedCount}
            </div>
            <p className="text-xs text-muted-foreground">Published Posts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6 text-center">
            <div className="text-2xl font-bold text-muted-foreground">
              {draftCount}
            </div>
            <p className="text-xs text-muted-foreground">Draft Posts</p>
          </CardContent>
        </Card>
      </div>

      {/* Search + Add */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            placeholder="Search posts by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button onClick={handleAddNew} className="gap-2">
          <Plus className="h-4 w-4" /> New Post
        </Button>
      </div>

      {/* Add/Edit Form */}
      {isAddingNew && (
        <Card className="border-border/50 bg-secondary/30">
          <CardHeader>
            <CardTitle>{editingId ? "Edit Post" : "Create New Post"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Post title"
              />
            </div>
            <div>
              <Label>Display Image</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                placeholder="Post Image"
              />
            </div>
            {(formData.imageUrl || image) && (
              <img
                src={
                  (image ? URL.createObjectURL(image) : undefined) ||
                  formData.imageUrl
                }
                alt="Preview"
                className="mt-2 h-[400px] w-full rounded-md object-cover"
              />
            )}
            <div>
              <Label>Content</Label>
              <ReactQuill
                theme="snow"
                value={formData.excerpt}
                className="overflow-hidden rounded-md bg-white"
                onChange={(e) => setFormData({ ...formData, excerpt: e })}
                placeholder="Write your blog content here..."
              />
            </div>
            <div>
              <Label>Author</Label>
              <Input
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
                placeholder="Author name"
              />
            </div>
            <div>
              <Label>Status</Label>
              <div className="mt-2 flex gap-4">
                {["draft", "published"].map((status) => (
                  <label
                    key={status}
                    className="flex cursor-pointer items-center gap-2"
                  >
                    <input
                      type="radio"
                      name="status"
                      value={status}
                      checked={formData.status === status}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          status: e.target.value as "draft" | "published",
                        })
                      }
                    />
                    <span className="text-sm capitalize">{status}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setIsAddingNew(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                {" "}
                {saving ? "Saving" : "Save"}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Blog List */}
      <div className="grid gap-4">
        {filteredBlogs.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              {searchQuery
                ? "No posts match your search"
                : "No blog posts yet. Create your first one!"}
            </CardContent>
          </Card>
        ) : (
          filteredBlogs.map((blog) => (
            <Card key={blog.id} className="transition-all hover:shadow-md">
              <CardContent className="flex items-start justify-between pt-6">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="font-semibold">{blog.title}</h3>
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        blog.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {blog.status}
                    </span>
                  </div>
                  <div
                    className="mb-2 text-sm text-muted-foreground"
                    dangerouslySetInnerHTML={{
                      __html: `${blog?.excerpt?.split("</p>")[0]}...`,
                    }}
                  />
                  <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span>By {blog.author}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(blog.updated_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="ml-4 flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(blog)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(blog.id)}
                    className="text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
