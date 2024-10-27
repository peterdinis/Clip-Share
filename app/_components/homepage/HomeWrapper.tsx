"use client";

import { motion } from "framer-motion";
import type { FC } from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-hightlight";

const HomeWrapper: FC = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 10, // Reduced the y offset
        }}
        animate={{
          opacity: 1,
          y: [1, -1, 0], // Slightly adjusted to move up higher
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With insomnia, nothing&apos;s real. Everything is far away. Everything
        is a{" "}
        <Highlight className="text-black dark:text-white">
          copy, of a copy, of a copy.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
};

export default HomeWrapper;
