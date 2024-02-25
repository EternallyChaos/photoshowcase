import React from "react";

import Image from "next/image";

import { CouplesInfo } from "@/data/CouplesInfo";

import ImageGallery from "@/components/ImageGallery";

export async function generateStaticParams() {
  return CouplesInfo.map((data) => ({
    storiesId: data.id.split("/"),
  }));
}

const getCoupleData = (params) => {
  const slug = params?.storiesId?.join("/");
  const data = CouplesInfo.find((item) => item.id === slug);
  if (!data) {
    null;
  }
  return data;
};

const Page = ({ params }) => {
  const data = getCoupleData(params);

  return (
    <div>
      <div className="relative">
        <Image
          alt="img"
          src={data.landscapeImage}
          className="w-full object-center object-cover h-screen"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 grid place-items-center text-white text-center">
          <div>
            <div className="font-bold text-6xl">{data.name}</div>
            <div className="font-bold text-2xl mt-2">{data.location}</div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-center p-4">
        <div className="max-w-xl">
          <div>
            {/* <p className="text-sm text-center font-bold uppercase text-gray-600">
              Elopement
            </p> */}
            <p className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-4xl text-gray-500">
              {data.title}
            </p>
          </div>
        </div>
        <div className="mt-4 max-w-2xl text-gray-600">
          {data.descriptionLines.map((line) => {
            return (
              <p key={line.id} className="mt-3">
                {line.text}
              </p>
            );
          })}
        </div>
      </div>
      <ImageGallery slides={data.slides} />
    </div>
  );
};

export default Page;
