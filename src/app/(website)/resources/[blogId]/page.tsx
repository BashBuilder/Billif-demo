"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogPost | null>(null);

  async function fetchBlog() {
    if (!params) return;
    const postParams = { blogId: params.blogId };
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("billif_blogs")
        .select("*")
        .eq("id", postParams?.blogId)
        .single();

      if (error) {
        console.error("Supabase error:", error);
      } else {
        setBlog(data as BlogPost);
      }
    } catch (err) {
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  if (!params || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }
  if (!blog && !loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6">
        <h1 className="font-serif text-4xl">Post Not Found</h1>
        <Link href="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/resources">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header Section */}

      {/* Featured Image */}
      <div className="relative w-full bg-muted">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={blog?.imageUrl || "/placeholder.svg"}
          alt={blog?.title}
          className="max-h-[500px] w-full object-cover"
        />
        <section className="absolute bottom-0 left-0 mx-auto w-full bg-gradient-to-b from-transparent to-white pt-48">
          <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
            <div>
              <h1 className="mb-6 text-balance font-serif text-5xl font-bold leading-tight text-foreground max-md:text-3xl">
                {blog?.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-6 border-b border-border pb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog?.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(blog?.created_at ?? "").toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Content Section */}
      <div className="contain mx-auto max-w-5xl py-12">
        <div className="prose prose-lg max-w-none">
          <div
            className="space-y-6 leading-relaxed text-foreground"
            dangerouslySetInnerHTML={{
              __html: blog?.excerpt ?? "",
            }}
          />
        </div>
      </div>
    </article>
  );
}
