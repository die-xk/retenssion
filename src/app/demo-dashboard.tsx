"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ArcElement } from 'chart.js'; // Import necessary components
import { format } from 'date-fns'; // Import date-fns
import { CheckCircle, User, TrendingUp, AlertCircle, Mail, ClipboardCheck } from 'lucide-react'; // Import icons


// Register the necessary components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend, ArcElement); // Register ArcElement

// Mock data for the dashboard
const mockData = {
  retentionTrends: {
    labels: [
      "2025-01-01", "2025-01-02", "2025-01-03", "2025-01-04", "2025-01-05",
      "2025-01-06", "2025-01-07", "2025-01-08", "2025-01-09", "2025-01-10",
      "2025-01-11", "2025-01-12", "2025-01-13", "2025-01-14", "2025-01-15",
      "2025-01-16", "2025-01-17", "2025-01-18", "2025-01-19", "2025-01-20",
      "2025-01-21", "2025-01-22", "2025-01-23", "2025-01-24", "2025-01-25",
      "2025-01-26", "2025-01-27", "2025-01-28", "2025-01-29", "2025-01-30"
    ],
    activeUsers: [
      120, 135, 128, 150, 160,
      155, 170, 165, 180, 175,
      160, 155, 150, 145, 160,
      165, 170, 180, 190, 185,
      180, 175, 170, 165, 160,
      155, 150, 145, 140, 135
    ],
    churnRate: [
      5, 4, 6, 5, 4,
      3, 4, 5, 6, 5,
      4, 3, 4, 5, 6,
      5, 4, 3, 4, 5,
      6, 5, 4, 3, 4,
      5, 6, 5, 4, 3
    ]
  },
  userSegments: [
    { segment: "High Engagement", count: 150 },
    { segment: "Medium Engagement", count: 75 },
    { segment: "Low Engagement", count: 20 }
  ],
  surveyResponses: [
    {
      question: "How satisfied are you with our product?",
      averageScore: 4.5,
      totalResponses: 200
    },
    {
      question: "What could we improve?",
      sentiment: "Positive",
      totalResponses: 150
    }
  ],
  alerts: [
    {
      alertId: 1,
      message: "User engagement dropped by 20% over the last 7 days.",
      timestamp: "2025-01-30T10:00:00Z"
    },
    {
      alertId: 2,
      message: "AI-generated survey triggered due to low activity.",
      timestamp: "2025-01-30T09:45:00Z"
    }
  ]
};

const DemoDashboard = () => {
  // Prepare data for the retention trends chart
  const retentionTrendsData = {
    labels: mockData.retentionTrends.labels,
    datasets: [
      {
        label: 'Active Users',
        data: mockData.retentionTrends.activeUsers,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Churn Rate',
        data: mockData.retentionTrends.churnRate,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
      },
    ],
  };

  // Prepare data for the user segmentation chart
  const userSegmentationData = {
    labels: mockData.userSegments.map(segment => segment.segment),
    datasets: [
      {
        data: mockData.userSegments.map(segment => segment.count),
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dashboard Overview</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Retention Trends Widget */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 text-indigo-600 mr-2" />
              Retention Trends
            </h3>
            <p className="text-gray-600 mb-4">This chart shows the daily active users and churn rates over the last 30 days, helping you identify trends in user engagement.</p>
            <Line data={retentionTrendsData} />
          </div>

          {/* User Segmentation Breakdown Widget */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="w-6 h-6 text-indigo-600 mr-2" />
              User Segmentation Breakdown
            </h3>
            <p className="text-gray-600 mb-4">Visualize the distribution of users across different engagement segments to tailor your marketing strategies.</p>
            <Pie data={userSegmentationData} />
          </div>
        </div>

        {/* Survey Response Summary */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8 transition-transform transform hover:scale-105">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 text-indigo-600 mr-2" />
            Survey Response Summary
          </h3>
          <p className="text-gray-600 mb-4">Review user feedback to understand satisfaction levels and areas for improvement.</p>
          <div className="space-y-4">
            {mockData.surveyResponses.map((response, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <h4 className="font-semibold text-[#1c1c1c]">{response.question}</h4>
                {response.averageScore ? (
                  <p className='text-[#1c1c1c]'>Average Score: <strong>{response.averageScore}/5</strong></p>
                ) : (
                  <p className='text-[#1c1c1c]'>Sentiment: <strong>{response.sentiment}</strong> from {response.totalResponses} responses</p>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* Alerts/Notifications Panel */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8 transition-transform transform hover:scale-105">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="w-6 h-6 text-indigo-600 mr-2" />
            Alerts/Notifications
          </h3>
          <p className="text-gray-600 mb-4">Stay informed about critical alerts that may impact user engagement and retention.</p>
          <ul className="space-y-2">
            {mockData.alerts.map(alert => (
              <li key={alert.alertId} className="text-gray-700">
                <strong>{alert.message}</strong> - {format(new Date(alert.timestamp), 'MMM dd, yyyy, hh:mm a')}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons Section */}
        {/* <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Take Action</h3>

          <p className="text-gray-600 mb-4">Choose an action to engage with your users:</p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <button className="flex-1 bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
              <Mail className="w-4 h-4 mr-2 inline" />
              Deploy Surveys
            </button>
            <button className="flex-1 bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition duration-200">
              <ClipboardCheck className="w-4 h-4 mr-2 inline" />
              Deploy Feedback
            </button>   

            <button className="flex-1 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              <ClipboardCheck className="w-4 h-4 mr-2 inline" />
              Shoot Out Mail
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default DemoDashboard; 