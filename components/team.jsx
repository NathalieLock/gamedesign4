"use client";

import TeamCard from "./team-card";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Team() {
  const { ref } = useSectionInView("Team");

  return (
    <motion.section
      ref={ref}
      className="max-w-[50rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="team"
    >
      <h2 className="text-3xl">The team</h2>

      <div className="sm:block md:hidden">
        <div className="flex flex-row items-center justify-center mt-[2rem] gap-[6rem]">
          <TeamCard />
          <TeamCard />
        </div>

        <div className="flex flex-row items-center justify-center mt-[2rem] gap-[6rem]">
          <TeamCard />
          <TeamCard />
        </div>

        <div className="flex flex-row items-center justify-center mt-[2rem] gap-[6rem]">
          <TeamCard />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-row items-center justify-center mt-[2rem] gap-[6rem]">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>

        <div className="flex flex-row items-center justify-center mt-[2rem] gap-[6rem]">
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </motion.section>
  );
}
