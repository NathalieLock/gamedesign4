"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Story() {
  const { ref } = useSectionInView("Story", 0.6);

  return (
    <motion.section
      ref={ref}
      className="max-w-[50rem] scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="story"
    >
      <h2 className="text-center text-3xl">Story</h2>

      <p className="max-w-[50rem] mx-auto pt-[2rem] px-[2rem] leading-8">
        The adventure starts when you, playing as Beep the robot, spawn into the
        mystical and vibrant world of Celestria. As you arrive, you find out
        that you stand at the threshold of a realm shrouded in enchantment and
        peril. The once serene lands are now overshadowed by a creeping
        darkness, brought on by a malevolent force fueled by the Fungal Foes.
        The inhabitants of this world are in desperate need of salvation.
        <br />
        <br />
        Determined to uncover the mystery and restore peace, you embark on a
        quest filled with exploration and puzzle-solving. Each step brings you
        closer to uncovering the secrets of Celestria and the source of the
        Fungal Foes. Along the way, you’ll meet otherworldly creatures, each
        with their own tales and quests, and gain allies in your fight against
        the dark forces.
        <br />
        <br />
        Will you be able to navigate the challenges, solve the puzzles, and
        defeat the enemy? The fate of the otherworld realm rests in your hands.
        Embrace your role as their guardian and forge a path to victory.
      </p>
    </motion.section>
  );
}
