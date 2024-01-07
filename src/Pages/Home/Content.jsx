//Utils
import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Continous from "../../assets/Continous_Training_2.svg";
import Onboard from "../../assets/Onboard.svg";
import Offboarding from "../../assets/Offboarding.svg";
import Success from "../../assets/Success.svg";

export default function Content() {
  //Registra la posizione del
  //componente rispetto allo schermo

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50% 0px",
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-50% 0px",
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: "-50% 0px",
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    rootMargin: "-50% 0px",
  });

  //Props animazione
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section ref={ref}>
        <div className="gap-16 items-center py-2 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row lg:justify-between lg:py-4 lg:px-6">
          <div className="md:w-1/2">
            <motion.h2
              className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.25,
              }}
            >
              <span style={{ color: '#0098CB' }}>Effortless</span> Onboarding
            </motion.h2>
            <motion.p
              className="md:text-lg mb-4"
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
              Save time in creating onboarding programs and let your new employees reach their full potential faster. Replace hard-to-use tools with our automated solutions and get rid of the boring activities to focus on what you care most: your people.
            </motion.p>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.75,
              }}
            >
              <Button color="primary" size="lg" radius="sm">
                Contact Us!
              </Button>
            </motion.div>
          </div>
          <div className="mt-8 md:w-1/2">
            <motion.img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.75,
              }}
              src={Onboard}
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section ref={ref2}>
        <div className="gap-16 items-center py-8 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row-reverse lg:justify-between lg:py-16 lg:px-6">
          <div className="md:w-1/2">
            <motion.h2
              className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.25,
              }}
            >
              <span style={{ color: '#0098CB' }}>Continous</span> Growth, Simplified
            </motion.h2>
            <motion.p
              className="md:text-lg mb-4"
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.5,
              }}
            >
              Learning should be a never ending journey. Create training programs and growth plans in seconds to let your people grow along with your company. Achieve more, faster.
            </motion.p>
            <motion.div
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.75,
              }}
            >
              <Button color="primary" size="lg" radius="sm">
                Contact Us!
              </Button>
            </motion.div>
          </div>
          <div className="mt-8 md:w-1/2">
            <motion.img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              style={{ width: '100%', height: 'auto' }}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.75,
              }}
              src={Continous}
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section ref={ref3}>
        <div className="gap-16 items-center py-8 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row lg:justify-between lg:py-16 lg:px-6">
          <div className="md:w-1/2">
            <motion.h2
              className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.25,
              }}
            >
              <span style={{ color: '#0098CB' }}>Smooth</span> Offboarding, Preserved Knowledge
            </motion.h2>
            <motion.p
              className="md:text-lg mb-4"
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.5,
              }}
            >
When team members depart, safeguard their invaluable insights. Seamlessly capture and convert departing knowledge into accessible learning content. Transition without the pain, retain the gain.            </motion.p>

            <motion.div
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.75,
              }}
            >
              <Button color="primary" size="lg" radius="sm">
                Contact Us!
              </Button>
            </motion.div>
          </div>
          <div className="mt-8 md:w-1/2">
            <motion.img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.75,
              }}
              src={Offboarding}
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section ref={ref4}>
        <div className="gap-16 items-center py-8 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row-reverse lg:justify-between lg:py-16 lg:px-6">
          <div className="md:w-1/2">
            <motion.h2
              className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.25,
              }}
            >
              <span style={{ color: '#0098CB' }}>Empower</span> Client Success
            </motion.h2>
            <motion.p
              className="md:text-lg mb-4"
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.5,
              }}
            >
              Revolutionize the client onboarding experience by effortlessly strategizing their learning journey through our AI-centric platform. Elevate client success from day one.
            </motion.p>
            <motion.div
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.75,
              }}
            >
              <Button color="primary" size="lg" radius="sm">
                Contact Us!
              </Button>
            </motion.div>
          </div>
          <div className="mt-8 md:w-1/2">
            <motion.img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.75,
              }}
              src={Success}
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
