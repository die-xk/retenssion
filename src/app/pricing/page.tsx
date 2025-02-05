"use client"

import React from 'react';
import Pricing from "@/components/Pricing"; // Assuming you have a Pricing component

const PricingPage = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-32 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing Plans</h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that's right for you. Get started with our free trial and see how RetainPro can help you retain more customers.
          </p>
          <Pricing />
        </div>
      </div>
    </>
  );
};

export default PricingPage;
