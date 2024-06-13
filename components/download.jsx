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

      <a
        href="https://drive.google.com/drive/folders/1695yspcXLbnNgKHvDE1rt9dSrUbZ1xhp?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-5 bg-transparent hover:bg-pink-500 text-slate-50 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded">
          Download here
        </button>
      </a>
    </motion.section>
  );
}
