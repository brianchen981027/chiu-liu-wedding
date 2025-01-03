import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";

import Slider1 from "@/Images/SliderShow-1.jpg";
import Slider2 from "@/Images/SliderShow-2.jpg";
import Slider3 from "@/Images/SliderShow-3.jpg";

const sliderArr = [Slider1, Slider2, Slider3];

const Info = () => (
  <div
    className="relative w-full h-screen bg-cover bg-no-repeat bg-center lg:bg-fixed"
    id="info"
  >
    <Carousel arrows autoplay effect="fade">
      {sliderArr.map((image) => (
        <div className="w-full h-screen" key={image.src}>
          <Image
            alt="Wedding Slider"
            className="h-screen"
            src={image}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}
    </Carousel>
    <div className="info-banner">
      <div className="flex flex-col justify-center items-center">
        <h3 className="mb-4 font-bold text-secondary text-center text-3xl md:text-4xl lg:text-5xl">
          Chiu & Liu
        </h3>
        <h4 className="mb-4 font-bold text-secondary text-center text-ml md:text-lg lg:text-xl">
          February 15th, 2025
        </h4>
      </div>
      <div className="flex items-center justify-around w-full text-secondary my-[10px]">
        <div className="text-center">
          <h5 className="text-primary">新郎</h5>
          <h5 className="text-xl md:text-2xl lg:text-3xl font-bold">邱羚</h5>
        </div>
        <div className="text-center">
          <h5 className="text-primary">新娘</h5>
          <h5 className="text-xl md:text-2xl lg:text-3xl font-bold">劉欣禹</h5>
        </div>
      </div>
      <hr className="w-[60vw] h-px bg-drawerHoverBg my-2 md:w-[65vw] lg:w-[35vw]" />
      <div className="flex flex-col justify-center items-center">
        <h5 className="mb-[4px] font-bold text-secondary text-center text-ml md:text-lg lg:text-xl">
          2025年2月15日 星期六 18：00
        </h5>
        <h5 className="mb-[4px] font-bold text-secondary text-center text-ml md:text-lg lg:text-xl">
          恭候入席
        </h5>
        <Link href="https://maps.app.goo.gl/Z8THi6z51oyzsMqe7" target="_blank">
          <h5 className="text-sm text-black/60 text-center md:text-base lg:text-ml hover:text-secondary">
            晶綺盛宴-台鋁館 珊瑚廳
            <br />
            <span>(高雄市前鎮區忠勤路8號)</span>
          </h5>
        </Link>
      </div>
    </div>
  </div>
);

export default Info;
