"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.6);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-screen mb-28 text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url('/cover.jpg')`,
          height: "30vh",
        }}
      ></div>

      <motion.div
        className="relative z-10 pt-[20rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <h1 className="text-4xl text-white">Otherworld Saviour Robot</h1>
        <p className="w-[50rem] mx-auto pt-[2rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </motion.div>
    </section>
  );
}
