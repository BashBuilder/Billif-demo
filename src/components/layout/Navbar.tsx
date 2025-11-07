"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
// import { navbarLinks } from "@/data/links";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import Logo from "../global/logo";
import { navbarLinks } from "@/data/data";
import { dashboardLink } from "@/data/links";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-primary text-primary-foreground shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navbarLinks.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-secondary">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {activeDropdown === item.label && (
                      <div className="absolute left-0 top-full pt-1">
                        <div className="w-80 rounded-lg border border-gray-200 bg-white p-6 text-gray-900 shadow-xl">
                          <div className="grid grid-cols-1 gap-4">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                              >
                                <div className="font-medium text-gray-900 group-hover:text-blue-600">
                                  {sub.title}
                                </div>
                                {sub.description && (
                                  <div className="mt-1 text-sm text-gray-500">
                                    {sub.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                      isActive(item.href!) ? "text-secondary" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href={dashboardLink}>
              <Button variant="secondary" className="font-medium">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground hover:text-secondary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-primary-foreground/20 px-2 pb-3 pt-2 sm:px-3">
              {navbarLinks.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="px-3 py-2">
                    <div className="mb-2 text-sm font-medium text-secondary">
                      {item.label}
                    </div>
                    <div className="ml-4 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-1 text-sm hover:text-secondary"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                      isActive(item.href!) ? "text-secondary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}

              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className="w-full font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
