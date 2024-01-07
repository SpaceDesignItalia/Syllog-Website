//Utils
import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

//Assetts
import HeroImg from "../../assets/Home/Hero2.svg";

export default function Hero() {
  return (
    <motion.section className="flex flex-col gap-20 md:justify-center mb-6 items-center max-w-screen-xl px-4 py-8 mx-auto lg:py-16 h-auto md:h-screen">
      <div>
        <motion.h1
          className="max-w-2xl mb-6 text-5xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.25 }}
        >
          People  <span style={{ color: '#0098CB' }}>Training Programs</span> in seconds with AI
        </motion.h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <motion.h1
            className="text-center md:text-left max-w-2xl mb-4 text-2xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.5,
            }}
          >
           Turn <span style={{ color: '#0098CB' }}>fragmented</span> knowledge into <span style={{ color: '#0098CB' }}>impactful</span> learning experiences
          </motion.h1>
          <motion.p
            className="text-center md:text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.75,
            }}
          >
            With our AI-automated platform, you can easily create, monitor and share training content for your employees and customers in no-time, starting from your scattered data.
          </motion.p>
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 1,
            }}
          >
            <Button
              color="primary"
              size="lg"
              radius="sm"
              className="w-full md:w-1/4"
            >
              Discover More!
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.45,
            delay: 0.5,
          }}
        >
          <img src={HeroImg} alt="Hero" className="object-contain"/>
        </motion.div>
      </div>
    </motion.section>
  );
}