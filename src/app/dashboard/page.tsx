"use client"
import React from 'react';
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  UserPlus
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Dashboard = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Users',
        data: [1200, 1900, 1800, 2400, 2800, 3200],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        fill: true,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-24 pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Track your key metrics and user engagement</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* MRR */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="flex items-center text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                12%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">Monthly Revenue</h3>
            <p className="text-2xl font-bold text-gray-900">$48,560</p>
          </div>

          {/* Active Users */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <span className="flex items-center text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                8%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">Active Users</h3>
            <p className="text-2xl font-bold text-gray-900">2,420</p>
          </div>

          {/* Churn Rate */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-red-600" />
              </div>
              <span className="flex items-center text-red-600">
                <ArrowDownRight className="w-4 h-4 mr-1" />
                2.1%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">Churn Rate</h3>
            <p className="text-2xl font-bold text-gray-900">4.5%</p>
          </div>

          {/* New Users */}
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <UserPlus className="w-6 h-6 text-green-600" />
              </div>
              <span className="flex items-center text-green-600">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                18%
              </span>
            </div>
            <h3 className="text-gray-600 text-sm">New Users</h3>
            <p className="text-2xl font-bold text-gray-900">482</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Growth Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-in-right">
            <div className="flex items-center space-x-2 mb-6">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">User Growth</h2>
            </div>
            <Line data={chartData} options={chartOptions} />
          </div>

          {/* Revenue Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-in-right">
            <div className="flex items-center space-x-2 mb-6">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Revenue Trends</h2>
            </div>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
