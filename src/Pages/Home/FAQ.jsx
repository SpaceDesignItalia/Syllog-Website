import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
  return (
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 class="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <Accordion variant="light">
          <AccordionItem key="1" aria-label="FAQ 1" title="FAQ 1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionItem>
          <AccordionItem key="2" aria-label="FAQ 2" title="FAQ 2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionItem>
          <AccordionItem key="3" aria-label="FAQ 3" title="FAQ 3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
