import Faq from "@/components/global/Faq";
import { billifFaq } from "@/data/faq";

const PrivacyPolicy = () => {
  return (
    <main className="space-y-12 pb-20">
      <section className="bg-gradient-to-br from-primary via-primary to-secondary py-20 text-white lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto space-y-8">
            <h1 className="text-navy-900 text-4xl font-bold lg:text-6xl">
              FAQ
            </h1>
          </div>
        </div>
        <Faq faq={billifFaq} lightMode={true} />
      </section>
    </main>
  );
};

export default PrivacyPolicy;
