import React from "react";
import Image from "next/image";

export default function TeamCard() {
  return (
    <div className="pt-[2rem] flex flex-col items-center justify-center">
      <Image
        src="/avatar.jpeg"
        alt="Portrait"
        width="192"
        height="192"
        quality="95"
        priority={true}
        className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
      />
      <h3 className="mt-2 text-xl">Name</h3>
      <p className="text-gray-400">Role</p>
      <p className="text-gray-400">Contact information</p>
    </div>
  );
}
