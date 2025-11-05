import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  variant?: "light" | "dark";
}

const Logo = ({ variant }: Props) => {
  const src =
    variant === "light"
      ? "/assets/bif/Logo-Transparent Color-White.png"
      : "/assets/bif/Logo-Transparent Color-Black.png";

  return (
    <div className="flex items-start">
      <Link href="/" className="">
        <Image
          src={src}
          alt="Billif logo"
          width={150}
          height={50}
          quality={100}
          className="max-h-12 object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;
