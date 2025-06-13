import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex-shrink-0 flex flex-row ">
      <Image
        priority
        width={70}
        height={70}
        src="/logoexampletio.svg"
        alt="Logo"
      />
      <Link
        href="/"
        className="ml-2 text-2xl h-7 items-center font-bold text-white self-end"
      >
        Cargnin Advocacia
      </Link>
    </div>
  );
}
