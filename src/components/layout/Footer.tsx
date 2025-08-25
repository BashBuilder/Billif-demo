import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopographySvg from "../global/TopographySvg";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "../global/logo";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-blue-50 py-20">
      <TopographySvg
        color="black"
        className="absolute -bottom-[50%] -left-[25%] rotate-90 opacity-50"
      />
      <TopographySvg
        color="black"
        className="absolute -right-[25%] -top-[50%] z-10 rotate-12 opacity-40"
      />
      <div className="contain relative z-10 space-y-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:justify-items-center">
          <div className="space-y-6">
            <Logo />
            <ul className="space-y-4 font-semibold text-primary">
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/terms">Terms and Condition</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="flex h-12 items-center">
              <h3 className="font-heading text-2xl font-semibold">Solutions</h3>
            </div>
            <ul className="space-y-4 font-semibold text-primary">
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/account-payable">Account Payable</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/account-receivable">Account Receivable</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/approval">Approval Policy</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/integrations">Integrations</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="flex h-12 items-center">
              <h3 className="font-heading text-2xl font-semibold">Resources</h3>
            </div>
            <ul className="space-y-4 font-semibold text-primary">
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/contact">Contact</Link>
              </li>
              {/* <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="#">Blog</Link>
              </li> */}
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6 max-md:col-span-2">
            <div className="flex h-12 items-center">
              <h3 className="font-heading text-2xl font-semibold">Socials</h3>
            </div>
            <ul className="flex flex-wrap items-center gap-4 font-semibold text-primary max-md:gap-8">
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/share/UYzJkNC8VERKwCz6/?mibextid=LQQJ4d"
                >
                  <Facebook />
                </Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/Bill-if_revenue?igsh=MWY2Mzd2b3V2NHdoag%3D%3D&utm_source=qr "
                >
                  <Instagram />
                </Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link target="_blank" href="https://x.com/ngrpay?s=21">
                  <Image
                    src="/assets/Svg/X_logo_2023_original.svg"
                    alt="Twitter"
                    width={20}
                    height={10}
                    className="fill-primary"
                  />
                </Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/Bill-if-revenue-paymentech/"
                >
                  <Linkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center font-semibold text-slate-950/50">
          © {new Date().getFullYear()} BIll Intelligent Flow Technologies. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
