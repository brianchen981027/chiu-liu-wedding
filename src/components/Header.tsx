"use client";

import React, { useState } from "react";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClickScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 z-50 grid grid-cols-2 w-full h-auto bg-transparent px-7 py-3 md:px-12 md:py-5">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <h3 className="sm:text-lg md:text-xl lg:text-3xl text-primary">
          Chiu & Liu
        </h3>
      </div>

      {/* Right */}
      <ul className="hidden sm:flex sm:items-center sm:justify-end">
        <li className="headerText">
          <h4 onClick={() => handleClickScroll("info")}>Info</h4>
        </li>
        <li className="headerText">
          <h4 onClick={() => handleClickScroll("story")}>Story</h4>
        </li>
        <li className="headerText">
          <h4 onClick={() => handleClickScroll("details")}>Details</h4>
        </li>
        <li className="headerText">
          <h4 onClick={() => handleClickScroll("map")}>Map</h4>
        </li>
      </ul>

      <div
        className="menu flex items-center justify-end sm:hidden"
        onClick={() => setOpen(true)}
      >
        <MenuOutlined className="text-3xl text-primary" />
      </div>

      {/* Drawer */}
      <Drawer
        title={
          <div
            className="menu flex items-center justify-end sm:hidden"
            onClick={() => setOpen(false)}
          >
            <CloseOutlined className="text-3xl text-primary" />
          </div>
        }
        width="100%"
        styles={{
          body: {
            background: "#FFFFF0",
            color: "#9D7553",
            fontFamily: "Comic Sans MS, Trebuchet MS",
            fontSize: "24px",
            textAlign: "center",
            opacity: 0.8,
          },
          header: {
            background: "#ECDCC2",
            textAlign: "center",
            opacity: 0.6,
          },
          footer: {
            background: "#FFFFF0",
            border: "none",
          },
        }}
        closable={false}
        footer={
          <div className="flex justify-center">
            <h5 className="text-base text-[#9D7553] ">
              Invite you to our wedding celebration 💕
            </h5>
          </div>
        }
        open={open}
        onClose={() => setOpen(false)}
      >
        <ul className="flex flex-col items-center">
          <li className="w-full rounded-md hover:bg-drawerHoverBg">
            <h4
              className="py-2 hover:text-drawerHoverText"
              onClick={() => {
                setOpen(false);
                handleClickScroll("info");
              }}
            >
              Wedding Info
            </h4>
          </li>
          <li className="w-full rounded-md hover:bg-drawerHoverBg">
            <h4
              className="py-2 hover:text-drawerHoverText"
              onClick={() => {
                setOpen(false);
                handleClickScroll("story");
              }}
            >
              Story
            </h4>
          </li>
          <li className="w-full rounded-md hover:bg-drawerHoverBg">
            <h4
              className="py-2 hover:text-drawerHoverText"
              onClick={() => {
                setOpen(false);
                handleClickScroll("details");
              }}
            >
              Details
            </h4>
          </li>
          <li className="w-full rounded-md hover:bg-drawerHoverBg">
            <h4
              className="py-2 hover:text-drawerHoverText"
              onClick={() => {
                setOpen(false);
                handleClickScroll("map");
              }}
            >
              Map
            </h4>
          </li>
        </ul>
      </Drawer>
    </header>
  );
};

export default Header;
