"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Demo() {
  const { ref } = useSectionInView("Demo");
  return (
    <div
      ref={ref}
      id="demo"
      className="h-[400px] w-[600px] bg-slate-300 text-slate-950"
    >
      Video demo placeholder
    </div>
  );
}
