import Faq from "@/components/global/Faq";
import HeaderLayout2 from "@/components/global/header-layout-2";
import ContactUs from "@/components/modules/general/GetStarted";
import Support from "@/components/modules/general/Support";
import IntegrationsDetails from "@/components/modules/integrations/IntegrationsDetails";
import Levelup from "@/components/modules/integrations/Levelup";
import { integrationsFaq } from "@/data/faq";

const page = () => {
  return (
    <main>
      <HeaderLayout2
        showBadge={true}
        badgeText="Accounting Integration"
        mainTitle="Automation. Integration. "
        subTitle="We've got you covered"
        description=" Simplify your workflow with seamless integrations.
                  Effortlessly connect your accounting tools, automate data
                  sync, and streamline processes so you can focus on what
                  matters most."
        showTrialButton={true}
        showCalendlyButton={true}
        image="/assets/images/2606569_5904.jpg"
        imageAlt="Business Analytics Dashboard"
        stat1Label="Integrated Platforms"
        stat1Value="3+"
        stat2Label="Data Sync Accuracy"
        stat2Value="100%"
        stat3Label="Manual Entry Needed"
        stat3Value="Zero"
      />
      <Levelup />
      <IntegrationsDetails />
      <Support />
      <Faq faq={integrationsFaq} />
      <ContactUs />
    </main>
  );
};

export default page;
