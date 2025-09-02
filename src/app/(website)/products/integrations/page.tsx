import Faq from "@/components/global/Faq";
import AccountHeading from "@/components/modules/accountpayable/AccountHeading";
import GetStarted from "@/components/modules/general/GetStarted";
import Support from "@/components/modules/general/Support";
import IntegrationsDetails from "@/components/modules/integrations/IntegrationsDetails";
import Levelup from "@/components/modules/integrations/Levelup";
import { integrationsFaq } from "@/data/faq";

const page = () => {
  return (
    <main>
      <AccountHeading
        image="/assets/images/integrations/Frame 7149.png"
        title="Automation. Integration. We've got you covered."
        subtitle="Bill-if Integrations"
        description="Reduce manual data entry, reconcile accounts faster, and improve team productivity with automatic sync and data integration."
      />
      <Levelup />
      <IntegrationsDetails />
      <Support />
      <Faq faq={integrationsFaq} />
      <GetStarted />
    </main>
  );
};

export default page;
