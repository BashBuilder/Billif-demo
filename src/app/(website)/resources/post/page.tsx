"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog post data
// eslint-disable-next-line
const blogPosts: Record<string, any> = {
  "getting-started-with-nextjs": {
    id: 1,
    title: "Getting Started with Next.js",
    author: "Sarah Chen",
    date: "2024-11-15",
    readTime: "8 min read",
    category: "Development",
    featuredImage: "/modern-web-development-setup.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Next.js has revolutionized the way we build web applications. With its powerful features and excellent developer experience, it's become the go-to framework for modern React applications.</p>
      
      <h2>Why Choose Next.js?</h2>
      <p>Next.js provides a comprehensive framework that includes:</p>
      <ul>
        <li>Server-side rendering for better SEO and performance</li>
        <li>Static generation for lightning-fast content delivery</li>
        <li>API routes for backend functionality</li>
        <li>Built-in optimization for images, fonts, and scripts</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js project, simply run:</p>
      <pre>npx create-next-app@latest</pre>
      
      <p>This will scaffold a new project with all the necessary configuration. Follow the prompts to customize your setup.</p>
      
      <h2>Key Features</h2>
      <p>The App Router in Next.js 14+ provides an intuitive way to handle routing and layouts. You can organize your code in a way that makes sense for your application structure.</p>
      
      <p>Server Components allow you to fetch data directly in your components, reducing the need for client-side state management and improving performance.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js is a powerful framework that simplifies many aspects of web development. Whether you're building a small project or a large-scale application, Next.js provides the tools and flexibility you need to succeed.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: "Advanced React Patterns",
        author: "James Wilson",
        date: "2024-11-10",
        excerpt:
          "Explore advanced patterns and best practices for scaling React applications.",
        slug: "advanced-react-patterns",
      },
      {
        id: 3,
        title: "Web Performance Optimization",
        author: "Emma Rodriguez",
        date: "2024-11-08",
        excerpt:
          "Learn techniques to optimize your web applications for maximum performance.",
        slug: "web-performance-optimization",
      },
    ],
  },
};

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [postParams, setPostParams] = useState<{ slug: string } | null>(null);

  // Handle async params
  Promise.resolve(params).then(setPostParams);

  if (!postParams) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  const post = blogPosts[postParams.slug];

  if (!post) {
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
    <article className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
      </nav>

      {/* Header Section */}
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="mb-4 inline-block rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
            {post.category}
          </span>
          <h1 className="mb-6 text-balance font-serif text-5xl font-bold leading-tight text-foreground">
            {post.title}
          </h1>
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-6 border-b border-border pb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full bg-muted py-12">
        <img
          src={post.featuredImage || "/placeholder.svg"}
          alt={post.title}
          className="h-96 w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div
            className="space-y-6 leading-relaxed text-foreground"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(
                  /<h2>/g,
                  '<h2 className="text-3xl font-serif font-bold mt-8 mb-4 text-foreground">',
                )
                .replace(/<p>/g, '<p className="text-base">')
                .replace(
                  /<ul>/g,
                  '<ul className="list-disc list-inside space-y-2">',
                )
                .replace(/<li>/g, '<li className="text-base">')
                .replace(
                  /<pre>/g,
                  '<pre className="bg-muted rounded p-4 overflow-x-auto">',
                )
                .replace(/<code>/g, '<code className="font-mono text-sm">'),
            }}
          />
        </div>

        {/* Author Bio */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-accent">
              <User className="h-8 w-8 text-accent-foreground" />
            </div>
            <div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
                {post.author}
              </h3>
              <p className="text-muted-foreground">
                A passionate writer and developer sharing insights about web
                development, design, and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
