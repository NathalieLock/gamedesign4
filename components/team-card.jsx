import React from "react";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";

export default function TeamCard({ avatar, name, role, linkedin = "none" }) {
  return (
    <div className="pt-[2rem] flex flex-col items-center justify-center">
      <Image
        src={avatar}
        alt="Portrait"
        width="192"
        height="192"
        quality="95"
        priority={true}
        className="h-28 w-28 md:h-44 md:w-44 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
      />
      <h3 className="mt-2 text-md md:text-xl">{name}</h3>
      <p className="text-gray-400 text-sm md:text-lg">{role}</p>

      <p style={{ visibility: linkedin === "none" ? "hidden" : "visible" }}>
        <a
          className="mt-2 text-xl md:text-2xl text-gray-50 hover:text-gray-500 flex items-center gap-2 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </p>
    </div>
  );
}
