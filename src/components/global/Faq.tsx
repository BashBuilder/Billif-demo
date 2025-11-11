import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FaqType {
  faq?: { question: string; answer: string }[];
  lightMode?: boolean;
}

const Faq = ({ faq, lightMode }: FaqType) => {
  return (
    <section className="contain space-y-6 py-20">
      <h1
        className={`text-center font-heading text-4xl font-semibold ${lightMode ? "text-white" : "text-primary"} `}
      >
        Frequently asked questions
      </h1>
      {faq && (
        <div className="mx-auto max-w-screen-md">
          <Accordion type="single" collapsible>
            {faq.map((faqItem, index) => (
              <AccordionItem
                key={index}
                value={`item ${index + 1}`}
                className="hover:*:decoration-transparent"
              >
                <AccordionTrigger className="">
                  <p
                    className={`whitespace-pre-wrap font-heading text-xl font-semibold text-primary ${lightMode ? "text-white" : "text-primary"} `}
                  >
                    {faqItem.question}
                  </p>
                </AccordionTrigger>
                <AccordionContent>{faqItem.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}
    </section>
  );
};

export default Faq;
