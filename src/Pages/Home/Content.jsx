import React from "react";
import { Button } from "@nextui-org/react";

export default function Content() {
  return (
    <>
      <section>
        <div className="gap-16 items-center py-8 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row lg:justify-between lg:py-16 lg:px-6">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="md:text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
          <div className="mt-8 md:w-1/2">
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://i0.wp.com/bungalooknursery.com.au/wp-content/uploads/2022/12/test-image-Not-seen-on-Bungalook-Web-Page-used-for-testing-Image-related-stuff.jpg?w=1920&ssl=1"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="gap-16 items-center py-8 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row-reverse lg:justify-between lg:py-16 lg:px-6">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="md:text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
            <Button color="primary" size="lg" radius="sm">
              Contattaci
            </Button>
          </div>
          <div className="mt-8 md:w-1/2">
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://i0.wp.com/bungalooknursery.com.au/wp-content/uploads/2022/12/test-image-Not-seen-on-Bungalook-Web-Page-used-for-testing-Image-related-stuff.jpg?w=1920&ssl=1"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="gap-16 items-center py-8 px-4 md:mx-auto md:max-w-screen-xl flex flex-col md:flex-row lg:justify-between lg:py-16 lg:px-6">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet
            </h2>
            <p className="md:text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
          <div className="mt-8 md:w-1/2">
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://i0.wp.com/bungalooknursery.com.au/wp-content/uploads/2022/12/test-image-Not-seen-on-Bungalook-Web-Page-used-for-testing-Image-related-stuff.jpg?w=1920&ssl=1"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
}
