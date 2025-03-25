import React from "react";
import SectionTitle from "../Common/SectionTitle";
import PropertyCard from "./PropertyCard";
import propertiesData from "./propertiesData";

const Properties = () => {
  return (
    <section id="properties" className="py-16 md:py-20 lg:py-28 bg-gray-light dark:bg-gray-dark">
      <div className="container">
        <SectionTitle
          title="Featured Properties"
          paragraph="Discover premium commercial real estate properties available for fractional investment. Collect rent and trade shares with zero fees."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {propertiesData.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties; 