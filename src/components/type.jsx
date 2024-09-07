"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function Description() {
  const words = [
    {
      text: "Short ",
    },
    {
      text: "your ",
    },
    {
      text: "link ",
    },
    {
      text: "By ",
    },
    {
      text: "Bytingg.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[30rem] ">
      <p className="text-white font-semibold dark:text-neutral-200 md:text-7xl text-5xl  mb-5">
        Byte<span className="text-red-500">Link</span>
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>)
  );
}
