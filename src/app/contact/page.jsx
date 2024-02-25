import React from "react";
import Image from "next/image";
import Logo from "/public/contactus/Logo.png";
import ContactForm from "@/components/ContactForm";

const Page = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="w-full bg-gray-200 flex-1 flex flex-col">
        <div className="mt-12 lg:mt-0 lg:h-screen relative flex justify-center items-center h-[400px] sm:h-[500px] md:h-[700px]">
          <Image
            alt="img"
            src={Logo}
            fill
            sizes="100vw"
            className="object-center object-cover p-4 lg:p-16 rounded-full max-w-full h-auto overflow-hidden"
          />
          {/* <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center lg:text-4xl font-bold text-center">
            Contact Us
          </div> */}
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-col justify-center items-center p-20 text-center">
          <h3 className="text-sm text-center font-bold uppercase text-gray-600">
            Common Questions
          </h3>
          <div className="mt-16">
            <p className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-xl text-gray-500">
              How do I inquire?
            </p>
            <p className="max-w-xl mt-4 text-gray-600">
              Email us and let’s learn more about each other -
              ddtafilms2021@gmail.com
            </p>
          </div>
          <div className="mt-16">
            <p className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-xl text-gray-500">
              What are your prices?
            </p>
            <p className="max-w-xl mt-4 text-gray-600 text-center">
              We can provide you collection information when you contact us -
              ddtafilms2021@gmail.com
            </p>
          </div>
          <div className="mt-16">
            <p className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-xl text-gray-500">
              Do you work Pan India?
            </p>
            <p className="max-w-xl mt-4 text-gray-600 text-center">
              Yes. We’ve documented lots of weddings since going full-time in
              2021. Although based in Kolkata our majority works have been
              outside.
            </p>
          </div>
          <div className="mt-16">
            <p className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-xl text-gray-500">
              Do you do elopements or non-wedding sessions?
            </p>
            <p className="max-w-xl mt-4 text-gray-600 text-center">
              Definitely. Email us if you’re curious about our approach with
              this.
            </p>
          </div>
          <div className="mt-16">
            <p className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-xl text-gray-500">
              How many photos do you deliver?
            </p>
            <p className="max-w-xl mt-4 text-gray-600 text-center">
              The average is between 600 and 800 images for a full-day wedding.
              Images are delivered digitally in a mix of colour and black and
              white.
            </p>
          </div>
          <div className="mt-16">
            <p className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-xl text-gray-500">
              Do you offer hourly wedding coverage?
            </p>
            <p className="max-w-xl mt-4 text-gray-600 text-center">
              Yes. However, storytelling is best achieved via all day coverage
              and 95% of the couples who book us choose unlimited hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
