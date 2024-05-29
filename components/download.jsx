"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Download() {
  const { ref } = useSectionInView("Download", 0.6);

  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem]  text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="download"
    >
      <h2 className="text-3xl">Play now!</h2>

      <p className="max-w-[50rem] mx-auto pt-6 lg:pt-8 px-[2rem] leading-loose">
        Download here {"[insert link to github repo]"}
      </p>
    </motion.section>
  );
}
