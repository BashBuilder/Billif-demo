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
import {
  ArrowRight,
  Brain,
  Zap,
  Shield,
  Eye,
  Lightbulb,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";
import Demo from "@/components/global/demo";
import Link from "next/link";
import { dashboardLink } from "@/data/links";

export default function IntelligencePage() {
  const [activeFeature, setActiveFeature] = useState("detection");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section - Same style as analytics */}
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
                  AI-Powered Intelligence
                </Badge>
                <h1 className="text-balance text-5xl font-bold leading-tight">
                  AI that thinks ahead.
                  <span className="text-secondary">
                    {" "}
                    Decisions made simple.
                  </span>
                </h1>
                <p className="text-pretty text-xl leading-relaxed text-blue-100">
                  Let AI handle the complexity. Our intelligent system learns
                  your business patterns, predicts outcomes, and automates
                  decisions so you can focus on growth.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href={dashboardLink}>
                  <Button
                    size="lg"
                    className="bg-secondary text-white hover:bg-secondary/90"
                  >
                    Experience AI Intelligence
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Demo />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">95%</div>
                  <div className="text-sm text-blue-200">Fraud Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">3x</div>
                  <div className="text-sm text-blue-200">Faster Decisions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-blue-200">AI Monitoring</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <div className="relative rounded-xl bg-white p-8 shadow-2xl">
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      AI Intelligence Dashboard
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="animate-pulse rounded-full border-2 border-green-500 p-1">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm text-gray-600">
                        Live AI Analysis
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 p-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-green-800">
                          Invoice #INV-2024-001 Approved
                        </span>
                      </div>
                      <span className="text-xs text-green-600">
                        AI Confidence: 98%
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                      <div className="flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-800">
                          Unusual Pattern Detected
                        </span>
                      </div>
                      <span className="text-xs text-yellow-600">
                        Requires Review
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-blue-50 p-3">
                      <div className="flex items-center gap-3">
                        <Brain className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">
                          Cash Flow Prediction Updated
                        </span>
                      </div>
                      <span className="text-xs text-blue-600">
                        Next 30 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1B3057]">
              Intelligent Financial Operations
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our AI doesn&apos;t just process data—it understands your business
              and makes intelligent decisions
            </p>
          </div>

          <div className="mb-16 grid gap-8 lg:grid-cols-3">
            <Card
              className={`cursor-pointer transition-all ${activeFeature === "detection" ? "shadow-lg ring-2 ring-secondary" : "hover:shadow-md"}`}
              onClick={() => setActiveFeature("detection")}
            >
              <CardHeader>
                <Eye className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Smart Detection</CardTitle>
                <CardDescription>
                  AI identifies anomalies, fraud patterns, and compliance issues
                  in real-time
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className={`cursor-pointer transition-all ${activeFeature === "prediction" ? "shadow-lg ring-2 ring-secondary" : "hover:shadow-md"}`}
              onClick={() => setActiveFeature("prediction")}
            >
              <CardHeader>
                <TrendingUp className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Predictive Insights</CardTitle>
                <CardDescription>
                  Forecast cash flow, predict payment delays, and anticipate
                  business needs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card
              className={`cursor-pointer transition-all ${activeFeature === "automation" ? "shadow-lg ring-2 ring-secondary" : "hover:shadow-md"}`}
              onClick={() => setActiveFeature("automation")}
            >
              <CardHeader>
                <Zap className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Intelligent Automation</CardTitle>
                <CardDescription>
                  Automate complex decisions based on learned patterns and
                  business rules
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Feature Details */}
          <div className="rounded-2xl bg-gray-50 p-8">
            {activeFeature === "detection" && (
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-[#1B3057]">
                    Advanced Fraud Detection
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">
                          Real-time Transaction Monitoring
                        </p>
                        <p className="text-sm text-gray-600">
                          Every transaction is analyzed for suspicious patterns
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Behavioral Analysis</p>
                        <p className="text-sm text-gray-600">
                          AI learns normal business patterns to detect anomalies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Compliance Monitoring</p>
                        <p className="text-sm text-gray-600">
                          Automatic checks against regulatory requirements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Fraud Detection Rate
                      </span>
                      <span className="text-2xl font-bold text-secondary">
                        95.2%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-secondary"
                        style={{ width: "95.2%" }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600">
                          1,247
                        </div>
                        <div className="text-xs text-gray-600">
                          Threats Blocked
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">
                          0.3s
                        </div>
                        <div className="text-xs text-gray-600">
                          Avg Detection Time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeature === "prediction" && (
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-[#1B3057]">
                    Predictive Financial Intelligence
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="mt-1 h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">Cash Flow Forecasting</p>
                        <p className="text-sm text-gray-600">
                          Predict cash flow up to 12 months in advance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-medium">Payment Delay Prediction</p>
                        <p className="text-sm text-gray-600">
                          Identify clients likely to pay late before it happens
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="mt-1 h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium">
                          Business Opportunity Detection
                        </p>
                        <p className="text-sm text-gray-600">
                          AI identifies growth opportunities and cost savings
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h4 className="mb-4 font-semibold">
                    Next 30 Days Prediction
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                      <span className="text-sm">Expected Revenue</span>
                      <span className="font-bold text-green-600">₦45,000</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-red-50 p-3">
                      <span className="text-sm">Predicted Expenses</span>
                      <span className="font-bold text-red-600">₦28,000</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3">
                      <span className="text-sm">Net Cash Flow</span>
                      <span className="font-bold text-blue-600">₦17,000</span>
                    </div>
                    <div className="pt-2 text-xs text-gray-600">
                      Confidence: 87% • Updated 2 hours ago
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeFeature === "automation" && (
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-[#1B3057]">
                    Intelligent Process Automation
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Zap className="mt-1 h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="font-medium">Smart Approval Workflows</p>
                        <p className="text-sm text-gray-600">
                          AI routes approvals based on amount, vendor, and risk
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Brain className="mt-1 h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium">Adaptive Learning</p>
                        <p className="text-sm text-gray-600">
                          System improves decisions based on your feedback
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="mt-1 h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Risk-Based Processing</p>
                        <p className="text-sm text-gray-600">
                          Higher risk transactions get additional scrutiny
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h4 className="mb-4 font-semibold">Automation Performance</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-blue-50 p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        89%
                      </div>
                      <div className="text-xs text-gray-600">Auto-Approved</div>
                    </div>
                    <div className="rounded-lg bg-green-50 p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        2.3s
                      </div>
                      <div className="text-xs text-gray-600">
                        Avg Process Time
                      </div>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        99.7%
                      </div>
                      <div className="text-xs text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="rounded-lg bg-orange-50 p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        75%
                      </div>
                      <div className="text-xs text-gray-600">Time Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1B3057]">
              Why Choose AI Intelligence?
            </h2>
            <p className="text-xl text-gray-600">
              Transform your financial operations with cutting-edge AI
              technology
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <Lightbulb className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our AI gets smarter every day, learning from your business
                  patterns to make better decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <Shield className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Bank-level security with AI-powered threat detection keeps
                  your financial data safe.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <Users className="mb-4 h-12 w-12 text-secondary" />
                <CardTitle>Human-AI Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI handles routine tasks while humans focus on strategic
                  decisions and exceptions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Same style as analytics */}
      <section className="bg-gradient-to-r from-[#1B3057] to-secondary py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Experience AI-Powered Finance?
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            Join the future of financial operations with intelligent automation
            that learns and adapts to your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={dashboardLink}>
              <Button
                size="lg"
                className="bg-white text-[#1B3057] hover:bg-gray-100"
              >
                Start AI Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
