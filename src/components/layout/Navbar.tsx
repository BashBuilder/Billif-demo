"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { dashboardLink, navigationLinks } from "@/data/links";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-screen bg-white bg-opacity-50 py-4 shadow backdrop-blur">
      <div className="contain relative z-50 flex items-center justify-between gap-6">
        <div>
          <Link href="/">
            <Image
              // src="/assets/Svg/nextgen with qorepay logo light 1.svg"
              src="/assets/images/nextgen resized.png"
              alt="Nextgen logo"
              width={150}
              height={150}
              quality={100}
            />
          </Link>
        </div>

        <div className="flex items-center gap-10 max-lg:hidden">
          <nav className="flex items-center gap-10">
            {navigationLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className={`relative flex items-center gap-2 transition-colors duration-300 after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full ${pathname === link.href && "text-primary after:w-full"} `}
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
          <div>
            <Link
              href={dashboardLink}
              className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              Sign in
            </Link>
          </div>
        </div>

        <button className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
          <Menu />
        </button>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </header>
  );
};

export default Navbar;
