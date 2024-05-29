"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionDivider({ image }) {
  return (
    <motion.div
      className="my-[3rem] lg:my-[4rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <Image
        className="w-auto h-auto"
        src={image}
        alt="Game character"
        width="120"
        height="120"
        quality="95"
        priority={true}
      />
    </motion.div>
  );
}
