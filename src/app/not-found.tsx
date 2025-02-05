"use client"

import React, { useState } from 'react';

const NotFoundPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add logic to handle the email submission, e.g., sending it to an API
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 mb-8">Still Building...</p>
        <p className="text-lg text-gray-500 mb-4">We're working hard to get this page ready. Leave your email below, and we'll let you know when it's live!</p>
        
        {submitted ? (
          <p className="text-lg text-gray-600">Thanks for your interest! We'll keep you updated.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 mb-4 w-64"
            />
            <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-150">
              Notify Me
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NotFoundPage; 