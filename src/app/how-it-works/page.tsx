import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import HowItWorks from "@/components/HowItWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | My Property - Fractional Commercial Real Estate Investing",
  description: "Learn how to invest in commercial real estate properties through fractional ownership. Collect rent and trade shares with zero fees.",
};

const HowItWorksPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="How It Works"
        description="Understand our simple process for fractional real estate investing and start building your property portfolio today."
      />
      <HowItWorks />
    </>
  );
};

export default HowItWorksPage; 