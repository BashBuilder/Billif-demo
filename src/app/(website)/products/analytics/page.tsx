"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  PieChart,
  Users,
  DollarSign,
  FileText,
  AlertTriangle,
  CreditCard,
  Target,
} from "lucide-react";
import Image from "next/image";

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B3057] via-[#1B3057] to-secondary text-white">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="border-white/20 bg-white/10 text-white"
                >
                  Real-time Analytics
                </Badge>
                <h1 className="text-balance text-5xl font-bold leading-tight">
                  Instant answers.
                  <span className="text-secondary"> Zero blind spots.</span>
                </h1>
                <p className="text-pretty text-xl leading-relaxed text-blue-100">
                  See & control it. Get real-time visibility into every dollar
                  with no manual work. Advanced insights and analytics are built
                  around your business flow.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90"
                >
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">99.9%</div>
                  <div className="text-sm text-blue-200">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-blue-200">Real-time Updates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">85%</div>
                  <div className="text-sm text-blue-200">Time Saved</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <Image
                  src="/assets/images/1311213_313.jpg"
                  alt="Business Analytics Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Preview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1B3057]">
              Comprehensive Financial Intelligence
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Get instant visibility into your financial performance with
              interactive dashboards and real-time analytics
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-8">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="mb-8 grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
                <TabsTrigger value="status">Status</TabsTrigger>
                <TabsTrigger value="clients">Clients</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-green-800">
                        Total Revenue
                      </CardTitle>
                      <DollarSign className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-900">
                        ₦200.00
                      </div>
                      <p className="text-xs text-green-600">0 paid invoices</p>
                      <p className="text-xs text-green-600">
                        ↗ +0.0% vs prev period
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-red-800">
                        Total Expenses
                      </CardTitle>
                      <CreditCard className="h-4 w-4 text-red-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-red-900">
                        ₦0.00
                      </div>
                      <p className="text-xs text-red-600">0 payables</p>
                      <p className="text-xs text-red-600">
                        ↗ +0.0% vs prev period
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-blue-800">
                        Net Income
                      </CardTitle>
                      <TrendingUp className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-blue-900">
                        ₦200.00
                      </div>
                      <p className="text-xs text-blue-600">
                        Revenue - Expenses - Credits
                      </p>
                      <p className="text-xs text-blue-600">📈 Profitable</p>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-200 bg-yellow-50">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium text-yellow-800">
                        Pending Approvals
                      </CardTitle>
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-yellow-900">
                        0
                      </div>
                      <p className="text-xs text-yellow-600">
                        Awaiting approval
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        Revenue vs Expenses
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/assets/images/home/Screenshot 2025-10-14 105826.png"
                        alt="Revenue vs Expenses Chart"
                        width={500}
                        height={300}
                        className="rounded-lg"
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-5 w-5" />
                        Invoice Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/assets/images/home/Screenshot 2025-10-14 105848.png"
                        alt="Invoice Status Chart"
                        width={500}
                        height={300}
                        className="rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="cashflow">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Cash Flow Analysis</CardTitle>
                    <CardDescription>
                      Track your cash flow trends over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src="/assets/images/home/Screenshot 2025-10-14 105921.png"
                      alt="Monthly Cash Flow Analysis"
                      width={800}
                      height={400}
                      className="w-full rounded-lg"
                    />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="status">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="text-blue-800">
                        Total Invoices
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-900">1</div>
                      <p className="text-sm text-blue-600">1 unpaid</p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-red-800">
                        Overdue Payables
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-red-900">0</div>
                      <p className="text-sm text-red-600">Past due date</p>
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-200 bg-yellow-50">
                    <CardHeader>
                      <CardTitle className="text-yellow-800">
                        Credit Notes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-yellow-900">
                        0
                      </div>
                      <p className="text-sm text-yellow-600">Total issued</p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader>
                      <CardTitle className="text-purple-800">
                        Top Client Revenue
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-purple-900">
                        ₦200.00
                      </div>
                      <p className="text-sm text-purple-600">Codelicious</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="clients">
                <Card>
                  <CardHeader>
                    <CardTitle>Client Performance Analytics</CardTitle>
                    <CardDescription>
                      Analyze your top performing clients and revenue streams
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-lg bg-gray-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-bold text-white">
                            C
                          </div>
                          <div>
                            <div className="font-semibold">Codelicious</div>
                            <div className="text-sm text-gray-600">
                              Primary Client
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[#1B3057]">
                            ₦200.00
                          </div>
                          <div className="text-sm text-gray-600">
                            100% of revenue
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1B3057]">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to make data-driven financial decisions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <BarChart3 className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Real-time Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get instant insights with live dashboards that update
                  automatically as transactions occur.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <TrendingUp className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Forecast cash flow trends and identify potential issues before
                  they impact your business.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <Target className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Custom KPIs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track the metrics that matter most to your business with
                  customizable key performance indicators.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <Users className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Client Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Understand client behavior, payment patterns, and revenue
                  contribution across your portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <FileText className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Automated Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generate comprehensive financial reports automatically and
                  schedule delivery to stakeholders.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <AlertTriangle className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Smart Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receive intelligent notifications about anomalies, overdue
                  payments, and important financial events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1B3057] to-secondary py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Transform Your Financial Analytics?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Join thousands of businesses that trust Bill Intelligent Flow
            Technologies for their financial intelligence needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-[#1B3057] hover:bg-gray-100"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
