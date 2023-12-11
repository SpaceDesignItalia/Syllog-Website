import React from "react";
import { Button } from "@nextui-org/react";
import HeroImg from "../../assets/Home/Hero.png";

export default function Hero() {
  return (
    <section class="flex flex-col gap-20 justify-center items-center max-w-screen-2xl px-4 py-8 mx-auto lg:py-16 h-screen">
      <div>
        <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
          Gen AI Tools for the Learners of Tomorrow
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div class="flex flex-col justify-center w-full md:w-1/2">
          <h1 class="text-center md:text-left max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Lorem ipsum dolor sit amet.
          </h1>
          <p class="text-center md:text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            color="primary"
            size="lg"
            radius="sm"
            className="w-full md:w-1/5"
          >
            Sign in
          </Button>
        </div>
        <div class="w-full md:w-1/2">
          <img src={HeroImg} alt="Hero" className=" object-contain" />
        </div>
      </div>
    </section>
  );
}
