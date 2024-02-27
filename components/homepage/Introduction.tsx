"use client";
import React from "react";
import { Button } from "../ui/button";
import Writer from "../Writer";

import "react-awesome-button/dist/styles.css";

const Introduction = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <div className="flex items-center w-fit">
        <div className="flex items-center justify-end">
          <model-viewer
            src="/greeting_waving_110_frames_loop.glb"
            alt="A 3D model"
            autoplay
            camera-controls
            disable-zoom
            shadow-intensity="2"
            camera-orbit="-15deg 80deg 5m"
            style={{ width: "320px", height: "500px" }}
          ></model-viewer>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-black">Hi! I'm </p>
          <h1 className="font-black text-8xl tracking-wide break-keep">
            Julius Chan
          </h1>
          <p className="h-[12px] text-2xl font-bold">
            <Writer />
          </p>
          <Button className="w-fit bg-transparent mt-9 text-zinc-800 border-zinc-800 border-2 font-bold hover:text-white hover:bg-zinc-800 text-lg py-6">
            Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
