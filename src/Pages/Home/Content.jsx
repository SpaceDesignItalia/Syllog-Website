//Utils
import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  //Props animazione
  const variants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section ref={ref}>
        <div className="gap-16 items-center py-8 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row lg:justify-between lg:py-16 lg:px-6">
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
              Lorem ipsum dolor sit amet
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
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
                Contattaci
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
              src="https://i0.wp.com/bungalooknursery.com.au/wp-content/uploads/2022/12/test-image-Not-seen-on-Bungalook-Web-Page-used-for-testing-Image-related-stuff.jpg?w=1920&ssl=1"
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
              Lorem ipsum dolor sit amet
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
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
                Contattaci
              </Button>
            </motion.div>
          </div>
          <div className="mt-8 md:w-1/2">
            <motion.img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={variants}
              transition={{
                duration: 1.5,
                type: "spring",
                bounce: 0.25,
                delay: 0.75,
              }}
              src="https://i0.wp.com/bungalooknursery.com.au/wp-content/uploads/2022/12/test-image-Not-seen-on-Bungalook-Web-Page-used-for-testing-Image-related-stuff.jpg?w=1920&ssl=1"
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
              Lorem ipsum dolor sit amet
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </motion.p>

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
                Contattaci
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
              src="https://i0.wp.com/bungalooknursery.com.au/wp-content/uploads/2022/12/test-image-Not-seen-on-Bungalook-Web-Page-used-for-testing-Image-related-stuff.jpg?w=1920&ssl=1"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
