"use client";

import React from "react";
import { motion } from "framer-motion";
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
        <p className="max-w-[50rem] mx-auto pt-[2rem] px-[2rem] leading-loose">
          Embark on an adventure through a{" "}
          <span className="font-extrabold text-lg text-pink-600">diverse</span>{" "}
          and{" "}
          <span className="font-extrabold text-lg text-pink-600">
            immersive environment
          </span>{" "}
          inhabited by other-worldly{" "}
          <span className="font-extrabold text-lg text-pink-600">
            interactive NPCs and creatures
          </span>{" "}
          . Explore the world and engage in{" "}
          <span className="font-extrabold text-lg text-pink-600">
            turn-based puzzle combats
          </span>{" "}
          where multiple approaches and tactics can lead to victory.{" "}
          <span className="font-extrabold text-lg text-pink-600">
            Build your party
          </span>{" "}
          by recruiting allies with distinct abilities, each offering unique
          strategic advantages.
        </p>
      </motion.div>
    </section>
  );
}
