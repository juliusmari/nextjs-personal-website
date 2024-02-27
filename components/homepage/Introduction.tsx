// "use client";
import React from "react";
import { Button } from "../ui/button";
import Writer from "./Writer";

const Introduction = () => {
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
    <div className="h-screen w-full flex gap-2 items-center justify-center">
      <div className="flex flex-col items-center relative ">
        <h1
          className=" font-black text-8xl tracking-wide "
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

export default Introduction;
