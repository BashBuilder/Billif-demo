import Faq from "@/components/global/Faq";
import AccountHeading from "@/components/modules/accountpayable/AccountHeading";
import GetStarted from "@/components/modules/general/GetStarted";
import Support from "@/components/modules/general/Support";
import IntegrationsDetails from "@/components/modules/integrations/IntegrationsDetails";
import Levelup from "@/components/modules/integrations/Levelup";

const page = () => {
  return (
    <main>
      <AccountHeading
        image="/assets/images/home/invoice image.png"
        title="Automation. Integration. We've got you covered."
        subtitle="NextGen Integrations"
        description="Reduce manual data entry, reconcile accounts faster, and improve team productivity with automatic sync and data integration."
      />
      <Levelup />
      <IntegrationsDetails />
      <Support />
      <Faq />
      <GetStarted />
    </main>
  );
};

export default page;
