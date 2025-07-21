"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export default function OurMissionSection() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-[#020617] flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-[#020617] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-7xl font-bold text-3xl text-white relative z-20")}>
        Our Mission
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 w-full md:w-1/2">
        To empower individuals and organizations with the knowledge and tools to
        harness the power of AI responsibly and effectively. We aim to
        democratize access to AI education, fostering a community of learners and
        creators who can harness the potential of AI to solve real-world
        problems and drive positive change.
      </p>
    </div>
  );
}
