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
            <p className="text-sm text-center font-bold uppercase text-gray-600">
              Elopement
            </p>
            <p className="font-ptSerif-medium font-normal leading-relaxed text-center italic text-3xl lg:text-4xl max-w-4xl text-gray-500">
              Paradise in the Arctic
            </p>
          </div>
        </div>
        <div className="mt-4 max-w-2xl text-gray-600">
          <p>
            Lofoten is one of the world’s most incredible archipelagos, with a
            string of islands so beautiful it’s surreal.
          </p>
          <p className="mt-3">
            The village of Svolvær, with its serene nature and seclusion, made
            for a magical backdrop to host the story of Sirena and Eric.
          </p>
          <p className="mt-3">
            We felt taunted by the beautiful photos of northern Norway, and
            specifically by the unique landscape of the Lofoten Islands.
          </p>
        </div>
      </div>
      <ImageGallery slides={data.slides} />
    </div>
  );
};

export default Page;
