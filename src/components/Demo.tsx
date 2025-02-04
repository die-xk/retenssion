"use client"
import React, { useState } from 'react';
import { Code2, Sparkles, Users, ArrowRight, CheckCircle2 } from 'lucide-react';


const Demo = () => {
  const [step, setStep] = useState(1);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setStep(2);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
      setStep(3);
    }, 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            See How Easy It Is to Retain More Customers
          </h2>
          <p className="text-xl text-gray-600">
            Three simple steps to transform your user retention rates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Interactive Demo */}
          <div className="space-y-8">
            <div className={`transition-all duration-300 ${step === 1 ? 'opacity-100' : 'opacity-50'}`}>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  1
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Add Our Snippet
                </h3>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center justify-between text-gray-400 mb-2">
                  <span>retention-tracker.js</span>
                  <button 
                    className="flex items-center space-x-1 hover:text-indigo-400 transition-colors"
                    onClick={() => {/* Add copy functionality */}}
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Copy</span>
                  </button>
                </div>
                <code className="text-indigo-400">
                  {`<script>
  retenssion.init({
    apiKey: 'YOUR_API_KEY',
    trackEvents: true
  });
</script>`}
                </code>
              </div>
            </div>

            <div className={`transition-all duration-300 ${step === 2 ? 'opacity-100' : 'opacity-50'}`}>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  2
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  AI Analyzes Your Data
                </h3>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700 font-medium">Analyzing user patterns...</span>
                  {isAnalyzing && (
                    <div className="animate-pulse flex items-center text-indigo-600">
                      <Sparkles className="w-5 h-5 mr-2" />
                      <span>AI Processing</span>
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-300 ${step === 3 ? 'opacity-100' : 'opacity-50'}`}>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                  3
                </div>
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  Get Actionable Insights
                </h3>
              </div>
              {showResults && (
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 space-y-4">
                  <div className="flex items-center text-green-600">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    <span className="font-medium">Analysis Complete</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-green-700">Churn Risk Identified</span>
                      <span className="font-semibold text-green-700">-45%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                      <span className="text-indigo-700">Engagement Score</span>
                      <span className="font-semibold text-indigo-700">+28%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-purple-700">Revenue Impact</span>
                      <span className="font-semibold text-purple-700">+$12.4k</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {step === 1 && (
              <button
                onClick={handleAnalyze}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150"
              >
                Try Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            )}
          </div>

          {/* Right side - Benefits */}
          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What You'll Get
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Predict User Behavior
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Our AI analyzes user patterns to identify at-risk customers before they churn.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <Sparkles className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Smart Engagement
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Automatically trigger personalized retention campaigns at the perfect moment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      Measurable Results
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Track the impact on your retention rates and revenue in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;