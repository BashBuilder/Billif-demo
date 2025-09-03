import CtaAction from "@/components/global/cta-action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, Eye, Users, CheckCircle, Globe } from "lucide-react";
// import Image from "next/image";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20 text-white lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl space-y-8">
            <h1 className="text-4xl font-bold lg:text-6xl">
              Peace of mind{" "}
              <span className="text-secondary">at every step</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              From onboarding to ongoing operations and managing financial data,
              Bill has security built in every step of the way.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-teal-600 px-8 text-white hover:bg-teal-700"
              >
                Contact sales
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white/10 hover:text-primary"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-primary text-3xl font-bold">
                Secure logins with SSO
              </h2>
              <p className="text-lg text-slate-600">
                Get a seamless login experience without compromising on security
                with support for SSO providers. Maintain control over user
                access with additional access with MFA for every user.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700">
                    Google Workspace integration
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700">
                    Microsoft Azure AD support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700">Okta integration</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                    <span className="text-sm font-bold text-red-600">G</span>
                  </div>
                  <span className="font-medium">Sign in with Google</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-sm font-bold text-blue-600">O</span>
                  </div>
                  <span className="font-medium">Sign in with Okta</span>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-sm font-bold text-blue-600">A</span>
                  </div>
                  <span className="font-medium">Sign in with Azure</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-8">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <div className="space-y-4 text-center">
                  <h4 className="text-primary text-lg font-bold">
                    Hardware Purchases
                  </h4>
                  <div className="text-sm text-slate-600">
                    Visa Card • 5 Guest Purchases
                  </div>
                  <div className="text-sm text-slate-600">
                    Office Supplies Electronics
                  </div>
                  <div className="text-primary text-3xl font-bold">
                    $1,235.00
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200">
                    <div className="h-2 w-3/4 rounded-full bg-teal-600"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>$0</span>
                    <span>$1,500</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-primary text-3xl font-bold">
                Block fraudulent charges with controls
              </h2>
              <p className="text-lg text-slate-600">
                Set up virtual cards restricted to a single vendor, that you can
                delete in a specialized amount. Get real-time notifications
                about your card and never worry about theft or fraud.
              </p>
              <Button className="bg-teal-600 text-white hover:bg-teal-700">
                Learn about controls →
              </Button>
            </div>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-primary text-3xl font-bold">
                Never worry with 24/7 monitoring
              </h2>
              <p className="text-lg text-slate-600">
                Our dedicated security team continuously monitors for suspicious
                activity. Our security and customer support teams are available
                24/7 and working around the clock for you.
              </p>
              <Button className="bg-teal-600 text-white hover:bg-teal-700">
                Contact support →
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/security-monitoring-team.png"
                alt="24/7 Security Monitoring Team"
                width={500}
                height={350}
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Data Encryption */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
                  <Lock className="h-6 w-6 text-slate-600" />
                </div>
                <div className="text-2xl text-slate-400">→</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
                  <Shield className="h-6 w-6 text-slate-600" />
                </div>
                <div className="text-2xl text-slate-400">→</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
                  <Globe className="h-6 w-6 text-slate-600" />
                </div>
                <div className="text-2xl text-slate-400">→</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
                  <Eye className="h-6 w-6 text-slate-600" />
                </div>
                <div className="text-2xl text-slate-400">→</div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
                  <Users className="h-6 w-6 text-slate-600" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Rest easy with data encryption
              </h2>
              <p className="text-lg text-slate-600">
                Because all data and financial data, valuable financial and
                employee data is constantly protected in multiple ways.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700">256-bit AES encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700">TLS 1.3 in transit</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700">End-to-end encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary lg:text-4xl">
              Compliant software you can trust
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Our security standards meet the highest industry requirements for
              financial data protection.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
            <Card className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-teal-100">
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-primary">NDPR</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Demonstrates our systems are designed to ensure your data is
                  always secure, available, and confidential according to
                  Nigeria Data Protection Regulation standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-teal-100">
                  <Lock className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-primary">PCI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Meets strict PCI security standards to ensure that all
                  sensitive payment card information is processed, transmitted,
                  and stored securely.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaAction />
      {/* <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-3xl font-bold lg:text-5xl">
              Time is money. Save both.
            </h2>
            <p className="text-xl text-slate-300">
              Experience enterprise-grade security with the simplicity your team
              deserves.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-teal-600 px-8 text-white hover:bg-teal-700"
              >
                Get contact for free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:text-primary border-white bg-transparent text-white hover:bg-white"
              >
                Download security guide
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
