"use client"

import React, { useState } from 'react';
import { Italic as Crystal, Mail, Gift, LayoutTemplate, Play, X, ChevronRight } from 'lucide-react';


const Features = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Everything You Need to Fight Churn – and Turn It into Growth
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
            {/* AI Churn Predictions */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Crystal className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                AI Churn Predictions
              </h3>
              <p className="text-gray-600">
                Spot risks 30 days earlier with behavior-based risk scores
              </p>
            </div>

            {/* Omnichannel Campaigns */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Omnichannel Campaigns
              </h3>
              <p className="text-gray-600">
                Automate win-back emails, calls, and in-app rewards
              </p>
            </div>

            {/* Loyalty Engine */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <Gift className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Loyalty Engine
              </h3>
              <p className="text-gray-600">
                Turn loyal users into affiliates with perks and community rewards
              </p>
            </div>

            {/* Onboarding Rescue */}
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <LayoutTemplate className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Onboarding Rescue
              </h3>
              <p className="text-gray-600">
                Fix leaks in your onboarding funnel with step-by-step guides
              </p>
            </div>
          </div>

          {/* Video Demo Section */}
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer"
                 onClick={() => setIsVideoOpen(true)}>
              {/* Video Thumbnail - Using a relevant Unsplash image */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Dashboard Demo"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-70 transition-opacity duration-300"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                    <div className="text-left">
                      <p className="text-gray-900 font-semibold">See how it works</p>
                      <p className="text-gray-600 text-sm">60-second demo</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="relative w-full max-w-4xl mx-auto">
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  <div className="aspect-video bg-black rounded-lg overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.loom.com/embed/your-video-id"
                      frameBorder="0"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            )}

            {/* Feature Highlights under video */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-bold text-2xl text-indigo-600">30d</div>
                <div className="text-sm text-gray-600">Earlier Predictions</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-indigo-600">24/7</div>
                <div className="text-sm text-gray-600">Automated Campaigns</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-2xl text-indigo-600">2x</div>
                <div className="text-sm text-gray-600">Retention Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;