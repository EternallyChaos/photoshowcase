import React from "react";
import Link from "next/link";
import Image from "next/image";

const ContactBanner = ({ bannerImage }) => {
  return (
    <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-4xl text-gray-700">
            Ready to transform your wedding moments into timeless memories?
            Contact us to capture every detail of your special day!
          </h2>

          <p className="hidden mt-4 max-w-3xl text-center text-gray-600 md:block">
            Experience unforgettable moments with our exquisite wedding
            photography services. Let us transform every cherished moment into
            timeless images that will tell your unique love story. Reach out to
            us today to reserve your date and start capturing your journey
            together!
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="/contact"
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Image
          alt="banner"
          src={bannerImage}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default ContactBanner;
