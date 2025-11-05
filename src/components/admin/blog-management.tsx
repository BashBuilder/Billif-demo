// "use client";

// import { useState, useEffect } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Trash2, Edit2, Plus, Search, Eye, Calendar } from "lucide-react";

// interface BlogPost {
//   id: string;
//   title: string;
//   excerpt: string;
//   author: string;
//   createdAt: string;
//   status: "draft" | "published";
//   views?: number;
// }

// export default function BlogManagement() {
//   const [blogs, setBlogs] = useState<BlogPost[]>([]);
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [formData, setFormData] = useState({
//     title: "",
//     excerpt: "",
//     author: "",
//     status: "draft" as const,
//   });

//   // Load from localStorage
//   useEffect(() => {
//     const stored = localStorage.getItem("blogs");
//     if (stored) {
//       setBlogs(JSON.parse(stored));
//     } else {
//       const sampleBlogs: BlogPost[] = [
//         {
//           id: "1",
//           title: "Getting Started with Next.js",
//           excerpt:
//             "Learn the basics of Next.js framework and build your first app",
//           author: "John Doe",
//           createdAt: new Date(
//             Date.now() - 7 * 24 * 60 * 60 * 1000,
//           ).toISOString(),
//           status: "published",
//           views: 324,
//         },
//         {
//           id: "2",
//           title: "React Best Practices",
//           excerpt:
//             "Essential patterns and best practices for React development",
//           author: "Jane Smith",
//           createdAt: new Date(
//             Date.now() - 3 * 24 * 60 * 60 * 1000,
//           ).toISOString(),
//           status: "published",
//           views: 156,
//         },
//         {
//           id: "3",
//           title: "TypeScript Advanced Types",
//           excerpt: "Exploring advanced TypeScript features and patterns",
//           author: "Bob Wilson",
//           createdAt: new Date().toISOString(),
//           status: "draft",
//           views: 0,
//         },
//       ];
//       setBlogs(sampleBlogs);
//       localStorage.setItem("blogs", JSON.stringify(sampleBlogs));
//     }
//   }, []);

//   const filteredBlogs = blogs.filter(
//     (blog) =>
//       blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       blog.author.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   const handleAddNew = () => {
//     setFormData({ title: "", excerpt: "", author: "", status: "draft" });
//     setEditingId(null);
//     setIsAddingNew(true);
//   };

//   const handleSave = () => {
//     if (!formData.title || !formData.excerpt || !formData.author) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (editingId) {
//       const updated = blogs.map((blog) =>
//         blog.id === editingId
//           ? {
//               ...blog,
//               title: formData.title,
//               excerpt: formData.excerpt,
//               author: formData.author,
//               status: formData.status,
//             }
//           : blog,
//       );
//       setBlogs(updated);
//       localStorage.setItem("blogs", JSON.stringify(updated));
//     } else {
//       const newBlog: BlogPost = {
//         id: Date.now().toString(),
//         title: formData.title,
//         excerpt: formData.excerpt,
//         author: formData.author,
//         status: formData.status,
//         createdAt: new Date().toISOString(),
//         views: 0,
//       };
//       const updated = [...blogs, newBlog];
//       setBlogs(updated);
//       localStorage.setItem("blogs", JSON.stringify(updated));
//     }
//     setIsAddingNew(false);
//     setFormData({ title: "", excerpt: "", author: "", status: "draft" });
//   };

//   const handleEdit = (blog: BlogPost) => {
//     setFormData({
//       title: blog.title,
//       excerpt: blog.excerpt,
//       author: blog.author,
//       status: blog.status,
//     });
//     setEditingId(blog.id);
//     setIsAddingNew(true);
//   };

//   const handleDelete = (id: string) => {
//     const updated = blogs.filter((blog) => blog.id !== id);
//     setBlogs(updated);
//     localStorage.setItem("blogs", JSON.stringify(updated));
//   };

//   const handleCancel = () => {
//     setIsAddingNew(false);
//     setFormData({ title: "", excerpt: "", author: "", status: "draft" });
//   };

//   const publishedCount = blogs.filter((b) => b.status === "published").length;
//   const draftCount = blogs.filter((b) => b.status === "draft").length;

//   return (
//     <div className="space-y-6">
//       {/* Stats Overview */}
//       <div className="grid grid-cols-2 gap-4">
//         <Card className="border-border/50">
//           <CardContent className="pt-6">
//             <div className="text-center">
//               <div className="mb-1 text-2xl font-bold text-primary">
//                 {publishedCount}
//               </div>
//               <p className="text-xs text-muted-foreground">Published Posts</p>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="border-border/50">
//           <CardContent className="pt-6">
//             <div className="text-center">
//               <div className="mb-1 text-2xl font-bold text-muted-foreground">
//                 {draftCount}
//               </div>
//               <p className="text-xs text-muted-foreground">Draft Posts</p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Header with Search and Add Button */}
//       <div className="flex flex-col gap-4">
//         <div className="flex items-center justify-between gap-4">
//           <div className="relative flex-1">
//             <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
//             <Input
//               placeholder="Search posts by title or author..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="border-border/50 bg-background pl-9 text-foreground"
//             />
//           </div>
//           <Button
//             onClick={handleAddNew}
//             className="gap-2 whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90"
//           >
//             <Plus className="h-4 w-4" />
//             New Post
//           </Button>
//         </div>
//       </div>

//       {/* Add/Edit Form */}
//       {isAddingNew && (
//         <Card className="border-border/50 bg-secondary/30">
//           <CardHeader>
//             <CardTitle>{editingId ? "Edit Post" : "Create New Post"}</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div>
//               <Label className="text-foreground">Title</Label>
//               <Input
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({ ...formData, title: e.target.value })
//                 }
//                 className="mt-1 border-border/50 bg-background text-foreground"
//                 placeholder="Post title"
//               />
//             </div>
//             <div>
//               <Label className="text-foreground">Excerpt</Label>
//               <Input
//                 value={formData.excerpt}
//                 onChange={(e) =>
//                   setFormData({ ...formData, excerpt: e.target.value })
//                 }
//                 className="mt-1 border-border/50 bg-background text-foreground"
//                 placeholder="Brief description"
//               />
//             </div>
//             <div>
//               <Label className="text-foreground">Author</Label>
//               <Input
//                 value={formData.author}
//                 onChange={(e) =>
//                   setFormData({ ...formData, author: e.target.value })
//                 }
//                 className="mt-1 border-border/50 bg-background text-foreground"
//                 placeholder="Author name"
//               />
//             </div>
//             <div>
//               <Label className="text-foreground">Status</Label>
//               <div className="mt-2 flex gap-4">
//                 <label className="flex cursor-pointer items-center gap-2">
//                   <input
//                     type="radio"
//                     name="status"
//                     value="draft"
//                     checked={formData.status === "draft"}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         status: e.target.value as "draft" | "published",
//                       })
//                     }
//                     className="h-4 w-4"
//                   />
//                   <span className="text-sm text-foreground">Draft</span>
//                 </label>
//                 <label className="flex cursor-pointer items-center gap-2">
//                   <input
//                     type="radio"
//                     name="status"
//                     value="published"
//                     checked={formData.status === "published"}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         status: e.target.value as "draft" | "published",
//                       })
//                     }
//                     className="h-4 w-4"
//                   />
//                   <span className="text-sm text-foreground">Published</span>
//                 </label>
//               </div>
//             </div>
//             <div className="flex justify-end gap-2 pt-2">
//               <Button variant="outline" onClick={handleCancel}>
//                 Cancel
//               </Button>
//               <Button
//                 onClick={handleSave}
//                 className="bg-primary text-primary-foreground hover:bg-primary/90"
//               >
//                 Save
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {/* Blog Posts List */}
//       <div className="grid gap-4">
//         {filteredBlogs.length === 0 ? (
//           <Card className="border-border/50">
//             <CardContent className="pt-6 text-center text-muted-foreground">
//               {searchQuery
//                 ? "No posts match your search"
//                 : "No blog posts yet. Create your first one!"}
//             </CardContent>
//           </Card>
//         ) : (
//           filteredBlogs.map((blog) => (
//             <Card
//               key={blog.id}
//               className="border-border/50 transition-all hover:shadow-md"
//             >
//               <CardContent className="pt-6">
//                 <div className="flex items-start justify-between gap-4">
//                   <div className="min-w-0 flex-1">
//                     <div className="mb-2 flex items-center gap-3">
//                       <h3 className="truncate text-lg font-semibold text-foreground">
//                         {blog.title}
//                       </h3>
//                       <span
//                         className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-1 text-xs font-medium ${
//                           blog.status === "published"
//                             ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
//                             : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
//                         }`}
//                       >
//                         {blog.status === "published" ? "Published" : "Draft"}
//                       </span>
//                     </div>
//                     <p className="mb-3 text-sm text-muted-foreground">
//                       {blog.excerpt}
//                     </p>
//                     <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
//                       <span>By {blog.author}</span>
//                       <span className="flex items-center gap-1">
//                         <Calendar className="h-3 w-3" />
//                         {new Date(blog.createdAt).toLocaleDateString()}
//                       </span>
//                       {blog.status === "published" && (
//                         <span className="flex items-center gap-1">
//                           <Eye className="h-3 w-3" />
//                           {blog.views || 0} views
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="ml-4 flex flex-shrink-0 gap-2">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleEdit(blog)}
//                       className="text-primary hover:bg-primary/10"
//                     >
//                       <Edit2 className="h-4 w-4" />
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleDelete(blog.id)}
//                       className="text-destructive hover:bg-destructive/10"
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }
