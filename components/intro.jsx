"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.6);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-screen sm:mb-0 scroll-mt-[100rem]"
    >
      <div
        className="absolute inset-0 bg-cover h-[25vh] lg:h-[30vh]"
        style={{
          backgroundImage: `url('/cover7.png')`,
        }}
      ></div>

      <motion.div
        className="relative z-10 pt-[12vh] lg:pt-[10vh]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        <div className="flex justify-center w-auto h-auto">
          <Image
            src={"/Logo.webp"}
            alt="Logo"
            width="750"
            height="750"
            quality="95"
            priority={true}
          ></Image>
        </div>

        <p className="max-w-[50rem] mx-auto pt-[2rem] px-[2rem] leading-6 md:leading-8 md:text-xl">
          Embark on an adventure through a{" "}
          <span className=" text-pink-600">mystical</span> and{" "}
          <span className=" text-pink-600">immersive environment</span>{" "}
          inhabited by other-worldly{" "}
          <span className=" text-pink-600">interactive creatures</span> .
          Explore the world and engage in{" "}
          <span className=" text-pink-600">turn-based puzzle combats</span>{" "}
          where multiple approaches and tactics can lead to victory.{" "}
          <span className=" text-pink-600">Recruit unique allies</span>
          with distinct abilities, each offering unique strategic advantages.
        </p>
      </motion.div>
    </section>
  );
}
