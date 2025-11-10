"use client";
// import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ContactUs from "@/components/modules/general/GetStarted";

export default function ResourcesPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("billif_blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setBlogs(data as BlogPost[]);
    } catch (error) {
      console.log("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-20 pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <Badge variant="secondary" className="mb-6">
            Resources
          </Badge>
          <h1 className="mb-6 text-4xl font-bold text-primary md:text-6xl">
            Learn, grow, and optimize
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
            Access our comprehensive library of resources to master financial
            automation and drive your business forward.
          </p>
        </div>
      </section>

      {loading && (
        <div className="flex w-full items-center justify-center py-20">
          <span className="animate-pulse italic text-muted-foreground">
            Loading resources...
          </span>
        </div>
      )}

      {!loading && !blogs.length && (
        <div className="flex w-full items-center justify-center py-20">
          <span className="italic text-muted-foreground">
            No resources found.
          </span>
        </div>
      )}

      {/* Featured Resources */}
      {blogs.length > 0 && !loading && (
        <section className="px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 grid gap-8 md:grid-cols-3">
              {/* Featured Blog Post */}
              {/* <Link href={`/resources/blog/${blogs[0].id}`}> */}
              <Card
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl md:col-span-2"
                onClick={() => router.push(`/resources/${blogs[0].id}  `)}
              >
                <div className="aspect-video rounded-t-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blogs[0].imageUrl}
                    alt={blogs[0].title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <Badge variant="outline" className="mb-2 w-fit">
                    Featured
                  </Badge>
                  <CardTitle className="text-2xl transition-colors group-hover:text-primary">
                    {blogs[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(blogs[0].created_at).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* </Link> */}

              {/* Quick Stats */}
              <div className="space-y-6">
                <Card className="p-6 text-center">
                  <div className="mb-2 text-3xl font-bold text-primary">
                    {blogs.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Articles & Guides
                  </div>
                </Card>
              </div>
            </div>

            {blogs.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* {blogs.slice(1).map((blog) => ( */}
                {blogs.map((blog) => (
                  <Card
                    key={blog.id}
                    className="group border-2 transition-all duration-300 hover:border-primary/20 hover:shadow-xl"
                  >
                    <CardHeader className="pb-4 text-center">
                      <div className="aspect-video rounded-t-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={blog.imageUrl}
                          alt={blog.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-2xl">{blog.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {new Date(blog.created_at).toLocaleString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </CardDescription>
                      <Button
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                        onClick={() => router.push(`/resources/${blog.id}`)}
                      >
                        Read more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <ContactUs />
      {/* <section className="bg-gradient-to-br from-primary/5 to-secondary/5 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
            Stay ahead of the curve
          </h2>
          <p className="mb-8 text-xl text-muted-foreground">
            Get the latest insights, tips, and updates delivered to your inbox
          </p>
          <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
