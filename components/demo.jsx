"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Demo() {
  const { ref } = useSectionInView("Demo");
  return (
    <div
      ref={ref}
      id="demo"
      className="w-[50%] h-[20%] bg-slate-300 text-slate-950"
    >
      Video demo placeholder
    </div>
  );
}
