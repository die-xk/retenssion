"use client"

import React from 'react';
import { BarChart, ChartBar, CheckCircle, MessageCircle, ClipboardCheck, Rocket, User } from 'lucide-react';



const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our Powerful Features
          </h1>
          <p className="text-xl text-gray-600">
            Discover how our comprehensive suite of tools can help you understand and reduce customer churn
          </p>
        </div>

        {/* AI Surveys Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-6">
                <ChartBar className="mr-2" />
                <span className="text-indigo-600 font-medium">AI-Powered Insights</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Surveys</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI-powered survey system automatically reaches out to your users at critical moments in their journey. Instead of generic feedback, get precise insights about:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  User frustrations and pain points
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Feature satisfaction levels
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Reasons for potential churn
                </li>
              </ul>
              <a href="/signup" className="inline-block mt-4 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
                Start Your AI Survey Trial
              </a>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">AI Survey Screenshot Here</p>
            </div>
          </div>
        </section>

        {/* Feedback Widget Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Feedback Widget Screenshot Here</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                <ClipboardCheck className="mr-2" />
                <span className="text-purple-600 font-medium">Real-Time Feedback</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Feedback Widget</h2>
              <p className="text-lg text-gray-600 mb-6">
                Install our lightweight feedback widget in just 2 minutes and start collecting valuable user insights immediately. Features include:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Customizable appearance and positioning
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Multi-language support
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Sentiment analysis on feedback
                </li>
              </ul>
              <a href="/signup" className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                Start Your Feedback Widget Trial
              </a>
            </div>
          </div>
        </section>

        
        <section className="mb-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Proven Results</h2>
            <p className="text-xl text-gray-600 mb-6">
              Companies using our solutions have seen remarkable improvements:
            </p>
            <div className="overflow-hidden">
              <ul className="flex space-x-12 text-gray-600">
                <li className="flex items-center text-lg py-4 px-6 bg-blue-100 rounded-lg shadow-md">
                  <CheckCircle className="mr-2" /> 30% increase in customer retention rates
                </li>
                <li className="flex items-center text-lg py-4 px-6 bg-green-100 rounded-lg shadow-md">
                  <Rocket className="mr-2" /> 25% boost in user engagement
                </li>
                <li className="flex items-center text-lg py-4 px-6 bg-yellow-100 rounded-lg shadow-md">
                  <MessageCircle className="mr-2" /> 40% more feedback collected in the first month
                </li>
                <li className="flex items-center text-lg py-4 px-6 bg-purple-100 rounded-lg shadow-md">
                  <BarChart className="mr-2" /> 50% faster decision-making with real-time analytics
                </li>
              </ul>
            </div>
            <p className="text-xl text-gray-600 mt-6">
              Join the growing number of businesses transforming their customer experience with our tools!
            </p>
          </div>
        </section>

        {/* User Behavior Analysis Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-6">
                <User className="mr-2" />
                <span className="text-pink-600 font-medium">Behavior Analytics</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Behavior Analysis</h2>
              <p className="text-lg text-gray-600 mb-6">
                Understand how users interact with your product through comprehensive behavior analysis:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Feature usage tracking and trends
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  User engagement metrics
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Early churn risk identification
                </li>
              </ul>
              <a href="/signup" className="inline-block mt-4 px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
                Start Your Behavior Analysis Trial
              </a>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Behavior Analysis Dashboard Screenshot Here</p>
            </div>
          </div>
        </section>

        {/* Heatmaps Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Heatmap Screenshot Here</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                <ChartBar className="mr-2" />
                <span className="text-green-600 font-medium">Visual Analytics</span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">Heatmaps</h2>
              <p className="text-lg text-gray-600 mb-6">
                Visualize user behavior with powerful heatmap analytics that show exactly how users interact with your interface:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Click tracking and analysis
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Scroll depth visualization
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  User journey mapping
                </li>
              </ul>
              <a href="/signup" className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                Start Your Heatmap Trial
              </a>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default FeaturesPage;
