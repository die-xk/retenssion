"use client"

import React from 'react';
import { CheckCircle, Clock, Bot, BarChart, Lock, Code, ArrowRight } from 'lucide-react';


const WhatYouGet = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">What You Get</h1>
          <p className="text-xl text-gray-600">🔍 See Exactly Where Users Engage (and Where They Don't)</p>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-start bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105">
            <CheckCircle className="w-8 h-8 text-indigo-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">✅ Automatic Button Click Tracking</h3>
              <p className="text-gray-600">Discover which CTAs users love (and which they ignore)</p>
              <p className="text-gray-600">See exact click counts for every button, link, and interactive element</p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105">
            <Clock className="w-8 h-8 text-indigo-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">⏱️ Section Time Analytics</h3>
              <p className="text-gray-600">Know how long users spend in key content areas</p>
              <p className="text-gray-600">Identify underperforming sections in 1 click</p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105">
            <Bot className="w-8 h-8 text-indigo-600 mr-4" />
            <div>

              <h3 className="text-xl font-semibold text-gray-800">🤖 AI-Powered Recommendations</h3>
              <p className="text-gray-600">Get instant insights like:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>"Users spend 2x longer on pricing than features – simplify your value proposition!"</li>
                <li>"The 'Start Free Trial' button gets 3x more clicks than 'Learn More' – test making it larger"</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105">
            <BarChart className="w-8 h-8 text-indigo-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">📊 Simple Yet Powerful Dashboard</h3>
              <p className="text-gray-600">Top 5 most-clicked buttons</p>
              <p className="text-gray-600">Time-spent leaderboard per section</p>
              <p className="text-gray-600">Plain-English growth recommendations</p>
            </div>
          </div>

          <div className="flex items-start bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105">
            <Lock className="w-8 h-8 text-indigo-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">🔒 Privacy-First Tracking</h3>
              <p className="text-gray-600">Zero cookies required</p>
              <p className="text-gray-600">Fully GDPR/CCPA compliant</p>
              <p className="text-gray-600">Data ownership guaranteed</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-600">
            <li className="mb-2">Add 1 Line of Code: <code>&lt;script src="your-tracking-script.js"&gt;&lt;/script&gt;</code></li>
            <li className="mb-2">Define Key Sections: Use CSS selectors or our visual editor</li>
            <li>Get Insights in 24 Hours: "Your pricing page needs work: 72% of users leave within 30 seconds"</li>
          </ol>
        </div>

        {/* Why This Beats Traditional Heatmaps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why This Beats Traditional Heatmaps</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Traditional Tools</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Your AI-Powered Solution</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2">Shows where users click</td>
                  <td className="px-4 py-2">Explains why they click</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Requires manual analysis</td>
                  <td className="px-4 py-2">Delivers ready-to-use fixes</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Overwhelming data noise</td>
                  <td className="px-4 py-2">Focuses on high-impact areas</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Generic suggestions</td>
                  <td className="px-4 py-2">Tailored to your business</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">🚀 Start Optimizing Smarter Today</h2>
          <p className="text-lg text-gray-600 mb-4">"See your first insights in minutes – no credit card required"</p>
          <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150 shadow-lg hover:shadow-xl">
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Technical Assurance */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">⚙️ Built for SaaS Teams:</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>1-click Next.js integration</li>
            <li>Supabase-powered real-time analytics</li>
            <li>SOC 2 compliant infrastructure</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGet;
