//Utils
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FAQ() {
  //Registra la posizione del
  //componente rispetto allo schermo
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });

  //Props animazione
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="h-screen flex justify-center items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
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
      <div className="w-full">
        <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <Accordion variant="light">
          <AccordionItem key="1" aria-label="FAQ 1" title={<span className=" text-2xl">How does Syllog platform works?</span>}>
          Our platform simplifies the process: upload a variety of scattered data—be it audio, videos, or documents. Based on your specifications and preferences, the system crafts your desired learning program. In just a few clicks, you'll receive an AI-generated draft of your training program in your preferred format. From there, you have the flexibility to edit, expand, and refine. Once satisfied, either export it for external use or directly publish it within the platform.
          </AccordionItem>
          <AccordionItem key="2" aria-label="FAQ 2" title={<span className=" text-2xl">Who is Syllog platform for?</span>}>
          Our platform caters to:
          <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
              <li>Companies experiencing rapid change, enabling them to expedite employee training and maximize productivity.</li>
              <li>Business partners seeking an effortless way to craft and share learning content, enhancing customer training on products and services.</li>
              <li>Educational institutions and schools looking to simplify the creation of teaching materials.</li>
          </ul>
          </AccordionItem>
          <AccordionItem key="3" aria-label="FAQ 3" title={<span className=" text-2xl">Why should I use Syllog?</span>}>
            Syllog addresses the primary challenges professionals face with traditional software solutions like Learning Management Systems. Leveraging AI, you won't begin from scratch; instead, your learning content is automatically generated based on the data you've uploaded, all with just a few clicks.          </AccordionItem>
          <AccordionItem key="4" aria-label="FAQ 4" title={<span className=" text-2xl">How to get started with Syllog?</span>}>
            Reach out at <span className="font-bold">info@syllog.it</span> to try our solutions firsthand! Let's arrange a brief, friendly call to get to know each other better.
          </AccordionItem>
        </Accordion>
      </div>
    </motion.section>
  );
}
