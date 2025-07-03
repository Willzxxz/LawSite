import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex-shrink-0 flex flex-row self-end ">
      <Link href="/">
        <Image
          priority
          width={100}
          height={100}
          src="/logopngcropped.png"
          alt="Logo"
        />
      </Link>
    </div>
  );
}
