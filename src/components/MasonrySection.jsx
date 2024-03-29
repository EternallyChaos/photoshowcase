import React from "react";
import Image from "next/image";

const MasonrySection = ({ slides, setIndex }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 px-4 lg:px-24">
        <div className="grid gap-4">
          {slides.slice(0, 2).map((item, index) => {
            return (
              <Image
                key={index}
                alt="Image"
                src={item}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-lg"
                onClick={() => setIndex(index)}
              />
            );
          })}
        </div>
        <div className="grid gap-4">
          {slides.slice(2, 4).map((item, index) => {
            return (
              <Image
                key={index}
                alt="Image"
                src={item}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-lg"
                onClick={() => setIndex(index + 2)}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 px-4 lg:px-24">
        {slides.slice(4, 5).map((item, index) => {
          return (
            <Image
              key={index}
              alt="Image"
              src={item}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-lg"
              onClick={() => setIndex(4)}
            />
          );
        })}
      </div>
      {/* <div className="mt-4 grid grid-cols-2 gap-4 px-4 lg:px-24">
        <div className="grid gap-4">
          {slides.slice(0, 2).map((item, index) => {
            return (
              <Image
                key={index}
                alt="Image"
                src={item}
                className="h-auto max-w-full rounded-lg"
                onClick={() => setIndex(index)}
              />
            );
          })}
        </div>
        <div className="grid gap-4">
          {slides.slice(3, 5).map((item, index) => {
            return (
              <Image
                key={index}
                alt="Image"
                src={item}
                className="h-auto max-w-full rounded-lg"
                onClick={() => setIndex(index + 3)}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 px-4 lg:px-24">
        {slides.slice(5, 6).map((item, index) => {
          return (
            <Image
              key={index}
              alt="Image"
              src={item}
              className="h-auto max-w-full rounded-lg"
              onClick={() => setIndex(5)}
            />
          );
        })}
      </div> */}
    </>
  );
};

export default MasonrySection;
