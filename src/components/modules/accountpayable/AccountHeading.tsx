import Fade from "@/components/global/fade";
import TopographySvg from "@/components/global/TopographySvg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dashboardLink } from "@/data/links";
import { AlertCircle, ArrowRight, Brain, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PageProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const AccountHeading = ({ image, title, subtitle, description }: PageProps) => {
  return (
    <section className="bg-orange-50">
      <div className="contain relative mx-auto grid gap-10 overflow-hidden pt-32 lg:grid-cols-2">
        <TopographySvg
          color="black"
          className="absolute -bottom-[50%] -left-[25%] rotate-90 opacity-50"
        />
        <section className="relative z-10 flex w-full flex-col gap-5 max-lg:items-center max-lg:text-center lg:max-w-lg lg:pb-20">
          <Fade>
            <p className="uppercase text-primary"> {subtitle} </p>
          </Fade>
          <Fade duration={0.8}>
            <h1 className="font-heading text-4xl font-semibold">{title}</h1>
          </Fade>
          <div className="h-px w-4/5 rounded-full bg-primary" />
          <Fade duration={1.2}>
            <p className="text-slate-700">{description}</p>
          </Fade>
          <Fade duration={1} className="w-full max-w-xl pt-4 max-lg:mx-auto">
            <div className="flex items-center gap-8 max-lg:justify-center">
              <Fade>
                {/* <Demo /> */}
                <Link href={dashboardLink}>
                  <Button>Get started</Button>
                </Link>
              </Fade>
              <Fade>
                <Link href={dashboardLink}>
                  <Button
                    variant="outline"
                    className="border-primary bg-transparent text-primary hover:bg-primary hover:text-white"
                  >
                    Try for free
                  </Button>
                </Link>
              </Fade>
            </div>
          </Fade>
        </section>
        <Fade direction="left" className="min-h-full max-lg:py-10">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            quality={100}
            className="relative z-10 mx-auto max-h-72 rounded-md object-cover"
          />
        </Fade>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B3057] via-[#1B3057] to-[#04A2B2] text-white">
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
                  <span className="text-[#04A2B2]">
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
                <Button
                  size="lg"
                  className="bg-[#04A2B2] text-white hover:bg-[#04A2B2]/90"
                >
                  Experience AI Intelligence
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  Watch AI Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#04A2B2]">95%</div>
                  <div className="text-sm text-blue-200">Fraud Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#04A2B2]">3x</div>
                  <div className="text-sm text-blue-200">Faster Decisions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#04A2B2]">24/7</div>
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
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
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
    </section>
  );
};

export default AccountHeading;
