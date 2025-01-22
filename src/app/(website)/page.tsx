import GetStarted from "@/components/modules/general/GetStarted";
import DesignedIntegration from "@/components/modules/home/DesignedIntegration";
import Details from "@/components/modules/home/Details";
import Hero from "@/components/modules/home/Hero";
import PurposeBuilt from "@/components/modules/home/PurposeBuilt";
import WhyNextgen from "@/components/modules/home/WhyNextgen";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyNextgen />
      <Details />
      <PurposeBuilt />
      <DesignedIntegration />
      <GetStarted />
    </main>
  );
}
