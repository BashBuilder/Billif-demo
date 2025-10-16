import Demo from "@/components/global/demo";
import Fade from "@/components/global/fade";
import { integrationsData } from "@/data/data";
import Image from "next/image";

const IntegrationsDetails = () => {
  return (
    <section className="bg-blue-50/50 py-20">
      <div className="contain space-y-10">
        {integrationsData.map((item, index) => (
          <div
            key={item.title}
            className="flex items-center justify-around gap-12 space-y-8 max-md:flex-col"
          >
            <div className="basis-1/2 space-y-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
                className={`${index === 0 && "w-full max-w-52"}`}
              />
              <Fade className="space-y-2">
                <h3 className="font-heading text-3xl font-semibold text-primary">
                  {item.title}
                </h3>
                <div className="h-1 w-full rounded-full bg-primary" />
              </Fade>
              <p> {item.description} </p>
              <Fade className="">
                <Demo />
              </Fade>
            </div>
            {/* <div className="flex items-center justify-center">
              <Fade className="flex items-center justify-center rounded-full bg-orange-200 p-4 lg:h-[20vw] lg:w-[20vw]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1500}
                  height={1500}
                  quality={100}
                  className="h-full w-full rounded-md object-cover"
                />
              </Fade>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsDetails;
