"use client";

import TeamCard from "./team-card";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h2 className="text-3xl">About us</h2>

      <div className="flex flex-row items-center justify-center mt-[2rem] gap-[6rem]">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>

      <div className="flex flex-row items-center justify-center mt-[2rem] gap-[6rem]">
        <TeamCard />
        <TeamCard />
      </div>
    </motion.section>
  );
}
