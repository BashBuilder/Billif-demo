import GetStartedBtn from "@/components/general/get-started-btn";
import Fade from "@/components/global/fade";
import { integrationsData } from "@/data/data";
import Image from "next/image";

const IntegrationsDetails = () => {
  return (
    <section className="bg-blue-50/50 pb-10">
      <div className="contain grid grid-cols-2 gap-12 max-md:grid-cols-1">
        {integrationsData.map((item, index) => (
          <div
            key={item.title}
            className="flex items-start space-y-8 max-md:flex-col"
          >
            <div className="space-y-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                className={`${(index === 0 || index === 1) && "w-full max-w-52"} h-20 object-contain object-left`}
              />
              <Fade className="space-y-2">
                <h3 className="font-heading text-3xl font-semibold text-primary">
                  {item.title}
                </h3>
                <div className="h-1 w-full rounded-full bg-primary" />
              </Fade>
              <p> {item.description} </p>
              <Fade>
                <GetStartedBtn />
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsDetails;
