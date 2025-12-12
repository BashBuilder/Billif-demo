/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  Zap,
  Shield,
  BarChart3,
  FileText,
  Users,
  Workflow,
  Database,
  // Play,
} from "lucide-react";
import { useEffect, useState } from "react";
import CtaAction from "@/components/global/cta-action";
import GetStartedBtn from "@/components/general/get-started-btn";
import Demo from "@/components/global/demo";
import Fade from "@/components/global/fade";

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <main className="min-h-screen">
      {/* Subtle Background Elements */}
      <Fade className="pointer-events-none absolute inset-0 overflow-hidden">
        <Fade className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-100/30 blur-3xl"></Fade>
        <Fade className="absolute right-20 top-40 h-96 w-96 animate-pulse rounded-full bg-teal-100/20 blur-3xl delay-1000"></Fade>
        <div className="delay-2000 absolute bottom-20 left-1/3 h-80 w-80 animate-pulse rounded-full bg-slate-100/40 blur-3xl"></div>
      </Fade>

      {/* Hero Section */}
      <section className="relative z-10 py-20 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <Fade duration={1}>
              <h1
                className={`mb-6 text-5xl font-bold text-slate-900 transition-all duration-1000 md:text-6xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                Streamline your financial workflows with{" "}
                <span className="bg-gradient-to-r from-primary to-teal-600 bg-clip-text text-transparent">
                  intelligent automation
                </span>
              </h1>
            </Fade>
            <Fade>
              <p
                className={`mb-8 text-xl leading-relaxed text-slate-600 transition-all delay-200 duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                Keep your clients&apos; businesses healthy by staying on top of
                their payables and receivables. Eleven&apos;s AI-powered
                automated workflows and data recognition will help you manage
                cash flow without the manual effort.
              </p>
            </Fade>

            <Fade
              className={`delay-400 flex flex-col justify-center gap-4 transition-all duration-1000 sm:flex-row ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <GetStartedBtn />
              <Demo />
            </Fade>
          </div>
        </div>
      </section>

      {/* Video/Demo Section */}
      <div className="relative mx-auto max-w-7xl">
        <Fade className="relative rounded-3xl border border-border/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-2xl lg:p-12">
          <img
            src="/assets/images/Screenshot 2025-08-25 091834.png"
            alt="Bill Intelligent Flow Technologies - Modern Financial Dashboard"
            className="w-full rounded-2xl border border-border/30 shadow-xl"
          />
        </Fade>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 py-20 text-primary-foreground">
        <div className="container mx-auto flex gap-6 px-4 max-md:flex-col">
          <Fade className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              Comprehensive Financial Automation Solutions
            </h1>
            <p className="mb-8 text-xl leading-relaxed opacity-90">
              Transform your financial operations with our intelligent
              automation platform. From invoice processing to cash flow
              management, we deliver fast, accurate, and effortless solutions.
            </p>
            <GetStartedBtn />
          </Fade>
          <Fade className="w-full max-w-3xl">
            <img
              src="/assets/images/Screenshot 2025-09-02 124718.png"
              alt="Financial automation services overview"
              className="mx-auto w-full rounded-lg shadow-2xl"
            />
          </Fade>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Fade className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">
                Our Core Services
              </h2>
              <p className="text-lg text-muted-foreground">
                End-to-end financial automation solutions designed for modern
                businesses
              </p>
            </Fade>

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
                  <Fade>
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
                  </Fade>
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
      <section className="bg-white py-20">
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
                  <Fade>
                    Enterprise-level security with SOC 2 compliance, end-to-end
                    encryption, and comprehensive audit trails.
                  </Fade>
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
          <div className="mt-12 flex items-center justify-center text-center">
            <GetStartedBtn />
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

            <div className="grid gap-6 md:grid-cols-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaAction />
    </main>
  );
}
