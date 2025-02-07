"use client"

import React, { useState } from 'react';
import { Building2, Mail } from 'lucide-react';

const CareersPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this to your API
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden bg-white pt-32 pb-16">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Building2 className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-6 text-4xl font-bold text-gray-900">Join Our Team</h1>
          <p className="mt-4 text-xl text-gray-600">
            We're building the future of customer retention. While we don't have any open positions right now, we're always looking for talented people.
          </p>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Leave your email with us and we'll notify you when new positions open up.
          </p>
          
          {submitted ? (
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <p className="text-green-800">Thanks for your interest! We'll be in touch when new positions open up.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Notify me about opportunities
              </button>
            </form>
          )}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="text-center p-6 bg-indigo-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">Our Values</h3>
            <p className="mt-2 text-gray-600">
              We believe in innovation, customer focus, and building products that make a difference.
            </p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900">Our Culture</h3>
            <p className="mt-2 text-gray-600">
              Remote-first, flexible hours, and a focus on work-life balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage; 