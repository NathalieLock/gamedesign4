"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { features } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Features() {
  const { ref } = useSectionInView("Features", 0.6);

  return (
    <section
      id="features"
      ref={ref}
      className="max-w-[50rem] mt-[6rem] text-center leading-8 scroll-mt-28"
    >
      <h2 className="text-3xl">Features</h2>
      <ul className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-lg font-medium pt-6 lg:pt-8">
        {features.map((feature, index) => (
          <motion.li
            className="bg-pink-600 inline-block rounded-xl px-4 py-2"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {feature}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
