import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building, Globe, Users, Shield } from "lucide-react";
import Image from "next/image";
import CtaAction from "@/components/global/cta-action";
import Link from "next/link";
import CalendlyWidget from "@/components/Widget/calendly";
import { signupLink } from "@/data/links";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="border-teal-200 bg-teal-50 text-teal-700"
                >
                  Enterprise Ready
                </Badge>
                <h1 className="text-4xl font-bold leading-tight text-primary lg:text-6xl">
                  Advanced automation for your{" "}
                  <span className="text-teal-600">enterprise</span>
                </h1>
                <p className="text-xl leading-relaxed text-slate-600">
                  All-in-one corporate card and expense management platform that
                  streamlines costs and drives efficiency.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-teal-600 px-8 text-white hover:bg-teal-700"
                  >
                    Contact sales
                  </Button>
                </Link>
                <CalendlyWidget />
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl bg-white p-8 shadow-2xl">
                <Image
                  src="/assets/images/120214.jpg"
                  alt="Enterprise Automation Platform"
                  width={600}
                  height={400}
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-5xl">
            {/* Finance automation at enterprise scale */}
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-slate-300">
            Powerful financial controls and intelligent automation deployed
            companywide saving your team time and resources.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="mb-20 grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Supporting you globally, in office and on the go
              </h3>
              <p className="pb-4 text-lg text-slate-600">
                Bill supports teams and remote workers with reimbursements in
                more than 100 countries, providing a truly global platform for
                your business needs.
              </p>
              <Link href={signupLink}>
                <Button className="bg-teal-600 text-white hover:bg-teal-700">
                  Explore global →
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg bg-slate-100 p-4 text-center">
                  <Globe className="mx-auto h-8 w-8 text-teal-600" />
                  <div className="text-sm font-medium">Global Coverage</div>
                </div>
                <div className="rounded-lg bg-slate-100 p-4 text-center">
                  <Users className="mx-auto h-8 w-8 text-teal-600" />
                  <div className="text-sm font-medium">Team Management</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-slate-100 p-4 text-center">
                  <Shield className="mx-auto h-8 w-8 text-teal-600" />
                  <div className="text-sm font-medium">Enterprise Security</div>
                </div>
                <div className="rounded-lg bg-slate-100 p-4 text-center">
                  <Building className="mx-auto h-8 w-8 text-teal-600" />
                  <div className="text-sm font-medium">
                    Multi-Entity Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Cards */}
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-8">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <div className="text-lg font-bold text-red-600">Oracle</div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <div className="text-lg font-bold text-blue-600">
                    Microsoft
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <div className="text-lg font-bold text-purple-600">Slack</div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center shadow-sm">
                  <div className="text-lg font-bold text-blue-500">Okta</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Connectivity from email to ERP
              </h3>
              <p className="pb-4 text-lg text-slate-600">
                Connect your ecosystem to automate management and reduce manual
                work. From email to ERP, for accounting, HRIS, and
                manufacturing.
              </p>
              <Link href={signupLink}>
                <Button className="bg-teal-600 text-white hover:bg-teal-700">
                  Integrate easily →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Security and compliance peace of mind
              </h3>
              <p className="text-lg text-slate-600">
                Rest easy knowing your financial data is protected with
                enterprise-grade security, compliance standards, and 24/7
                monitoring.
              </p>
              <div className="space-y-4 pb-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700">NDPR compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700">PCI DSS compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-600" />
                  <span className="text-slate-700">256-bit encryption</span>
                </div>
              </div>
              <Link href={signupLink}>
                <Button className="bg-teal-600 text-white hover:bg-teal-700">
                  Request security →
                </Button>
              </Link>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="space-y-6">
                <div className="text-center">
                  <h4 className="mb-4 text-xl font-bold text-primary">
                    Enterprise team offsite
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                    <span className="text-sm font-medium">Alcohol & bars</span>
                    <div className="h-4 w-8 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                    <span className="text-sm font-medium">Clothing</span>
                    <div className="h-4 w-8 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                    <span className="text-sm font-medium">Virtual card</span>
                    <div className="h-4 w-8 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                    <span className="text-sm font-medium">Physical card</span>
                    <div className="h-4 w-8 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                    <span className="text-sm font-medium">Reimbursements</span>
                    <div className="h-4 w-8 rounded-full bg-green-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaAction />
    </div>
  );
}
