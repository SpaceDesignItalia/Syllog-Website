import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration: 1.5,
        type: "spring",
        bounce: 0.25,
        delay: 0.5,
      }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
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
    </motion.section>
  );
}
