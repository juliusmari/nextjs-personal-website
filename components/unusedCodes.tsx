// "use client";
import React from "react";
import { Button } from "./ui/button";
import Writer from "./Writer";

const unusedCodes = () => {
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  // const [isMouseInside, setIsMouseInside] = useState(false);

  // useEffect(() => {
  //   const updateCursorPosition = (event: { clientX: any; clientY: any }) => {
  //     setCursorPosition({ x: event.clientX, y: event.clientY });
  //   };

  //   document.addEventListener("mousemove", updateCursorPosition);

  //   return () => {
  //     document.removeEventListener("mousemove", updateCursorPosition);
  //   };
  // }, []);

  return (
    <div className="relative h-screen w-full flex gap-2 items-center justify-center">
      <model-viewer
        className="absolute top-0 left-0"
        src="/greeting_waving_110_frames_loop.glb" // Specify the path to your 3D model file
        alt="A 3D model" // Provide an alternative text for accessibility
        autoplay
        camera-controls // Enable user interaction with camera controls
        camera-orbit="0deg 80deg 300m"
        style={{ width: "50%", height: "50%", position: "absolute" }} // Adjust dimensions as needed
      ></model-viewer>
      <div className="flex flex-col items-center relative ">
        <h1
          className=" font-black text-red-500 text-8xl tracking-wide drop-shadow-2xl shadow-black "
          // onMouseEnter={() => setIsMouseInside(true)}
          // onMouseLeave={() => setIsMouseInside(false)}
        >
          Hi! I'm Julius
          {/* {isMouseInside && (
            <div
              className="cursor"
              style={{ left: cursorPosition.x, top: cursorPosition.y }}
            ></div>
          )} */}
        </h1>
        <p className="h-[12px] text-xl">
          <Writer />
        </p>

        <Button className="absolute -bottom-20 bg-transparent mt-9 text-zinc-800 border-zinc-800 border-2 font-bold hover:text-white hover:bg-zinc-800 text-lg py-6">
          Portfolio
        </Button>
      </div>
    </div>
  );
};

export default unusedCodes;
