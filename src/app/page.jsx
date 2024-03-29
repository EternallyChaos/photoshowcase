"use client";

import { useState } from "react";
import Image from "next/image";
import HomeImage from "/public/home.jpg";

import HimachalImageOne from "/public/himachal/1.jpg";
import OdishaImageOne from "/public/odisha/1.jpg";
import KolkataImageOne from "/public/kolkata/1.jpg";
import GoaImageOne from "/public/goa/1.jpg";
import HimachalImageFour from "/public/himachal/4.jpg";

import ImageSignature from "@/components/ImageSignature";
import VideoModal from "@/components/VideoModal";
import MapChart from "@/components/MapWithMarker";
import { CouplesInfo } from "@/data/CouplesInfo";
import ContactBanner from "@/components/ContactBanner";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  // const videoId = "CwTM0JfUsGs?si=9A8C-BuBbmFHWAAl";// youtube video id
  const videoId = "767325081";// vimeo video id
  

  return (
    <main className="">
      <div className="relative">
        <Image
          alt="img"
          src={HomeImage}
          className="w-full object-center object-cover h-screen"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center">
          <button
            onClick={openModal}
            className="font-manrope-medium uppercase text-sm font-bold"
          >
            <div className="py-8 px-8 bg-gray-100 text-gray-400 hover:bg-gray-300 hover:text-gray-700 text-md">
              <p>Play</p>
              <p>Film</p>
            </div>
          </button>
        </div>
        <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />
      </div>
      <div className="mt-8 lg:mt-12 w-full flex flex-col items-center justify-center p-4">
        <p className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-4xl text-gray-500">
          Not just another pretty dress. Your wedding is a personal story that
          we are there to document.
        </p>
        <p className="mt-4 max-w-3xl text-center text-gray-600">
          We believe the best results come from telling it like it is. The art
          happens in recognizing the moments when the setting, subject and mood
          are in sync and the real story unfolds naturally, without being
          contrived.
        </p>
        <p className="mt-8 text-sm text-center font-bold uppercase text-gray-600">
          Pick a story
        </p>
      </div>
      <div className="w-full">
        <MapChart data={CouplesInfo} />
      </div>
      <div className="w-full">
        <ContactBanner bannerImage={HimachalImageFour} />
      </div>
      <div className="mt-12 w-full">
        <ImageSignature
          imageSrc={GoaImageOne}
          text="Sagar and Saheli"
          path="sagar-saheli"
        />
        <div className="w-full mt-4 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="max-w-3xl">
              <ImageSignature
                imageSrc={HimachalImageOne}
                text="Pinky and Satyaki"
                path="pinky-satyaki"
              />
            </div>
            <div className="max-w-3xl">
              <ImageSignature
                imageSrc={KolkataImageOne}
                text="Karl and Bhavika"
                path="karl-bhavika"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 w-full">
        <ImageSignature
          imageSrc={OdishaImageOne}
          text="Aayush and Shweta"
          path="aayush-shweta"
        />
        {/* <div className="w-full p-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="flex-1 max-w-3xl">
              <ImageSignature imageSrc={ImageFive} text="Eric and Leana" />
            </div>
            <div className="flex-1 max-w-3xl">
              <ImageSignature imageSrc={HomeImage} text="Eric and Leana" />
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
