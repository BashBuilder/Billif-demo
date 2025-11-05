import { overviewData, termOfUseData, termOfUseDescription } from "@/data/term";
import Link from "next/link";

const TermOfUse = () => {
  return (
    <main className="space-y-12 pb-20">
      <section className="bg-orange-50 pb-20 pt-32">
        <div className="contain space-y-10">
          <h1 className="mx-auto max-w-screen-md text-center font-heading text-4xl text-primary">
            BIll Intelligent Flow Technologies (Billif) <br /> Terms of Service
          </h1>
          <p className="text-center"> Effective Date: </p>
        </div>
      </section>

      <section className="contain space-y-6">
        <h2 className="font-heading text-3xl font-semibold text-primary">
          PART A: OVERVIEW OF WHAT THIS AGREEMENT COVERS
        </h2>
        {overviewData.map((item, index) => (
          <div key={item.title} className="space-y-4">
            <h3 className="whitespace-pre-wrap font-heading text-2xl text-primary">
              <span> {index + 1}. </span> {item.title}
            </h3>
            <p className="whitespace-pre-wrap"> {item.details} </p>
            {item.list && (
              <ul className="ml-10 list-disc marker:text-primary">
                {item.list.map((item) => (
                  <li key={item}>
                    <p className="whitespace-pre-wrap">{item} </p>
                  </li>
                ))}
              </ul>
            )}
            {item.conclusion && (
              <p className="whitespace-pre-wrap"> {item.conclusion} </p>
            )}
          </div>
        ))}
      </section>

      <section className="contain space-y-6">
        <h2 className="font-heading text-3xl font-semibold text-primary">
          PART B: TERMS OF USE
        </h2>
        <p className="whitespace-pre-wrap">{termOfUseDescription}</p>
        {termOfUseData.map((item, index) => (
          <div key={item.title} className="space-y-4">
            <h3 className="whitespace-pre-wrap font-heading text-2xl text-primary">
              <span> {index + 1}. </span> {item.title}
            </h3>
            <p className="whitespace-pre-wrap"> {item.details} </p>
            {item.list && (
              <ul className="ml-10 list-disc marker:text-primary">
                {item.list.map((item) => (
                  <li key={item}>
                    <p className="whitespace-pre-wrap">{item} </p>
                  </li>
                ))}
              </ul>
            )}
            {item.conclusion && (
              <p className="whitespace-pre-wrap"> {item.conclusion} </p>
            )}
          </div>
        ))}
        <ul className="ml-10 list-disc marker:text-primary">
          <li className="space-x-2">
            <span>Email : </span>
            <Link
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@getBillif.io"
              className="underline"
            >
              hello@getBillif.io
            </Link>
            <span>,</span>
            <Link
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@getBillif.io"
              className="underline"
            >
              support@getBillif.io
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default TermOfUse;
