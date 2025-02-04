"use client"


import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import DemoDashboard from "./demo-dashboard";
import { useEffect, useState } from 'react';

export default function Home() {
  const { userId } = useAuth();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 45000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>  
     <Hero />
     <Demo />
     <Features />
     <Pricing />
     <DemoDashboard />

     {showPopup && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
         <div className="bg-white rounded-lg p-6 shadow-lg">
           <h2 className="text-lg font-semibold text-gray-900">Exclusive Offer Just for You!</h2>
           <p className="mt-2 text-gray-600">Sign up now and get 20% off for the first 3 months!</p>
           <button
             onClick={() => {/* Implement sign-up logic here */}}
             className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
           >
             Sign Up Now
           </button>
         </div>
       </div>
     )}
    </>
  );
}
