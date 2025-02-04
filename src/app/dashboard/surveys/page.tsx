"use client"
import React, { useState } from 'react';
import {
  MessageSquare,
  Brain,
  PieChart,
  AlertCircle,
  Plus,
  ChevronRight,
  CheckCircle,
  DollarSign,
  Users,
  Star
} from 'lucide-react';

// Mock data for active surveys and insights
const mockSurveys = [
  {
    id: 1,
    type: 'Cancellation Prevention',
    status: 'Active',
    responses: 24,
    conversionRate: 45,
    description: 'Exit survey with dynamic discount offers',
    lastTrigger: '2 hours ago',
    aiSuggestion: 'Consider increasing discount to 25% for users with LTV > $1000'
  },
  {
    id: 2,
    type: 'Feature Satisfaction',
    status: 'Active',
    responses: 156,
    conversionRate: 78,
    description: 'Monthly product feedback collection',
    lastTrigger: '1 day ago',
    aiSuggestion: 'Users requesting integration with Slack - consider prioritizing'
  }
];

const aiRecommendations = [
  {
    id: 1,
    type: 'Churn Prevention',
    trigger: 'High-value customer showing decreased usage',
    suggestion: 'Deploy personalized re-engagement survey with premium feature trial',
    impact: 'Estimated 35% retention improvement',
    template: {
      title: "We noticed you're using RetainPro less",
      questions: [
        'What features are most valuable to you?',
        'What challenges are you currently facing?',
        'Would access to [AI-detected missing feature] be helpful?'
      ],
      offer: 'Premium feature trial + 20% discount next quarter'
    }
  },
  {
    id: 2,
    type: 'Upgrade Opportunity',
    trigger: 'Free tier user hitting usage limits',
    suggestion: 'Offer graduated pricing survey with custom plan options',
    impact: 'Potential 25% conversion to paid plans',
    template: {
      title: 'Customize your ACME experience',
      questions: [
        "Which features would you like to access more?",
        "What's your ideal price point?",
        "Would a team plan benefit your organization?"
      ],
      offer: 'Custom plan with 15% first-month discount'

    }
  }
];

const SurveysAndFeedback = () => {
  const [selectedTab, setSelectedTab] = useState('active');
  const [showNewSurveyModal, setShowNewSurveyModal] = useState(false);

  return (
    <div className="p-8 pt-16 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>


          <h1 className="text-2xl font-bold text-gray-900">Surveys & AI Insights</h1>
          <p className="text-gray-600 mt-1">Manage feedback collection and view AI-driven recommendations</p>
        </div>
        <button
          onClick={() => setShowNewSurveyModal(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Survey
        </button>
      </div>

      {/* AI Recommendations Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">AI-Driven Recommendations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiRecommendations.map((rec) => (
              <div key={rec.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
                    {rec.type}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Trigger: {rec.trigger}</h3>
                <p className="text-gray-600 text-sm mb-3">{rec.suggestion}</p>
                <div className="flex items-center text-green-600 text-sm">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {rec.impact}
                </div>
                
                {/* Survey Template Preview */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">{rec.template.title}</h4>
                  <ul className="space-y-2">
                    {rec.template.questions.map((q, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2">•</span> {q}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex items-center text-indigo-600 text-sm font-medium">
                    <DollarSign className="w-4 h-4 mr-1" />
                    Offer: {rec.template.offer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Surveys Section */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <MessageSquare className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Active Surveys</h2>
          </div>
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedTab === 'active' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setSelectedTab('active')}
            >
              Active
            </button>
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedTab === 'completed' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setSelectedTab('completed')}
            >
              Completed
            </button>
          </div>
        </div>

        {/* Survey List */}
        <div className="space-y-4">
          {mockSurveys.map((survey) => (
            <div key={survey.id} className="border border-gray-200 rounded-lg p-6 hover:border-indigo-200 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{survey.type}</h3>
                  <p className="text-gray-600 text-sm mb-3">{survey.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {survey.responses} responses
                    </span>
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {survey.conversionRate}% conversion
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  {survey.status}
                </span>
              </div>
              
              {/* AI Insight */}
              <div className="mt-4 bg-indigo-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Brain className="w-4 h-4 text-indigo-600 mr-2" />
                  <span className="text-sm font-medium text-indigo-600">AI Insight</span>
                </div>
                <p className="text-sm text-indigo-700">{survey.aiSuggestion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">↑ 12%</span>
          </div>
          <h3 className="text-gray-600 text-sm">Response Rate</h3>
          <p className="text-2xl font-bold text-gray-900">68%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">↑ 8%</span>
          </div>
          <h3 className="text-gray-600 text-sm">Retention Impact</h3>
          <p className="text-2xl font-bold text-gray-900">$12.4k</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">↑ 5%</span>
          </div>
          <h3 className="text-gray-600 text-sm">Satisfaction Score</h3>
          <p className="text-2xl font-bold text-gray-900">4.8</p>
        </div>
      </div>
    </div>
  );
};

export default SurveysAndFeedback; 