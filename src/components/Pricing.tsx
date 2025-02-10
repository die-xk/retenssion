"use client"
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <>
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Choose the Plan That's Right for You
            </h2>
            <p className="text-xl text-gray-600">
              Whether you're a startup or an enterprise, we have a plan that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Basic</h3>
              <p className="mt-2 text-gray-600">Perfect for startups</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="ml-2 text-gray-600">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  'Customizable widget with pre-built NPS/CES surveys',
                  'Basic dashboard analytics (view responses, sentiment filters, CSV export)',
                  'Standard integrations (Slack, Intercom, Zendesk)',
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/waitlist" className="mt-8 w-full flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors duration-150">
                Start with Basic →
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
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
                <span className="text-4xl font-bold text-gray-900">$59</span>
                <span className="ml-2 text-gray-600">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  'Everything in Basic, plus:',
                  'AI sentiment analysis for deeper insights',
                  'Advanced trigger configurations (behavioral insights, rage click detection)',
                  'Priority email support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/waitlist" className="mt-8 w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150">
                Upgrade to Pro →
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
              <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
              <p className="mt-2 text-gray-600">For large organizations</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="ml-2 text-gray-600">/month</span>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  'Everything in Pro, plus:',
                  'Custom integrations (Salesforce, HubSpot, etc.)',
                  'Advanced targeting and personalized retention playbooks',
                  'Priority technical support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/waitlist" className="mt-8 w-full flex items-center justify-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors duration-150">
                Go Enterprise →
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Bonus Offer */}
          <div className="mt-8 text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Bonus Offer</h4>
            <p className="text-gray-600">
              Early Bird Special: Lock in the Basic plan at $29/month for life with our pre-launch deal!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;