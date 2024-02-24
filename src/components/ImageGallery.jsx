"use client";

import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";

import MasonrySection from "@/components/MasonrySection";
import NextJsImage from "@/components/NextJsImage";

import "yet-another-react-lightbox/styles.css";

const ImageGallery = ({ slides }) => {
  const [index, setIndex] = useState(-1);
  return (
    <div>
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

export default ImageGallery;
