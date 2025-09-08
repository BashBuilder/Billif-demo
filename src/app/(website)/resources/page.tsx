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
import {
  ArrowRight,
  BookOpen,
  Users,
  FileText,
  Video,
  Calendar,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navigation /> */}

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

      {/* Featured Resources */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {/* Featured Blog Post */}
            <Card className="group transition-all duration-300 hover:shadow-xl md:col-span-2">
              <div className="aspect-video rounded-t-lg bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <CardHeader>
                <Badge variant="outline" className="mb-2 w-fit">
                  Featured
                </Badge>
                <CardTitle className="text-2xl transition-colors group-hover:text-primary">
                  The Future of Financial Automation: 2025 Trends
                </CardTitle>
                <CardDescription className="text-lg">
                  Discover the key trends shaping financial automation and how
                  to prepare your business for what&apos;s next.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>January 15, 2025</span>
                  </div>
                  <Link href="/resources/blog/future-financial-automation">
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card className="p-6 text-center">
                <div className="mb-2 text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Articles & Guides
                </div>
              </Card>
              <Card className="p-6 text-center">
                <div className="mb-2 text-3xl font-bold text-secondary">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Case Studies
                </div>
              </Card>
              <Card className="p-6 text-center">
                <div className="mb-2 text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">
                  Video Tutorials
                </div>
              </Card>
            </div>
          </div>

          {/* Resource Categories */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog */}
            <Card className="group border-2 transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Blog</CardTitle>
                <CardDescription className="text-lg">
                  Latest insights, tips, and industry analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      Industry trends and analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Best practices and tips</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">
                      Product updates and features
                    </span>
                  </div>
                </div>
                <Link href="/resources/blog">
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Explore Blog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="group border-2 transition-all duration-300 hover:border-secondary/20 hover:shadow-xl">
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Case Studies</CardTitle>
                <CardDescription className="text-lg">
                  Real success stories from our clients
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">ROI and efficiency gains</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Implementation strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Industry-specific solutions</span>
                  </div>
                </div>
                <Link href="/resources/case-studies">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                  >
                    View Case Studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Whitepapers */}
            <Card className="group border-2 transition-all duration-300 hover:border-primary/20 hover:shadow-xl">
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Whitepapers</CardTitle>
                <CardDescription className="text-lg">
                  In-depth research and analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Market research reports</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Technical deep dives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Strategic frameworks</span>
                  </div>
                </div>
                <Link href="/resources/whitepapers">
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Download Papers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Webinars */}
            <Card className="group border-2 transition-all duration-300 hover:border-secondary/20 hover:shadow-xl md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                  <Video className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Webinars</CardTitle>
                <CardDescription className="text-lg">
                  Live and on-demand educational sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6 space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Product demonstrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Expert panel discussions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">Q&A with specialists</span>
                  </div>
                </div>
                <Link href="/resources/webinars">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                  >
                    Join Webinars
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 px-4 py-20">
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
      </section>
    </div>
  );
}
