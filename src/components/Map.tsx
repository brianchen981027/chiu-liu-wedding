import React from "react";

const Map = () => (
  <div
    className="bg-primaryBg w-full p-[5%] flex flex-col items-center justify-center"
    id="map"
  >
    <h1 className="border-b border-solid border-b-primary text-[32px] text-primary text-center sm:text-[36px] md:text-[48px]">
      Map
    </h1>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.333808952119!2d120.30173077549269!3d22.60400663181811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e03709e54c731%3A0x70a137e97572d179!2z5pm257a655ub5a60IOWPsOmLgemkqA!5e0!3m2!1szh-TW!2stw!4v1735836794621!5m2!1szh-TW!2stw"
      title="google map"
      className="w-[75vw] mt-[5%] border-0 rounded h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    <div className="flex flex-col mt-[5%] w-[75vw]">
      <div className="mb-8">
        <h5 className="text-primary text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-3">
          搭乘捷運
        </h5>
        <div className="flex">
          <span className="text-mapSubtitle font-bold mr-[4px]">● </span>
          <p className="text-black/60">
            請搭乘捷運紅線至「
            <span className="text-mapContent font-bold">R7 學甲站</span>
            」下車，接著從「
            <span className="text-mapContent font-bold">4號出口</span>
            」出站，步行至「
            <span className="text-mapContent font-bold">復興三路</span>
            」左轉，直行遇到「
            <span className="text-mapContent font-bold">中華五路</span>
            」再左轉，直行約100公尺後至「
            <span className="text-mapContent font-bold">忠勤路口</span>
            」，即抵達目的地。
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h5 className="text-primary text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-4">
          搭乘輕軌
        </h5>
        <div className="flex">
          <span className="text-mapSubtitle font-bold mr-[4px]">● </span>
          <p className="text-black/60">
            請搭乘輕軌至「
            <span className="text-mapContent font-bold">C6 經貿園區站</span>
            」or「
            <span className="text-mapContent font-bold">C7 軟體園區站</span>
            」下車，接著步行3分鐘後即可抵達。
          </p>
        </div>
      </div>
      <div>
        <h5 className="text-primary text-[20px] sm:text-[24px] md:text-[28px] font-bold mb-4">
          自行開車、騎車前往
        </h5>
        <h5 className="text-primary text-[14px] sm:text-[16px] md:text-[18px] font-semibold mt-5 mb-3">
          停車資訊
        </h5>
        <div className="flex mb-[4px]">
          <span className="text-mapSubtitle font-bold mr-[4px]">● </span>
          <p className="text-black/60">
            汽車：從「
            <span className="text-mapContent font-bold">中華五路</span>
            」或「
            <span className="text-mapContent font-bold">成功二路</span>
            」進入停車場路口，可折抵「
            <span className="text-mapContent font-bold">4 小時</span>」
          </p>
        </div>
        <div className="flex">
          <span className="text-mapSubtitle font-bold mr-[4px]">● </span>
          <p className="text-black/60">
            機車：從「
            <span className="text-mapContent font-bold">中華五路</span>
            」進入停車場入口，可折抵「
            <span className="text-mapContent font-bold">6 小時</span>」
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Map;
