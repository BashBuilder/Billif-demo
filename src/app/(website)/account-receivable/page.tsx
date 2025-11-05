import Faq from "@/components/global/Faq";
import AccountHeading from "@/components/modules/accountpayable/AccountHeading";
import AccountSteps from "@/components/modules/accountpayable/AcountSteps";
import AccountReceivableDetail from "@/components/modules/accountreceivable/AccountReceivableDetail";
import ContactUs from "@/components/modules/general/GetStarted";
import DesignedIntegration from "@/components/modules/home/DesignedIntegration";
import { accountReceivableSteps } from "@/data/data";
import { ArSolution } from "@/data/faq";

const page = () => {
  return (
    <main>
      <AccountHeading
        image="/assets/images/home/invoice image.png"
        title="Set up and send your first invoice in minutes."
        subtitle="Account receivable"
        description="Automate invoicing and get paid faster"
      />
      <AccountSteps
        title="Simplify invoicing in four steps"
        steps={accountReceivableSteps}
      />
      <AccountReceivableDetail />
      <DesignedIntegration />
      <Faq faq={ArSolution} />
      <ContactUs />
    </main>
  );
};

export default page;
