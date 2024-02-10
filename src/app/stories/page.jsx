"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Homer from "/public/pexels-asad-photo-maldives-3601439.jpg";
import MasonrySection from "@/components/MasonrySection";

import ImageOne from "/public/pexels-dimitri-kuliuk-1488312.jpg";
import ImageTwo from "/public/pexels-dmitry-zvolskiy-1721944.jpg";
import ImageThree from "/public/pexels-deesha-chandra-35981.jpg";
import ImageFour from "/public/pexels-rocsana-nicoleta-gurza-948185.jpg";
import ImageFive from "/public/pexels-jeremy-wong-1043902.jpg";
import ImageSix from "/public/pexels-terje-sollie-313707.jpg";

import NextJsImage from "@/components/NextJsImage";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive, ImageSix];

const Page = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <div className="relative">
        <Image
          alt="img"
          src={Homer}
          className="object-center object-cover h-screen"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center text-white text-center">
          <div>
            <div className="font-bold text-7xl">Sirena & Eric</div>
            <div className="font-bold text-2xl mt-2">India</div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center">
        <div className="max-w-xl">
          <div>
            <p className="text-sm text-center">Elopement</p>
            <p className="text-lg">Paradise in the Arctic</p>
          </div>
        </div>
        <div className="mt-4 max-w-2xl">
          Lofoten is one of the world’s most incredible archipelagos, with a
          string of islands so beautiful it’s surreal. The village of Svolvær,
          with its serene nature and seclusion, made for a magical backdrop to
          host the story of Sirena and Eric. We felt taunted by the beautiful
          photos of northern Norway, and specifically by the unique landscape of
          the Lofoten Islands. – Sirena and Eric
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center mx-auto">
        <MasonrySection slides={slides} setIndex={setIndex} />
      </div>
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
};

export default Page;
