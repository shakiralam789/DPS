// components/DepositProfileHeader.jsx
import React from "react";
import Image from "next/image";

const DepositProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between">
      {/* Left section - Profile info */}
      <div className="flex items-center space-x-4">
        {/* Profile image */}
        <div className="bg-gray-200 size-12 2xl:size-16 rounded-full overflow-hidden">
          <Image
            src="/profile-image.jpg"
            alt="Md. Aminul Islam"
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name and contact */}
        <div>
          <h2 className="font-24 font-medium text-gray-800">
            Md. Aminul Islam
          </h2>
          <p className="text-gray-500">
            <span className="font-16">Mobile Number: </span>
            <span className="text-gray-700 font-20">01922 992929</span>
          </p>
        </div>
      </div>

      {/* Right section - Financial info */}
      <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:space-x-6">
        <div className="text-right">
          <p className="font-16 text-gray-500">Total Deposited:</p>
          <p className="font-20 font-semibold text-purple-600">৳1,27,375</p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="font-16 text-gray-500">Total Installment:</p>
          <p className="font-20 font-semibold text-red-500">৳4,27,375</p>
        </div>
      </div>
    </div>
  );
};

export default DepositProfileHeader;
