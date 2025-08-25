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
    <div>
      <Link href="/">
        <Image
          src={src}
          alt="Bill-if logo"
          width={150}
          height={50}
          quality={100}
        />
      </Link>
    </div>
  );
};

export default Logo;
