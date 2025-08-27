"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import {} from // dashboardLink,
// signupLink
"@/data/links";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import Sidebar from "./Sidebar";
import { Button } from "../ui/button";
import Logo from "../global/logo";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    // <nav className="fixed top-0 z-50 w-full bg-black/50 text-white shadow-sm backdrop-blur">
    <nav className="fixed top-0 z-50 w-full bg-primary text-primary-foreground shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo variant="light" />

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/") ? "text-secondary" : ""
                }`}
              >
                Home
              </Link> */}

              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("products")}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-secondary">
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>

                {activeDropdown === "products" && (
                  <div className="absolute left-0 top-full mt-1 w-80 rounded-lg border border-gray-200 bg-white p-6 text-gray-900 shadow-xl">
                    <div className="grid grid-cols-1 gap-4">
                      <Link
                        href="/products/automation"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Workflow Automation
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Automate your financial processes end-to-end
                        </div>
                      </Link>
                      <Link
                        href="/products/intelligence"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          AI Intelligence
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Smart validation and error detection
                        </div>
                      </Link>
                      <Link
                        href="/products/analytics"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Analytics & Reporting
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Real-time insights and comprehensive reports
                        </div>
                      </Link>
                      <Link
                        href="/products/integrations"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Integrations
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Connect with your existing financial systems
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("solutions")}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-secondary">
                  Solutions
                  <ChevronDown className="h-4 w-4" />
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute left-0 top-full mt-1 w-80 rounded-lg border border-gray-200 bg-white p-6 text-gray-900 shadow-xl">
                    <div className="grid grid-cols-1 gap-4">
                      <Link
                        href="/solutions/enterprise"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Enterprise
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Large-scale financial operations
                        </div>
                      </Link>
                      <Link
                        href="/solutions/mid-market"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Mid-Market
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Growing businesses with complex needs
                        </div>
                      </Link>
                      <Link
                        href="/solutions/startups"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Startups
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Fast-growing companies scaling operations
                        </div>
                      </Link>
                      <Link
                        href="/solutions/accounting-firms"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Accounting Firms
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Professional services and client management
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("resources")}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-secondary">
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </button>

                {activeDropdown === "resources" && (
                  <div className="absolute left-0 top-full mt-1 w-80 rounded-lg border border-gray-200 bg-white p-6 text-gray-900 shadow-xl">
                    <div className="grid grid-cols-1 gap-4">
                      <Link
                        href="/resources/blog"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Blog
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Latest insights on financial automation
                        </div>
                      </Link>
                      <Link
                        href="/resources/case-studies"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Case Studies
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Success stories from our clients
                        </div>
                      </Link>
                      <Link
                        href="/resources/whitepapers"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Whitepapers
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          In-depth research and analysis
                        </div>
                      </Link>
                      <Link
                        href="/resources/webinars"
                        className="group block rounded-lg p-3 transition-colors hover:bg-gray-50"
                      >
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          Webinars
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          Educational sessions and demos
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/about") ? "text-secondary" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/contact") ? "text-secondary" : ""
                }`}
              >
                Contact
              </Link>
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
              <Link
                href="/"
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/") ? "text-secondary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <div className="px-3 py-2">
                <div className="mb-2 text-sm font-medium text-secondary">
                  Products
                </div>
                <div className="ml-4 space-y-1">
                  <Link
                    href="/products/automation"
                    className="block py-1 text-sm hover:text-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Workflow Automation
                  </Link>
                  <Link
                    href="/products/intelligence"
                    className="block py-1 text-sm hover:text-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AI Intelligence
                  </Link>
                  <Link
                    href="/products/analytics"
                    className="block py-1 text-sm hover:text-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Analytics & Reporting
                  </Link>
                </div>
              </div>

              <div className="px-3 py-2">
                <div className="mb-2 text-sm font-medium text-secondary">
                  Solutions
                </div>
                <div className="ml-4 space-y-1">
                  <Link
                    href="/solutions/enterprise"
                    className="block py-1 text-sm hover:text-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Enterprise
                  </Link>
                  <Link
                    href="/solutions/mid-market"
                    className="block py-1 text-sm hover:text-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mid-Market
                  </Link>
                  <Link
                    href="/solutions/startups"
                    className="block py-1 text-sm hover:text-secondary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Startups
                  </Link>
                </div>
              </div>

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
                href="/contact"
                className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive("/contact") ? "text-secondary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
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
}
