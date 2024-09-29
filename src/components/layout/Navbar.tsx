import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ChevronDown, MenuSquareIcon } from "lucide-react";
import { navigationLinks } from "@/data/data";

const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-screen overflow-y-hidden bg-white bg-opacity-50 py-4 shadow backdrop-blur">
      <div className="contain relative z-50 flex items-center justify-between gap-6">
        <div>
          <Link href="/">
            <Image
              src="/assets/Svg/nextgen with qorepay logo light 1.svg"
              alt="Nextgen logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="flex items-center gap-10 max-md:hidden">
          <nav className="flex items-center gap-10">
            {navigationLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="relative flex items-center gap-2 transition-colors duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
              >
                <span className="text-sm font-semibold">{link.label}</span>
                {link.sublink && (
                  <span>
                    <ChevronDown className="size-4 text-slate-600" />
                  </span>
                )}
              </Link>
            ))}
          </nav>
          <Button>Sign in</Button>
        </div>

        <button className="md:hidden">
          <MenuSquareIcon />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
