"use client";

import { Poppins, Satisfy } from "next/font/google";

const satisfy = Satisfy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Tip(randomTip: Tip) {
  const router = useRouter();
  const [fade, setFade] = useState(false);

  return (
    <section
      className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-1000 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <h1
        className={`mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl ${satisfy.className}`}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Tips Vortex
        </span>{" "}
        Vortex
      </h1>
      <div className="grow mt-24">
        <p
          className={`text-2xl text-center max-w-3xl leading-normal ${poppins.className} break-all`}
        >
          &ldquo;{randomTip.tip}&rdquo;
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className={`text-1xl text-center mt-4 ${poppins.className}`}>
          {randomTip.source} / {randomTip.category}
        </p>
      </div>

      <button
        type="submit"
        className="relative inline-flex items-center justify-center p-0.5 my-8 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        onClick={() => {
          setFade(true);
          setTimeout(() => router.refresh(), 1000);
          setTimeout(() => setFade(false), 1200);
        }}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Next Tip
        </span>
      </button>
    </section>
  );
}
