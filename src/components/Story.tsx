"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Modal } from "antd";

import Story1 from "@/Images/SliderShow-1.jpg";
import Story2 from "@/Images/SliderShow-2.jpg";
import Story3 from "@/Images/SliderShow-3.jpg";

const imageArr = [Story1, Story2, Story3];

const Story = () => {
  const [previewImage, setPreviewImage] = useState<StaticImageData>();
  const [visible, setVisible] = useState(false);
  const showPreviewImage = (image: StaticImageData) => {
    setPreviewImage(image);
    setVisible(true);
  };
  return (
    <div
      className="bg-primaryBg p-[5%] w-full h-auto flex flex-col items-center justify-center"
      id="story"
    >
      <h1 className="border-b border-solid border-b-primary text-[32px] text-primary text-center sm:text-[36px] md:text-[48px]">
        Our Story
      </h1>
      <div className="flex flex-col w-full mt-[2.5%] justify-between items-center lg:flex-row lg:mb-0">
        {imageArr.map((image) => (
          <Image
            key={image.src}
            alt="Wedding Image"
            className="w-2/3 h-64 mb-8 rounded-md pointer-events-none cursor-pointer md:pointer-events-auto md:w-1/2 md:mb-16 lg:pointer-events-auto lg:w-1/4 lg:mb-0 transition-opacity duration-300 hover:opacity-75"
            src={image}
            style={{ objectFit: "cover", objectPosition: "center" }}
            onClick={() => showPreviewImage(image)}
          />
        ))}
      </div>
      <Modal
        centered
        width={720}
        height={720}
        footer={null}
        closable={false}
        open={visible}
        onCancel={() => setVisible(false)}
      >
        <div className="mx-auto">
          <Image
            alt="Wedding Image"
            className="w-[720px] h-[720px] rounded-lg"
            src={previewImage || ""}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Story;
