"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Story() {
  const { ref } = useSectionInView("Story", 0.6);

  return (
    <motion.section
      ref={ref}
      className="max-w-[50rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="story"
    >
      <h2 className="text-3xl">Story</h2>

      <p className="max-w-[50rem] mx-auto pt-[2rem] px-[2rem] leading-loose">
        Robot boy blablablablabla
      </p>
    </motion.section>
  );
}
