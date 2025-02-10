"use client"


import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import { UserButton, useAuth } from "@clerk/nextjs";

import { useEffect, useState } from 'react';

import { Analytics } from "@vercel/analytics/react"
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";

export default function Home() {
  const { userId } = useAuth();
   return (
    <> 
      <Analytics />
      <Hero />
      <Demo />
      <HowItWorks />
      <Pricing />
      <FAQ />
     </>
  );
}
