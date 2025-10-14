import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ContactFaq = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our platform
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  How quickly can we get started?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Most clients are up and running within minutes. We provide
                  dedicated implementation support and pre-configured industry
                  templates to accelerate deployment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you integrate with our existing systems?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes, we have pre-built connectors for major Accounting
                  Platforms (Quickbooks, Sage) and can create custom
                  integrations for your specific requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What about data security and compliance?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We maintain SOC 2 Type II compliance, use bank-grade
                  encryption, and support industry-specific requirements like
                  HIPAA for healthcare organizations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is training included?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Absolutely. We provide comprehensive training for your team,
                  ongoing support, and access to our knowledge base and video
                  tutorials.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Can we try before we buy?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes, you get a few credits to access the platform with full
                  functionality
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What kind of ROI can we expect?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Our clients typically see 300% ROI within the first year
                  through reduced processing time, fewer errors, and improved
                  cash flow management.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
