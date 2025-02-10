"use client"

import React from 'react';
import { CheckCircle, Paintbrush, Clipboard, BarChart, User, Settings, Rocket, FileText } from 'lucide-react';
import FAQ from '@/components/FAQ';
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

        {/* Intuitive Widget Customization Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-6">
                <Paintbrush className="mr-2" />
                <span className="text-indigo-600 font-medium">Intuitive Widget Customization</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Seamlessly blend feedback collection with your brand's style.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Customize your floating feedback button's color, position, and icon to match your website. With a few clicks, design a widget that's both attractive and unobtrusive—ensuring users aren't disrupted while still being engaged.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Widget Customization Screenshot Here</p>
            </div>
          </div>
        </section>

        {/* Smart Survey Templates Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Survey Templates Screenshot Here</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Clipboard className="mr-2" />
                <span className="text-purple-600 font-medium">Smart Survey Templates</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Launch surveys in minutes—no design or code required.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Choose from pre-built NPS, CES, or custom survey templates that capture actionable insights. Our surveys are crafted to identify hidden frustrations and pinpoint churn-causing issues, so you can act fast to retain users.
              </p>
            </div>
          </div>
        </section>

        {/* Visual Deployment Rules Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-pink-100 rounded-full mb-6">
                <Settings className="mr-2" />
                <span className="text-pink-600 font-medium">Visual Deployment Rules</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Deploy your feedback widget exactly when it matters most.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Use our intuitive, no-code rule builder to set up triggers based on:
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Page load delays
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Scroll percentage
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Specific button clicks or feature interactions
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  Exit intent and inactivity
                </li>
              </ul>
              <p className="text-lg text-gray-600 mb-6">
                This powerful visual interface gives you full control over timing—ensuring feedback is captured at the optimal moment.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Deployment Rules Screenshot Here</p>
            </div>
          </div>
        </section>

        {/* Real-Time Analytics Dashboard Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
                <BarChart className="mr-2" />
                <span className="text-green-600 font-medium">Real-Time Analytics Dashboard</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Monitor user feedback as it happens.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our dashboard presents all your feedback in a clean, easy-to-navigate interface. View responses in real time, filter by sentiment (positive, neutral, negative), and export your data for deeper analysis. Stay informed with dynamic charts and trend reports that empower your decision-making.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Analytics Dashboard Screenshot Here</p>
            </div>
          </div>
        </section>

        {/* Seamless Integrations Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Integrations Screenshot Here</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                <User className="mr-2" />
                <span className="text-blue-600 font-medium">Seamless Integrations</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect feedback to your favorite tools effortlessly.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Integrate with platforms like Slack, Intercom, and Zendesk to streamline your workflow. Automatically convert user feedback into support tickets or alerts, ensuring that no critical issue is overlooked.
              </p>
            </div>
          </div>
        </section>

        {/* AI-Powered Insights Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Rocket className="mr-2" />
                <span className="text-purple-600 font-medium">AI-Powered Insights</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Let advanced AI do the heavy lifting.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our built-in sentiment analysis categorizes feedback instantly, highlighting key areas that need attention. Prioritize and act on negative feedback before it turns into churn, and celebrate positive trends to reinforce what's working well.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">AI Insights Screenshot Here</p>
            </div>
          </div>
        </section>

        {/* Advanced Behavioral Triggers Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full mb-6">
                <FileText className="mr-2" />
                <span className="text-yellow-600 font-medium">Advanced Behavioral Triggers</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Capture insights from every user interaction.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Detect subtle cues such as rage clicks, inactivity, or unusual navigation patterns. With these advanced triggers, you can prompt targeted surveys precisely when users are experiencing friction—helping you uncover hidden pain points early.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Behavioral Triggers Screenshot Here</p>
            </div>
          </div>
        </section>

        {/* Data Export & Custom Reporting Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full mb-6">
                <FileText className="mr-2" />
                <span className="text-gray-600 font-medium">Data Export & Custom Reporting</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get the full picture with comprehensive reporting.</h2>
              <p className="text-lg text-gray-600 mb-6">
                Export your feedback data as CSV files and generate custom reports tailored to your needs. Whether you're sharing insights with your team or planning strategic changes, our robust reporting tools keep you in control of your user data.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <p className="text-gray-500">Reporting Screenshot Here</p>
            </div>
          </div>
        </section>
      </div>
      <FAQ />
    </div>
  );
};


export default FeaturesPage;
