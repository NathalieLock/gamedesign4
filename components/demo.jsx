"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Demo() {
  const { ref } = useSectionInView("Demo", 0.6);
  return (
    <motion.section
      ref={ref}
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="demo"
    >
      <h2 className="text-3xl">Video demo</h2>
      <div className="aspect-video pt-6 lg:pt-8">
        <video className="h-full w-full rounded-lg" controls>
          <source
            src="https://axk3pvjzeu6rv0tu.public.blob.vercel-storage.com/demo-Pe9ZETEoPctb7n6aQNcK9iNDgF0Lhw.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.section>
  );
}
