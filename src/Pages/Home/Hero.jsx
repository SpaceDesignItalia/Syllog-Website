import React from "react";
import { Button } from "@nextui-org/react";
import HeroImg from "../../assets/Home/Hero.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section className="flex flex-col gap-20 justify-center items-center max-w-screen-2xl px-4 py-8 mx-auto lg:py-16 h-screen">
      <div>
        <motion.h1
          className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center"
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.25 }}
        >
          Gen AI Tools for the Learners of Tomorrow
        </motion.h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <motion.h1
            className="text-center md:text-left max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
            initial={{ y: 150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.25,
              delay: 0.5,
            }}
          >
            Lorem ipsum dolor sit amet.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              className="w-full md:w-1/5"
            >
              Sign up
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
          <img src={HeroImg} alt="Hero" className="object-contain" />
        </motion.div>
      </div>
    </motion.section>
  );
}
