import React from "react";
import Image from "next/image";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg width="140" height="30" viewBox="0 0 140 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="22" fill="#0052CC" fontFamily="Arial" fontSize="22" fontWeight="700">
          MyProperty
        </text>
        <path d="M135 8L138 11L135 14" stroke="#0052CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M130 20L130 2" stroke="#0052CC" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
};

export default Logo; 