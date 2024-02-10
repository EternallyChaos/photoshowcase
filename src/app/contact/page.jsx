import React from "react";
import Image from "next/image";
import ImageFour from "/public/pexels-min-an-752842.jpg";
import ContactForm from "@/components/ContactForm";

const Page = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="w-full bg-gray-200 flex-1 flex flex-col">
        <div className="mt-12 lg:mt-0 lg:h-screen relative flex justify-center items-center h-[400px] sm:h-[500px] md:h-[700px]">
          <Image
            alt="img"
            src={ImageFour}
            fill
            sizes="100vw"
            className="object-center object-cover p-4 lg:p-16 rounded-full max-w-full h-auto overflow-hidden"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center lg:text-4xl font-bold text-center">
            Contact Us
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col justify-center items-center p-20 text-center">
          <h3>Common Questions</h3>
          <div className="mt-12">
            <p className="font-semibold text-2xl">How do I inquire?</p>
            <p className="max-w-lg mt-4">
              Email us and let’s learn more about each other -
              info@nordicaphotography.com
            </p>
          </div>
          <div className="mt-12">
            <p className="font-semibold text-2xl">How do I inquire?</p>
            <p className="max-w-lg mt-4">
              Email us and let’s learn more about each other -
              info@nordicaphotography.com
            </p>
          </div>
          <div className="mt-12">
            <p className="font-semibold text-2xl">How do I inquire?</p>
            <p className="max-w-lg mt-4">
              Email us and let’s learn more about each other -
              info@nordicaphotography.com
            </p>
          </div>
          <div className="mt-12">
            <p className="font-semibold text-2xl">How do I inquire?</p>
            <p className="max-w-lg mt-4">
              Email us and let’s learn more about each other -
              info@nordicaphotography.com
            </p>
          </div>

          <div className="mt-12">
            <p className="font-semibold text-2xl">How do I inquire?</p>
            <p className="max-w-lg mt-4">
              Email us and let’s learn more about each other -
              info@nordicaphotography.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
