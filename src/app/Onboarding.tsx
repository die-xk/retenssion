"use client"

import React, { useState } from 'react';

const Onboarding = ({ onComplete }: { onComplete: (companySize: string) => void }) => {
  const [companySize, setCompanySize] = useState('');
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step === 1) {
      onComplete(companySize); // Call the completion handler
    }
    setStep(prevStep => prevStep + 1);
  };

  const handleCompanySizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCompanySize(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Retenssion!</h1>

      {step === 1 && (
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Let's Get Started!</h2>
          <p className="mb-4">To tailor your experience, please tell us:</p>
          <label htmlFor="companySize" className="block mb-2">What's your company size?</label>
          <select
            id="companySize"
            value={companySize}
            onChange={handleCompanySizeChange}
            className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          >
            <option value="">Select...</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-200">51-200</option>
            <option value="201+">201+</option>
          </select>
          <button
            onClick={handleNextStep}
            disabled={!companySize}
            className={`w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg transition duration-200 ${!companySize ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
          >
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Setup Guide</h2>
          <p className="mb-4">Follow these steps to get started:</p>
          <ul className="list-disc list-inside mb-4">
            <li>1️⃣ Connect Data Source (e.g., API key, CRM integration)</li>
            <li>2️⃣ Set Up a Sample Survey or User Tracking</li>
            <li>3️⃣ View Mock Analytics in Dashboard</li>
          </ul>
          <button
            onClick={handleNextStep}
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg transition duration-200 hover:bg-indigo-700"
          >
            Finish Setup
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">You're All Set!</h2>
          <p className="mb-4">Thank you for completing the onboarding process. You can now start using Retenssion to its full potential!</p>
          <button
            onClick={() => window.location.href = '/dashboard'} // Redirect to the dashboard
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg transition duration-200 hover:bg-indigo-700"
          >
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Onboarding; 