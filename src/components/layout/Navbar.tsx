"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  // dashboardLink,
  navigationLinks,
  // signupLink
} from "@/data/links";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import Sidebar from "./Sidebar";
import { Button } from "../ui/button";
import Logo from "../global/logo";

const Navbar = () => {
  const pathname = usePathname();
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 text-white shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo variant="light" />

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {
                /* Navigation Links */
                navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                      isActive(link.href) ? "text-secondary" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))
              }
              {/* <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/") ? "text-secondary" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/about") ? "text-secondary" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/services") ? "text-secondary" : ""
                }`}
              >
                Services
              </Link>
              <Link
                href="/solutions"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/solutions") ? "text-secondary" : ""
                }`}
              >
                Solutions
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/contact") ? "text-secondary" : ""
                }`}
              >
                Contact
              </Link> */}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="secondary" className="font-medium">
                Get Started
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

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-primary-foreground/20 px-2 pb-3 pt-2 sm:px-3">
              {
                /* Mobile Navigation Links */
                navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                      isActive(link.href) ? "text-secondary" : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))
              }
              {/* <Link
                href="/"
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/") ? "text-secondary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/about") ? "text-secondary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/services") ? "text-secondary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/solutions"
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/solutions") ? "text-secondary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/contact") ? "text-secondary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link> */}
              <div className="px-3 py-2">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className="w-full font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
