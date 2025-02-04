
"use client"
import React, { useState } from 'react';
import { ArrowRight, DollarSign, TrendingUp, Shield, Users } from 'lucide-react';

const Hero = () => {
  const [mrr, setMrr] = useState('');
  const [savings, setSavings] = useState<number | null>(null);

  const calculateSavings = (value: string) => {
    const mrrNumber = parseFloat(value.replace(/,/g, ''));
    if (!isNaN(mrrNumber)) {
      // Assume 20% savings on MRR
      setSavings(mrrNumber * 0.2);
    } else {
      setSavings(null);
    }
  };

  const handleMrrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    // Format with commas
    const formatted = value ? parseInt(value).toLocaleString() : '';
    setMrr(formatted);
    calculateSavings(value);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-32 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-indigo-50 rounded-full px-4 py-1 mb-8 self-start animate-fade-in">
                <Shield className="w-4 h-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-600">Trusted by 150+ SaaS companies</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6 animate-slide-up">
                Stop Losing Revenue to Churn – Predict, Retain, and Grow with AI-Driven Insights
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-gray-600 mb-8 animate-slide-up-delay">
                Turn at-risk users into loyal advocates using behavioral AI, smart engagement campaigns, and community-powered rewards. Get started risk-free for 14 days.
              </p>
              
              {/* CTA Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 animate-slide-up-delay-2">
                <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150 shadow-lg hover:shadow-xl">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <p className="text-sm text-gray-600">
                  No credit card required. Join 150+ SaaS companies saving 20%+ MRR
                </p>
              </div>
              
              {/* Social Proof */}
              <div className="grid grid-cols-3 gap-4 animate-fade-in-delay">
                <div className="text-center">
                  <p className="text-2xl font-bold text-indigo-600">150+</p>
                  <p className="text-sm text-gray-600">Active Companies</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-indigo-600">20%+</p>
                  <p className="text-sm text-gray-600">MRR Saved</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-indigo-600">95%</p>
                  <p className="text-sm text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - ROI Calculator */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-in-right">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">ROI Calculator</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                See how much you could save with RetainPro
              </p>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="mrr" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Recurring Revenue (MRR)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="mrr"
                      value={mrr}
                      onChange={handleMrrChange}
                      className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                      placeholder="10,000"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">monthly</span>
                    </div>
                  </div>
                </div>
                
                {savings !== null && (
                  <div className="bg-indigo-50 rounded-lg p-6 animate-fade-in">
                    <p className="text-sm text-indigo-600 mb-2">Potential Annual Savings</p>
                    <p className="text-3xl font-bold text-indigo-700">
                      ${(savings * 12).toLocaleString()}
                    </p>
                    <p className="text-sm text-indigo-600 mt-2">
                      Based on average customer savings of 20% MRR
                    </p>
                  </div>
                )}
                
                <button className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150">
                  Start Saving Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;