import React from 'react';
import { ArrowRight, Users, Shield, BarChart3, CheckCircle, AlertCircle } from 'lucide-react';

const CustomerHealth = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-32 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Turn Customer Data into Retention Wins</h1>
        <p className="text-xl text-gray-600 mb-8">
          Don't wait for customers to churn—spot the warning signs early with AI-powered health scores. We analyze user behavior, engagement, and sentiment so you can take action before it's too late.
        </p>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Key Features */}
          <div className="lg:col-span-7">
            <div className="flex flex-col space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-semibold text-gray-800 ml-2">Track Engagement & Usage</h2>
                </div>
                <p>See which features customers love—and which they ignore. Monitor session activity, click patterns, and onboarding progress. Identify customers slipping away before they cancel.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-semibold text-gray-800 ml-2">Predict Churn with AI-Powered Health Scores</h2>
                </div>
                <p>Our AI analyzes behavior and assigns each user a health score based on feature adoption, support interactions, drop-off points, and engagement trends over time. High score? They're thriving. Low score? Time to re-engage before they churn.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-semibold text-gray-800 ml-2">Take Action with Smart Retention Tools</h2>
                </div>
                <p>Win-back campaigns auto-trigger outreach when health scores drop. Targeted upsells offer upgrades to engaged, happy users. Real-time insights track retention impact & make data-driven decisions.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Insights */}
          <div className="lg:col-span-5 mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center space-x-2 mb-6">
                <AlertCircle className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">What You Get in Your Dashboard</h2>
              </div>
              <p className="text-gray-600 mb-4">Customer Health Scores – AI-powered predictions based on real user behavior.</p>
              <p className="text-gray-600 mb-4">Feature Usage Trends – Know which tools drive the most value.</p>
              <p className="text-gray-600 mb-4">Churn Risk Alerts – Get notified when users need attention.</p>
              <p className="text-gray-600 mb-8">Personalized Retention Playbooks – Automated campaigns tailored to user health.</p>
              <p className="text-xl text-gray-600 mb-8">
                Stop Guessing, Start Retaining. Know which customers need help, when they need it—before it's too late.
              </p>
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150 shadow-lg hover:shadow-xl">
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHealth;
