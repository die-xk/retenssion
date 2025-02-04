"use client"
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';


const Pricing = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Start free, upgrade as you grow. All plans include a 14-day trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
            <p className="mt-2 text-gray-600">Perfect for early-stage startups</p>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="ml-2 text-gray-600">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              {['Up to 1,000 users', 'Basic AI predictions', 'Email campaigns', 'Community forum'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors duration-150">
              Start Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-md ring-2 ring-indigo-600 p-8 relative">
            <div className="absolute top-0 right-6 transform -translate-y-1/2">
              <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
            <p className="mt-2 text-gray-600">For growing companies</p>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">$299</span>
              <span className="ml-2 text-gray-600">/month</span>
            </div>
            <ul className="mt-6 space-y-4">
              {[
                'Up to 10,000 users',
                'Advanced AI predictions',
                'Multi-channel campaigns',
                'Priority support',
                'Custom integrations',
                'ROI dashboard'
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150">
              Start Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
            <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
            <p className="mt-2 text-gray-600">For large organizations</p>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">Custom</span>
            </div>
            <ul className="mt-6 space-y-4">
              {[
                'Unlimited users',
                'Custom AI models',
                'Dedicated success manager',
                'SLA guarantee',
                'Custom reporting',
                'On-premise option'
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors duration-150">
              Contact Sales
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;