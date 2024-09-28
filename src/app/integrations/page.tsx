import Faq from "@/components/global/Faq";
import AccountHeading from "@/components/modules/accountpayable/AccountHeading";
import GetStarted from "@/components/modules/general/GetStarted";

const page = () => {
  return (
    <main>
      <AccountHeading
        image="/assets/images/home/invoice image.png"
        title="Set up and send your first invoice in minutes."
        subtitle="Account receivable"
        description="Automate invoicing and get paid faster"
      />
      <Faq />
      <GetStarted />
    </main>
  );
};

export default page;
