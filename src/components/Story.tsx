import React from "react";

import Image from "next/image";

import Story1 from "@/Images/SliderShow-1.jpg";
import Story2 from "@/Images/SliderShow-2.jpg";
import Story3 from "@/Images/SliderShow-3.jpg";

const Story = () => (
  <div
    className="bg-primaryBg p-[5%] w-full h-auto flex flex-col items-center justify-center"
    id="story"
  >
    <h1 className="border-b border-solid border-b-primary text-[32px] text-primary text-center sm:text-[36px] md:text-[48px]">
      Our Story
    </h1>
    <div className="flex flex-col w-full mt-[2.5%] justify-between items-center lg:flex-row lg:mb-0">
      <Image
        alt="Wedding Image"
        className="w-2/3 h-64 mb-8 md:w-1/2 md:mb-16 lg:w-1/4 lg:mb-0"
        src={Story1}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <Image
        alt="Wedding Image"
        className="w-2/3 h-64 mb-8 md:w-1/2 md:mb-16 lg:w-1/4 lg:mb-0"
        src={Story2}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <Image
        alt="Wedding Image"
        className="w-2/3 h-64 mb-8 md:w-1/2 md:mb-16 lg:w-1/4 lg:mb-0"
        src={Story3}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  </div>
);

export default Story;
