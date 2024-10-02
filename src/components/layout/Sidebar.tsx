"use client";

import { dashboardLink, navigationLinks } from "@/data/links";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

interface PropType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: PropType) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-0 z-[100] flex h-screen w-screen justify-end transition-all duration-300 ${isSidebarOpen ? "left-0" : "left-full"} `}
    >
      <div
        className="absolute left-0 top-0 z-[100] h-full w-full bg-black/80"
        onClick={() => setIsSidebarOpen(false)}
      />

      <section className="relative z-[101] w-4/5 space-y-10 bg-orange-50 px-20 py-32">
        <button
          className="text-orange-dark absolute right-20 top-20"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X />
        </button>
        <nav className="flex flex-col items-center gap-10">
          {navigationLinks.map((link) => (
            <Link
              href={link.href}
              key={link.label}
              onClick={() => setIsSidebarOpen(false)}
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
        <div className="flex items-center justify-center">
          <Link
            href={dashboardLink}
            onClick={() => setIsSidebarOpen(false)}
            className="cursor-pointer rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            Request a demo
          </Link>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
