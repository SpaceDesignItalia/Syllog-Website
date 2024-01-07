import React from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function Contact() {
  return (
    <section className="h-screen flex justify-center items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="w-full">
        <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          Get in touch
        </h2>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-5">
            <Input label="Name" variant="faded" />
            <Input label="Surname" variant="faded" />
          </div>
          <Input label="Email" variant="faded" />
          <Input label="Company name" variant="faded" />
          <Textarea label="Message" variant="faded" />
          <Button color="primary" radius="sm" size="lg" className="w-1/6">
            Send
          </Button>
        </div>
      </div>
    </section>
  );
}
