"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Demo() {
  const { ref } = useSectionInView("Demo", 0.6);
  return (
    <motion.section
      ref={ref}
      className="text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="demo"
    >
      <h2 className="text-3xl">Video demo</h2>
      <iframe
        className="w-[20rem] md:w-[35rem] lg:w-[45rem] aspect-video pt-6 lg:pt-8"
        src="https://www.youtube.com/embed/f9A5qrTTP8Y?si=3byhBTAu8WLhWavo"
        allow="fullscreen"
      ></iframe>
    </motion.section>
  );
}
