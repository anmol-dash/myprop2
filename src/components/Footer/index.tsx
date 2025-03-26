"use client";
import Link from "next/link";
import Logo from "../Common/Logo";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-2/3 lg:w-5/12 text-center">
              <div className="mb-12 max-w-[360px] mx-auto lg:mb-16">
                <Link href="/" className="mb-3 inline-block">
                  <Logo className="w-full dark:hidden" />
                  <Logo className="hidden w-full dark:block" />
                </Link>
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Revolutionizing commercial real estate investment.
                </p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          
          <div className="py-8 text-center">
            <p className="text-base text-body-color dark:text-body-color-dark">
              © {new Date().getFullYear()} My Property. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
