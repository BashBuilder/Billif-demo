import { HeroSection } from "@/components/home/hero-section";
import GetStarted from "@/components/modules/general/GetStarted";
import DesignedIntegration from "@/components/modules/home/DesignedIntegration";
import Details from "@/components/modules/home/Details";
import PurposeBuilt from "@/components/modules/home/PurposeBuilt";
import WhyBillif from "@/components/modules/home/WhyBillif";
// import Hero from "@/c@/components/modules/home/WhyBillif

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyBillif />
      <Details />
      <PurposeBuilt />
      <DesignedIntegration />
      <GetStarted />
    </main>
  );
}
