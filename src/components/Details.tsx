import React from "react";

import Image from "next/image";

import DetailImage1 from "@/Images/Details-1.png";
import DetailImage2 from "@/Images/Details-2.png";

const Details = () => (
  <div
    className="bg-secondaryBg max-h-[480px] lg:px-[5%] py-[10%] flex flex-col items-center justify-center"
    id="details"
  >
    <h1 className="border-b border-solid border-b-primary text-[32px] text-primary text-center sm:text-[36px] md:text-[48px] ">
      The Details
    </h1>
    <div className="flex w-full mt-[5%] justify-between">
      <Image
        alt="Detail Image"
        className="w-[25vw] h-[25vh]"
        src={DetailImage1}
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
      <div className="flex flex-col justify-center w-full sm:w-[75vw] md:w-[50vw]">
        <div className="flex justify-between mb-4">
          <h5 className="text-[16px] text-primary text-center sm:text-[18px] md:text-[20px] ">
            17:30
          </h5>
          <h5 className="text-[16px] text-primary text-center sm:text-[18px] md:text-[20px] ">
            賓客入席
          </h5>
        </div>
        <div className="flex justify-between mb-4">
          <h5 className="text-[16px] text-primary text-center sm:text-[18px] md:text-[20px] ">
            18:00
          </h5>
          <h5 className="text-[16px] text-primary text-center sm:text-[18px] md:text-[20px] ">
            晚宴用餐
          </h5>
        </div>
        <div className="flex justify-between">
          <h5 className="text-[16px] text-primary text-center mb-4 sm:text-[18px] md:text-[20px] ">
            20:30
          </h5>
          <h5 className="text-[16px] text-primary text-center mb-4 sm:text-[18px] md:text-[20px] ">
            合影送客
          </h5>
        </div>
      </div>
      <Image
        alt="Detail Image"
        className="w-[25vw] h-[25vh]"
        src={DetailImage2}
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </div>
  </div>
);
export default Details;
