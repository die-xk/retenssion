import React from 'react';
import { ArrowRight, TrendingUp, Users, Shield, BarChart3, Heart } from 'lucide-react';

const RetentionMetrics = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-32 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Turn Insights into Retention Wins</h1>
        <p className="text-xl text-gray-600 mb-8">
          Track, analyze, and optimize your user retention with AI-driven metrics. Get clear insights into what's working—and what needs fixing—so you can keep more customers engaged.
        </p>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Key Features */}
          <div className="lg:col-span-7">
            <div className="flex flex-col space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-semibold text-gray-800 ml-2">Capture User Behavior in Real-Time</h2>
                </div>
                <p>Install our lightweight tracking snippet in seconds. Automatically collect session data, feature usage, and engagement trends. Identify users at risk of churning before they leave.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-semibold text-gray-800 ml-2">AI-Powered Retention Analysis</h2>
                </div>
                <p>Our AI scans user behavior to detect drop-off patterns. Get real-time risk scores based on inactivity, product usage, and feedback. Predict churn up to 30 days in advance so you can take action early.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-semibold text-gray-800 ml-2">Take Action with Data-Driven Insights</h2>
                </div>
                <p>Trigger personalized win-back campaigns via email, in-app, or SMS. Pinpoint friction points in your onboarding and product experience. Track your retention improvements live on your dashboard.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Insights */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">What You'll See in Your Dashboard</h2>
              </div>
              <p className="text-gray-600 mb-4">Retention Trends – Daily active users, churn rate, and engagement shifts.</p>
              <p className="text-gray-600 mb-4">User Segmentation – Identify power users, passive users, and at-risk customers.</p>
              <p className="text-gray-600 mb-4">Automated Alerts – Get notified when churn risks increase.</p>
              <p className="text-gray-600 mb-8">Feedback Insights – AI-generated sentiment analysis from user surveys.</p>
              <p className="text-xl text-gray-600 mb-8">
                See how our AI-powered retention metrics can help you reduce churn and boost revenue. Try it free for 14 days—no credit card required!
              </p>
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150 shadow-lg hover:shadow-xl">
                Start Tracking Retention
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">See It in Action</h2>
          <p className="text-lg text-gray-600 mb-6">Watch our demo to understand how RetainPro can transform your user retention strategy.</p>
          <div className="flex justify-center">
            <img src="/demo-video-thumbnail.jpg" alt="Demo Video" className="rounded-lg shadow-lg" />
          </div>
          <button className="mt-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150">
            Watch Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RetentionMetrics;