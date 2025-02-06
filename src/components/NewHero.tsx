"use client"
import React, { useState } from 'react';
import { Loader, CheckCircle, Info, Settings } from 'lucide-react';






// Define the Response type
interface Response {
  problem: string;
  solution: string;
  caseStudy: string;
  cta1: string;
  cta2: string;
}

// Define the keys for the responses
type ResponseKeys = 
  | "Users abandon our app quickly"
  | "We're guessing what to build next"
  | "Our onboarding is ineffective"
  | "Conversion rates are dropping"
  | "Features go unused";

const NewHero = () => {
  const [response, setResponse] = useState<Response | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const handleBubbleClick = (issue: ResponseKeys) => {
    setIsThinking(true);
    const responses: Record<ResponseKeys, Response> = {
        "Users abandon our app quickly": {
          problem: "Critical Problem: 68% of users churn within 3 days without clear feedback loops",
          solution: "Solution: Instant Friction Detection - Automatically surface rage clicks and frustration hotspots with AI-analyzed surveys",
          caseStudy: "How FinTechX recovered $220k MRR by fixing hidden checkout frustrations",
          cta1: "Show me how it works →",
          cta2: "Detect churn risks now"
        },
        "We're guessing what to build next": {
          problem: "Silent Roadmap Killer: Building features users don't need wastes 31% of dev resources",
          solution: "Solution: Behavior-Powered Roadmaps - Prioritize features using real user data from surveys + heatmaps",
          caseStudy: "SaaS team killed 5 unused features, boosting retention by 41%",
          cta1: "See feature prioritization",
          cta2: "Talk to product strategist"
        },
        "Our onboarding is ineffective": {
          problem: "Conversion Killer: 74% of users never discover key features without guidance",
          solution: "Solution: Smart Onboarding Paths - Auto-create personalized walkthroughs based on user behavior patterns",
          caseStudy: "CRM startup achieved 63% feature adoption in 8 weeks",
          cta1: "View onboarding examples",
          cta2: "Fix onboarding today"
        },
        "Conversion rates are dropping": {
          problem: "Revenue Leak: Poor page layouts drain 22% of potential conversions",
          solution: "Solution: Conversion Autopsy - See exactly where users bail via scroll maps + attention analytics",
          caseStudy: "E-commerce site added $1.2M/year with layout tweaks",
          cta1: "Analyze my pages",
          cta2: "Get UX audit"
        },
        "Features go unused": {
          problem: "Feature Graveyard: 58% of SaaS features are rarely touched after launch",
          solution: "Solution: Adoption Engine - Auto-nudge users to forgotten features + track ROI per capability",
          caseStudy: "B2B tool increased feature usage 7.3x in 6 months",
          cta1: "Find hidden gems",
          cta2: "Boost feature ROI"
        }
      };

    setTimeout(() => {
      setResponse(responses[issue]);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <div className="hero-section bg-gradient-to-b from-indigo-50 to-white pt-32 pb-16">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
        What's your biggest user experience headache right now?
      </h1>
      <p className="text-xl text-gray-600 text-center mb-8">
        Ask our AI advisor – get a tailored solution in 30 seconds.
      </p>
      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mb-8">
        {["Users abandon our app quickly", "We're guessing what to build next", "Our onboarding is ineffective", "Conversion rates are dropping", "Features go unused"].map(issue => (
          <button
            key={issue}
            onClick={() => handleBubbleClick(issue as ResponseKeys)}
            className="bubble bg-indigo-100 text-indigo-600 rounded-full px-4 py-2 mb-2 md:mb-0 md:mr-2 hover:bg-indigo-200 transition transform hover:scale-105"
          >
            {issue}
          </button>
        ))}
      </div>
      {isThinking && (
        <div className="flex justify-center mb-4">
          <Loader className="animate-spin w-6 h-6 text-indigo-600" />
          <span className="ml-2 text-gray-600">Thinking...</span>
        </div>
      )}
      {response && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {/* Problem Card */}
          <div className="response-card bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-2">
              <Info className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Problem</h2>
            </div>
            <p className="text-gray-800">{response.problem}</p>
            <button className="mt-4 bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700">{response.cta1}</button>
          </div>
          {/* Solution Card */}
          <div className="response-card bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-2">
              <Settings className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Solution</h2>
            </div>

            <p className="text-gray-800">{response.solution}</p>
            <button className="mt-4 bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700">{response.cta2}</button>
          </div>
          {/* Case Study Card */}
          <div className="response-card bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-6 h-6 text-indigo-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Case Study</h2>
            </div>
            <p className="text-gray-800">{response.caseStudy}</p>
            <button className="mt-4 bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700">{response.cta1}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewHero; 