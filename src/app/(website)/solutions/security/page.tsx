import CtaAction from "@/components/global/cta-action";
import Fade from "@/components/global/fade";
import HeaderLayout1 from "@/components/global/header-layout-1";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Lock, Eye, Users, CheckCircle, Globe } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderLayout1
        mainTitle=" Peace of mind "
        subTitle="at every step"
        description=" From onboarding to ongoing operations and managing financial data,
              Bill has security built in every step of the way."
        showCalendlyButton={true}
        showContactButton={true}
      />

      {/* Data Encryption */}
      <Fade className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <Fade className="flex items-center justify-center space-x-4">
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
              </Fade>
            </div>
            <Fade className="space-y-6">
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
            </Fade>
          </div>
        </div>
      </Fade>

      {/* Compliance */}
      <Fade className="py-20">
        <div className="container mx-auto px-4">
          <Fade className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary lg:text-4xl">
              Compliant software you can trust
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-slate-600">
              Our security standards meet the highest industry requirements for
              financial data protection.
            </p>
          </Fade>

          <Fade className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2">
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
          </Fade>
        </div>
      </Fade>

      <CtaAction />
    </div>
  );
}
