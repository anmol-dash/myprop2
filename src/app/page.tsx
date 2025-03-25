import React from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Properties from "@/components/Properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Property - Fractional Commercial Real Estate Investing",
  description: "Invest in commercial real estate properties with fractional ownership. Collect rent and trade shares with zero fees.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <HowItWorks />
      <Properties />
      <AboutSectionOne />
      <Contact />
    </>
  );
}
