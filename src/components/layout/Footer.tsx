import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopographySvg from "../global/TopographySvg";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-orange-100 py-20">
      <TopographySvg
        color="black"
        className="absolute -bottom-[50%] -left-[25%] rotate-90 opacity-50"
      />
      <TopographySvg
        color="black"
        className="absolute -right-[25%] -top-[50%] z-10 rotate-12 opacity-40"
      />
      <div className="contain relative z-10 space-y-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:justify-items-center">
          <div className="space-y-6">
            <div className="h-12">
              <Image
                src="/assets/Svg/nextgen with qorepay logo light 1.svg"
                alt="NextGen Revenue Paymentech"
                width={150}
                height={150}
                className="h-full object-contain"
              />
            </div>
            <ul className="text-orange-dark space-y-4 font-semibold">
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/terms">Terms and condition</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/policy">Privacy policy</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/agreement">User Agreement</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="flex h-12 items-center">
              <h3 className="font-heading text-2xl font-semibold">Solutions</h3>
            </div>
            <ul className="text-orange-dark space-y-4 font-semibold">
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/acount-payable">Account payable</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/account-receivable">Accoount Receivable</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="/approval">Approval policy</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="flex h-12 items-center">
              <h3 className="font-heading text-2xl font-semibold">
                Integrations
              </h3>
            </div>
            <ul className="text-orange-dark space-y-4 font-semibold">
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="#">Quickbooks</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="#">Sage</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="#">Xero</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div className="flex h-12 items-center">
              <h3 className="font-heading text-2xl font-semibold">Resources</h3>
            </div>
            <ul className="text-orange-dark space-y-4 font-semibold">
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="#">About us</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="#">Contact</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="#">Blog</Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link href="#">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6 max-md:col-span-2">
            <div className="flex h-12 items-center">
              <h3 className="font-heading text-2xl font-semibold">Socials</h3>
            </div>
            <ul className="text-orange-dark flex flex-wrap gap-4 font-semibold max-md:gap-8">
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
                  href="https://www.instagram.com/nextgen_revenue?igsh=MWY2Mzd2b3V2NHdoag%3D%3D&utm_source=qr "
                >
                  <Instagram />
                </Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link target="_blank" href="https://x.com/ngrpay?s=21">
                  <Twitter />
                </Link>
              </li>
              <li className="*:transition-colors *:duration-300 *:hover:text-primary">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/company/nextgen-revenue-paymentech/"
                >
                  <Linkedin />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center font-semibold text-slate-950/50">
          © {new Date().getFullYear()} NextGen Revenue paymentech. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
