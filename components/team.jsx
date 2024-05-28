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
      className="max-w-[50rem] lg:max-w-[68rem] text-center leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="team"
    >
      <h2 className="text-3xl mb-4">The team</h2>

      <div className="sm:block md:hidden">
        <div className="flex flex-row items-center justify-center gap-x-[3rem]">
          <TeamCard
            avatar="/nathalie.jpeg"
            name="Nathalie Lock"
            role="Role"
            linkedin="https://www.linkedin.com/in/nathalie-lock-55bb061b1/"
          />

          <TeamCard avatar="/morris.jpeg" name="Morris Hansing" role="Role" />
        </div>

        <div className="flex flex-row items-center justify-center gap-x-[3rem]">
          <TeamCard
            avatar="/lucas.jpeg"
            name="Lucas Kerslow"
            role="Role"
            linkedin="https://www.linkedin.com/in/lucas-kerslow-293b22223/"
          />
          <TeamCard avatar="/kate.jpeg" name="Katerina Tsioutsia" role="Role" />
        </div>

        <div className="flex flex-row items-center justify-center ">
          <TeamCard avatar="/tianyi.webp" name="Tianyi Wang" role="Role" />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-row items-center justify-center mt-[2rem] gap-x-[6rem] lg:gap-x-[12rem] gap-y-[6rem]">
          <TeamCard
            avatar="/nathalie.jpeg"
            name="Nathalie Lock"
            role="Role"
            linkedin="https://www.linkedin.com/in/nathalie-lock-55bb061b1/"
          />
          <TeamCard avatar="/morris.jpeg" name="Morris Hansing" role="Role" />
          <TeamCard
            avatar="/lucas.jpeg"
            name="Lucas Kerslow"
            role="Role"
            linkedin="https://www.linkedin.com/in/lucas-kerslow-293b22223/"
          />
        </div>

        <div className="flex flex-row items-center justify-center mt-[2rem] gap-x-[12rem] gap-[6rem]">
          <TeamCard avatar="/kate.jpeg" name="Katerina Tsioutsia" role="Role" />
          <TeamCard avatar="/tianyi.webp" name="Tianyi Wang" role="Role" />
        </div>
      </div>
    </motion.section>
  );
}
