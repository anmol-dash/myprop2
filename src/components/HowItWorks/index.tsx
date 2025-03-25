import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="How Fractional Real Estate Works"
          paragraph="My Property makes commercial real estate investing accessible through a simple, transparent process."
          center
        />

        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          <div className="group relative rounded-sm bg-white p-8 shadow-one hover:shadow-two dark:bg-dark">
            <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-white">1</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Browse Properties
            </h3>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Explore our curated selection of premium commercial real estate properties. Review detailed information about location, financials, and performance.
            </p>
          </div>
          
          <div className="group relative rounded-sm bg-white p-8 shadow-one hover:shadow-two dark:bg-dark">
            <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-white">2</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Purchase Shares
            </h3>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Buy shares in properties that match your investment goals. Start with any amount that fits your budget and diversify across multiple properties.
            </p>
          </div>
          
          <div className="group relative rounded-sm bg-white p-8 shadow-one hover:shadow-two dark:bg-dark">
            <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-white">3</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Collect Rental Income
            </h3>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Earn your share of rental income from commercial tenants. Distributions are made regularly based on your ownership percentage.
            </p>
          </div>
          
          <div className="group relative rounded-sm bg-white p-8 shadow-one hover:shadow-two dark:bg-dark">
            <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-white">4</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Property Management
            </h3>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Professional property managers handle all aspects of operations, tenant relations, and maintenance. You enjoy passive income without the headaches.
            </p>
          </div>
          
          <div className="group relative rounded-sm bg-white p-8 shadow-one hover:shadow-two dark:bg-dark">
            <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-white">5</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Trade Shares
            </h3>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Buy or sell shares on our secondary marketplace with zero fees. Easily adjust your portfolio as your investment strategy evolves.
            </p>
          </div>
          
          <div className="group relative rounded-sm bg-white p-8 shadow-one hover:shadow-two dark:bg-dark">
            <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-white">6</span>
            </div>
            <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
              Track Performance
            </h3>
            <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
              Monitor the performance of your investments through our intuitive dashboard. Access real-time data on property value, income, and appreciation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 