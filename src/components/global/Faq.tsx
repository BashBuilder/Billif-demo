import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faq = ({ faq }: { faq?: { question: string; answer: string }[] }) => {
  return (
    <section className="contain space-y-6 py-20">
      <h1 className="text-center font-heading text-4xl font-semibold text-orange-dark">
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
                  <p className="whitespace-pre-wrapf font-heading text-xl font-semibold text-orange-dark">
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
