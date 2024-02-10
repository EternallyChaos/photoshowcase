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
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 px-4 lg:px-24">
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
      </div>
    </>
  );
};

export default MasonrySection;
