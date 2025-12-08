/* eslint-disable @next/next/no-img-element */
import { CheckCircle } from "lucide-react";
import GetStartedBtn from "../general/get-started-btn";
import Demo from "../global/demo";

const trustedBrands = [
  {
    name: "Qorepay",
    logo: "/assets/Logo - Color On White - Transparent (3).png",
    brandColor: "#4F46E5",
  },
  { name: "AgroCourt", logo: "", brandColor: "#10B981" },
  { name: "QoreInsure", logo: "", brandColor: "#EF4444" },
  // { name: "Qore Insure", logo: "/assets/logos/brand-1.svg" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-b from-primary/70 via-white to-white py-20 pt-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 text-center">
          {/* Main Headline */}
          <div className="flex items-center gap-4 max-md:flex-col">
            <div className="mx-auto max-w-4xl space-y-6">
              <div className="mb-6 inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-secondary">
                <CheckCircle className="mr-2 h-4 w-4" />
                Trusted by 500+ Financial Teams
              </div>

              <h1 className="text-5xl font-bold leading-tight text-primary lg:text-7xl">
                {/* Make Your Financial */}
                Smarter Billing
                <br />
                <span className="text-secondary">Zero Error</span>
              </h1>

              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
                Automate workflows, eliminate errors, and accelerate decisions
                with intelligent financial process management.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <GetStartedBtn />
                <Demo />
              </div>
            </div>

            <img
              src="/assets/images/9245942 1.png"
              alt="Bill Intelligent Flow Technologies - Modern Financial Dashboard"
              className="max-h-[400px] rounded-2xl"
            />
          </div>

          {/* Hero Image/Dashboard */}
          <div className="relative mx-auto max-w-5xl">
            <div className="relative rounded-3xl border border-border/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-2xl lg:p-12">
              <img
                src="/assets/images/Screenshot 2025-08-25 091834.png"
                alt="Bill Intelligent Flow Technologies - Modern Financial Dashboard"
                className="w-full rounded-2xl border border-border/30 shadow-xl"
              />

              {/* Floating Elements */}
              <div className="absolute -left-4 -top-6 rounded-2xl border border-border/20 bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-primary">
                    Live Processing
                  </span>
                </div>
              </div>

              <div className="absolute -right-4 -top-6 rounded-2xl bg-secondary px-4 py-3 text-secondary-foreground shadow-lg">
                <div className="text-sm font-bold">99.9%</div>
                <div className="text-xs opacity-90">Accuracy</div>
              </div>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 transform rounded-2xl bg-primary px-6 py-3 text-primary-foreground shadow-lg">
                <div className="text-center">
                  <div className="text-lg font-bold">3x</div>
                  <div className="text-xs opacity-90">Faster Processing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Powering financial operations for industry leaders
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 lg:gap-12">
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                  <span className="text-xs font-bold text-primary">B</span>
                </div>
                <span className="text-sm font-medium">Banking</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10">
                  <span className="text-xs font-bold text-secondary">F</span>
                </div>
                <span className="text-sm font-medium">FinTech</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                  <span className="text-xs font-bold text-primary">E</span>
                </div>
                <span className="text-sm font-medium">Enterprise</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10">
                  <span className="text-xs font-bold text-secondary">S</span>
                </div>
                <span className="text-sm font-medium">Startups</span>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 pt-12">
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-primary">Fast Implementation</h3>
            </div>
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-primary">Zero Errors</h3>
            </div>
            <div className="space-y-3 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-primary">Full Integration</h3>
            </div>
          </div>

          {/* Sponsored Brands Banner */}
          <div className="pt-12">
            <p className="mb-8 text-sm font-medium text-muted-foreground">
              Trusted by leading brands worldwide
            </p>
            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 p-8">
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                {/* Replace with actual brand logos */}
                {trustedBrands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex h-16 items-center justify-center"
                  >
                    {brand.logo ? (
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-h-12 w-auto opacity-70 transition-opacity hover:opacity-100"
                      />
                    ) : (
                      <div
                        className={`flex items-center justify-center rounded-lg p-4 text-3xl font-bold text-white`}
                        style={{ color: brand.brandColor }}
                      >
                        {/* {brand.name.substring(0, 2).toUpperCase()} */}
                        {brand.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
