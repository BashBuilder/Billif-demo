/* eslint-disable @next/next/no-img-element */
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
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
  FileText,
  Users,
  Workflow,
  Database,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* <Navigation /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6">
              Our Services
            </Badge>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Comprehensive Financial Automation Solutions
            </h1>
            <p className="mb-8 text-xl leading-relaxed opacity-90">
              Transform your financial operations with our intelligent
              automation platform. From invoice processing to cash flow
              management, we deliver fast, accurate, and effortless solutions.
            </p>
            <img
              src="/assets/images/Screenshot 2025-09-02 124718.png"
              alt="Financial automation services overview"
              className="mx-auto w-full max-w-3xl rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Our Core Services
              </h2>
              <p className="text-lg text-muted-foreground">
                End-to-end financial automation solutions designed for modern
                businesses
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="h-full">
                <CardHeader>
                  <FileText className="mb-4 h-12 w-12 text-secondary" />
                  <CardTitle className="text-2xl">
                    Intelligent Invoice Processing
                  </CardTitle>
                  <CardDescription className="text-base">
                    Automate your entire invoice lifecycle with AI-powered
                    document processing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>
                        OCR and data extraction from any document format
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Automated approval workflows and routing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Real-time validation and error detection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Integration with existing ERP systems</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="mb-2 text-sm font-semibold text-secondary">
                      Key Benefits:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Reduce processing time by 95%, eliminate manual errors,
                      and improve vendor relationships with faster payments.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <BarChart3 className="mb-4 h-12 w-12 text-secondary" />
                  <CardTitle className="text-2xl">
                    Smart Cash Flow Management
                  </CardTitle>
                  <CardDescription className="text-base">
                    Optimize your cash flow with predictive analytics and
                    automated forecasting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Real-time cash position monitoring</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Predictive cash flow forecasting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Automated payment scheduling optimization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Multi-currency support and hedging alerts</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="mb-2 text-sm font-semibold text-secondary">
                      Key Benefits:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Improve cash visibility by 90%, reduce late payment
                      penalties, and optimize working capital management.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <Workflow className="mb-4 h-12 w-12 text-secondary" />
                  <CardTitle className="text-2xl">
                    Automated Approval Workflows
                  </CardTitle>
                  <CardDescription className="text-base">
                    Streamline approvals with intelligent routing and escalation
                    management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Customizable approval hierarchies</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Smart routing based on amount and category</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Mobile approval capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Automated escalation and reminders</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="mb-2 text-sm font-semibold text-secondary">
                      Key Benefits:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Reduce approval time by 80%, ensure compliance, and
                      maintain complete audit trails for all transactions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader>
                  <Database className="mb-4 h-12 w-12 text-secondary" />
                  <CardTitle className="text-2xl">
                    Financial Data Integration
                  </CardTitle>
                  <CardDescription className="text-base">
                    Seamlessly connect all your financial systems and data
                    sources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>API-first integration architecture</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Pre-built connectors for major ERP systems</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Real-time data synchronization</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span>Data quality monitoring and cleansing</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="mb-2 text-sm font-semibold text-secondary">
                      Key Benefits:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Eliminate data silos, ensure data accuracy, and enable
                      real-time financial reporting across all systems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-muted-foreground">
                Built for enterprise scale with the flexibility to grow with
                your business
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <Zap className="mx-auto mb-4 h-12 w-12 text-secondary" />
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Process thousands of documents in minutes, not hours. Our
                    AI-powered engine delivers unmatched speed.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="mx-auto mb-4 h-12 w-12 text-secondary" />
                  <CardTitle>Bank-Grade Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Enterprise-level security with SOC 2 compliance, end-to-end
                    encryption, and comprehensive audit trails.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="mx-auto mb-4 h-12 w-12 text-secondary" />
                  <CardTitle>24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Dedicated customer success team with round-the-clock support
                    and personalized onboarding.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Simple Implementation Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Get up and running in weeks, not months
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-foreground">
                  1
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Discovery & Planning
                </h3>
                <p className="text-sm text-muted-foreground">
                  We analyze your current processes and design a customized
                  automation strategy
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-foreground">
                  2
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  System Integration
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seamless connection to your existing ERP, accounting, and
                  banking systems
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-foreground">
                  3
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Training & Testing
                </h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive team training and thorough testing to ensure
                  smooth operations
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-foreground">
                  4
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Go Live & Support
                </h3>
                <p className="text-sm text-muted-foreground">
                  Full deployment with ongoing support and optimization for
                  maximum ROI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-primary">
              Flexible Pricing for Every Business
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              From startups to enterprise, we have a solution that scales with
              your needs
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <CardDescription>
                    Perfect for small businesses
                  </CardDescription>
                  <div className="mt-4 text-3xl font-bold text-primary">
                    $299<span className="text-base font-normal">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                      Up to 500 invoices/month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                      Basic workflow automation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                      Email support
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative border-2 border-secondary">
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 transform bg-secondary">
                  Most Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Professional</CardTitle>
                  <CardDescription>Ideal for growing companies</CardDescription>
                  <div className="mt-4 text-3xl font-bold text-primary">
                    $799<span className="text-base font-normal">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                      Up to 2,000 invoices/month
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                      Advanced automation & analytics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                      Priority support
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                  <div className="mt-4 text-3xl font-bold text-primary">
                    Custom
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                      Unlimited processing
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                      Custom integrations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-secondary" />
                      Dedicated support team
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90"
                >
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Join hundreds of companies who&apos;ve streamlined their processes
              with our intelligent automation platform
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  View Solutions
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center text-sm opacity-80">
              <CheckCircle className="mr-2 h-4 w-4" />
              30-day free trial • No setup fees • Cancel anytime
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
