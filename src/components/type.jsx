"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Description() {
  const words = [
    {
      text: "Short  ",
    },
    {
      text: "your  ",
    },
    {
      text: "link  ",
    },
    {
      text: "with  ",
    },
    {
      text: "ByteLink.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-white font-semibold dark:text-neutral-200 md:text-7xl text-5xl  mb-10">
        ByteLink
      </p>
      <TypewriterEffectSmooth words={words} />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button
          className="w-40 h-10 rounded-xl font-semibold uppercase bg-white text-black border border-black  text-base">
          short Url
        </button>
      </div>
    </div>)
  );
}
