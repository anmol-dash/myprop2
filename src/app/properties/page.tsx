import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Properties from "@/components/Properties";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Available Properties | My Property - Fractional Commercial Real Estate Investing",
  description: "Browse our available commercial real estate properties for fractional investment. Collect rent and trade shares with zero fees.",
};

const PropertiesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Available Properties"
        description="Browse our selection of high-quality commercial real estate properties available for fractional investment."
      />
      <Properties />
    </>
  );
};

export default PropertiesPage; 