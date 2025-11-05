import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CalendlyWidget from "@/components/Widget/calendly";
import Link from "next/link";
import { dashboardLink } from "@/data/links";

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "Starter Pack",
      description: "Perfect for small businesses",
      price: 8000,
      originalPrice: null,
      credits: 250,
      perCredit: 32.0,
      savings: null,
      popular: false,
    },
    {
      name: "Professional Pack",
      description: "Most popular for growing businesses",
      price: 20000,
      originalPrice: 24000,
      credits: 750,
      perCredit: 26.67,
      savings: 17,
      popular: true,
    },
    {
      name: "Enterprise Pack",
      description: "Best value for large operations",
      price: 30000,
      originalPrice: 40000,
      credits: 1250,
      perCredit: 24.0,
      savings: 25,
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20 text-white lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="text-navy-900 text-4xl font-bold lg:text-6xl">
              Purchase Credits.{" "}
              <span className="text-teal-600">Unlock Efficiency.</span>
            </h1>

            <p className="mx-auto max-w-3xl text-slate-300">
              Choose the perfect credit package for your business needs. More
              credits mean greater savings per unit.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="bg-teal-600 px-8 text-white hover:bg-teal-700">
                  Contact sales
                </Button>
              </Link>

              <CalendlyWidget />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-navy-900 mb-2 text-3xl font-bold">
              Purchase Credits
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="relative">
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 transform">
                    <Badge>Most Popular</Badge>
                  </div>
                )}

                <Card
                  className={`flex h-full flex-col ${
                    tier.popular
                      ? "border-navy-900 border-2 shadow-lg"
                      : "border border-slate-200"
                  }`}
                >
                  <CardHeader className="flex flex-row justify-between pb-6">
                    <div>
                      <CardTitle className="text-navy-900 text-xl font-bold">
                        {tier.name}
                      </CardTitle>
                      <CardDescription className="mt-1 text-xs text-slate-600">
                        {tier.description}
                      </CardDescription>
                    </div>

                    <div className="mt-6 space-y-2">
                      <div className="flex flex-col items-baseline">
                        {tier.originalPrice && (
                          <span className="text-xs text-slate-400 line-through">
                            ₦{tier.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-navy-900 text-xl font-bold">
                          ₦{tier.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col space-y-6">
                    <div className="border-y border-slate-200 py-2 text-center">
                      <div className="text-navy-900 text-xl font-bold">
                        {tier.credits.toLocaleString()}
                      </div>
                      <div className="mt-1 text-xs text-slate-600">credits</div>
                    </div>
                    <Link href={dashboardLink} className="w-full">
                      <Button className="w-full">Purchase Now</Button>
                    </Link>

                    <div className="space-y-2 text-center">
                      <div className="text-sm text-slate-600">
                        ₦{tier.perCredit.toFixed(2)} per credit
                      </div>
                      {tier.savings && (
                        <div className="text-sm font-semibold text-teal-600">
                          Save {tier.savings}%
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
