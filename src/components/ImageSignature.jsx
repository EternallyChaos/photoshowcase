import React from "react";
import Image from "next/image";
import Link from "next/link";

const ImageSignature = ({ imageSrc, text, path }) => {
  return (
    <Link href={`/stories/${path}`}>
      <div className="relative z-10">
        <div className="max-w-full max-h-full overflow-hidden">
          <Image
            alt="image"
            src={imageSrc}
            className="w-full object-center object-cover hover:scale-110 transition duration-[3000ms] cursor-pointer max-w-full max-h-full overflow-hidden"
          />
        </div>
        <div className="z-20 font-manrope-medium uppercase text-sm font-bold absolute bottom-0 left-0 text-gray-600 bg-gray-200 p-4 md:px-5 md:py-5 xl:px-8 xl:py-8">
          {text}
        </div>
      </div>
    </Link>
  );
};

export default ImageSignature;
