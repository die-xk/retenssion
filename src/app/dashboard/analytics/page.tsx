"use client"
import React, { useState } from 'react';
import {
  Users,
  TrendingUp,
  Clock,
  Activity,
  UserMinus,
  UserPlus,
  Filter,
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// Mock data generator functions
const generateTimeSeriesData = (days: number, baseValue: number, volatility: number) => {
  return Array.from({ length: days }, (_, i) => {
    return baseValue + Math.sin(i) * volatility + Math.random() * volatility;
  });
};

const UserAnalytics = () => {
  const [timeframe, setTimeframe] = useState('30d');
  
  // Mock data
  const analyticsData = {
    activeUsers: {
      current: 2840,
      change: 12.5,
      data: generateTimeSeriesData(30, 2500, 200)
    },
    retentionRate: {
      current: 85.2,
      change: -2.1,
      data: generateTimeSeriesData(30, 85, 5)
    },
    avgSessionTime: {
      current: 24.5,
      change: 8.3,
      data: generateTimeSeriesData(30, 20, 3)
    },
    churnRate: {
      current: 4.8,
      change: -1.2,
      data: generateTimeSeriesData(30, 5, 1)
    }
  };

  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  });

  // Chart configurations
  const userActivityChart = {
    labels: dates,
    datasets: [
      {
        label: 'Active Users',
        data: analyticsData.activeUsers.data,
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const retentionChart = {
    labels: dates,
    datasets: [
      {
        label: 'User Retention',
        data: analyticsData.retentionRate.data,
        backgroundColor: '#818CF8',
        borderRadius: 8,
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
        beginAtZero: false,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="p-8 bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">User Analytics</h1>
        <p className="text-gray-600 mt-1">Track user engagement and retention metrics</p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeframe === '7d' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'
            }`}
            onClick={() => setTimeframe('7d')}
          >
            7 days
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeframe === '30d' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'
            }`}
            onClick={() => setTimeframe('30d')}
          >
            30 days
          </button>
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              timeframe === '90d' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-600'
            }`}
            onClick={() => setTimeframe('90d')}
          >
            90 days
          </button>
        </div>
        <button className="flex items-center px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-600">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Active Users */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <span className={`flex items-center ${analyticsData.activeUsers.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {analyticsData.activeUsers.change}%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm">Active Users</h3>
          <p className="text-2xl font-bold text-gray-900">{analyticsData.activeUsers.current.toLocaleString()}</p>
        </div>

        {/* Retention Rate */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-green-600" />
            </div>
            <span className={`flex items-center ${analyticsData.retentionRate.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {analyticsData.retentionRate.change}%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm">Retention Rate</h3>
          <p className="text-2xl font-bold text-gray-900">{analyticsData.retentionRate.current}%</p>
        </div>

        {/* Avg Session Time */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <span className={`flex items-center ${analyticsData.avgSessionTime.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {analyticsData.avgSessionTime.change}%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm">Avg Session Time</h3>
          <p className="text-2xl font-bold text-gray-900">{analyticsData.avgSessionTime.current} min</p>
        </div>

        {/* Churn Rate */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <UserMinus className="w-6 h-6 text-red-600" />
            </div>
            <span className={`flex items-center ${analyticsData.churnRate.change >= 0 ? 'text-red-600' : 'text-green-600'}`}>
              <Activity className="w-4 h-4 mr-1" />
              {analyticsData.churnRate.change}%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm">Churn Rate</h3>
          <p className="text-2xl font-bold text-gray-900">{analyticsData.churnRate.current}%</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Activity Chart */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">User Activity</h2>
            </div>
            <div className="text-sm text-gray-500">Last 30 days</div>
          </div>
          <Line data={userActivityChart} options={chartOptions} />
        </div>

        {/* Retention Chart */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <UserPlus className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Retention Rate</h2>
            </div>
            <div className="text-sm text-gray-500">Last 30 days</div>
          </div>
          <Bar data={retentionChart} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics; 