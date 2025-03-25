import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types/property';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    id,
    image,
    title,
    location,
    price,
    shares,
    area,
    occupancy,
    yield: annualYield,
    type
  } = property;

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-one dark:bg-dark">
      <Link href={`/properties/${id}`} className="relative block h-[230px] w-full">
        <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
          {type}
        </span>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </Link>
      <div className="p-6 sm:p-8">
        <h3>
          <Link
            href={`/properties/${id}`}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <div className="mb-6 flex items-center">
          <div className="mr-5 flex items-center">
            <svg
              className="mr-2 fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9 7.39996C15.9 12.6 9 16.2 9 16.2C9 16.2 2.1 12.6 2.1 7.39996C2.1 5.99996 2.7 4.79996 3.6 3.89996C4.5 2.99996 5.7 2.39996 7.1 2.39996C8.1 2.39996 9 2.69996 9.8 3.39996C10.6 2.69996 11.5 2.39996 12.5 2.39996C13.9 2.39996 15.1 2.99996 16 3.89996C16.9 4.79996 17.5 5.99996 15.9 7.39996Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-sm font-medium text-body-color">
              {location}
            </span>
          </div>
          <div className="flex items-center">
            <svg
              className="mr-2 fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8 0H16.2C17.19 0 18 0.81 18 1.8V16.2C18 17.19 17.19 18 16.2 18H1.8C0.81 18 0 17.19 0 16.2V1.8C0 0.81 0.81 0 1.8 0ZM1.8 1.8V16.2H16.2V1.8H1.8ZM3.6 3.6H14.4V5.4H3.6V3.6ZM3.6 7.2H14.4V9H3.6V7.2ZM3.6 10.8H9V14.4H3.6V10.8Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-sm font-medium text-body-color">
              {area} sq ft
            </span>
          </div>
        </div>
        <div className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mb-3">
              <p className="text-base font-medium text-body-color">Price per Share</p>
              <h4 className="text-xl font-bold text-black dark:text-white">
                ${price.toLocaleString()}
              </h4>
            </div>
            <div className="mb-3">
              <p className="text-base font-medium text-body-color">Annual Yield</p>
              <h4 className="text-xl font-bold text-primary">
                {annualYield}%
              </h4>
            </div>
            <div className="mb-3">
              <p className="text-base font-medium text-body-color">Occupancy</p>
              <h4 className="text-xl font-bold text-black dark:text-white">
                {occupancy}%
              </h4>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-5 flex items-center">
            <span className="text-sm font-medium text-body-color">
              {shares} shares available
            </span>
          </div>
          <div>
            <Link
              href={`/properties/${id}`}
              className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-6 text-center text-base font-medium text-white hover:bg-opacity-90"
            >
              Invest Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard; 