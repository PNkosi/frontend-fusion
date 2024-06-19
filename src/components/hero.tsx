"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-hightlight";
import { IconArrowBigRight, IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
  return (
    <HeroHighlight className="space-y-12">
      <div className="flex items-center gap-4 bg-indigo-500 text-white w-fit mx-auto pl-4 rounded-full">
        <p className="text-sm">More apps can be found at pexel wave</p>
        <IconArrowRight size={10} className="bg-indigo-300 h-10 w-10 rounded-full" />
      </div>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Unlock Your Frontend Superpowers: Elevate Your Designs with Our Suite of Developer Tools!
        {" "}
        <br />
        <Highlight className="text-black dark:text-white">
          Create. Copy. Use.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
