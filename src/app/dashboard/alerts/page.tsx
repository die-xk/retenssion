"use client"
import React, { useState } from 'react';
import {
  Bell,
  AlertTriangle,
  Plus,
  Settings,
  ChevronRight,
  AlertCircle,
  Eye,
  BarChart,
  Users,
  DollarSign,
  Trash2,
  Edit
} from 'lucide-react';

// Mock data for existing alerts
const mockAlerts = [
  {
    id: 1,
    type: 'Churn Risk',
    metric: 'User Activity',
    condition: 'drops below',
    threshold: '10 actions/week',
    status: 'Active',
    triggered: '2 times today',
    priority: 'High',
    actions: ['Email notification', 'Slack alert']
  },
  {
    id: 2,
    type: 'Revenue Alert',
    metric: 'MRR',
    condition: 'decreases by',
    threshold: '5% or more',
    status: 'Active',
    triggered: 'Last triggered 2d ago',
    priority: 'Critical',
    actions: ['Email notification', 'SMS alert', 'Dashboard notification']
  }
];

// Alert templates for quick setup
const alertTemplates = [
  {
    id: 1,
    name: 'Churn Prevention',
    description: 'Monitor user engagement drops and activity patterns',
    metrics: ['User Activity', 'Login Frequency', 'Feature Usage'],
    icon: Users
  },
  {
    id: 2,
    name: 'Revenue Monitoring',
    description: 'Track revenue changes and payment failures',
    metrics: ['MRR', 'Payment Success Rate', 'Subscription Changes'],
    icon: DollarSign
  },
  {
    id: 3,
    name: 'User Experience',
    description: 'Monitor error rates and performance issues',
    metrics: ['Error Rate', 'Page Load Time', 'Session Duration'],
    icon: Eye
  }
];

const AlertsPage = () => {
  const [showNewAlertModal, setShowNewAlertModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  return (
    <div className="p-8 pt-16 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Alerts & Monitoring</h1>
          <p className="text-gray-600 mt-1">Set up custom alerts and monitoring rules</p>
        </div>
        <button
          onClick={() => setShowNewAlertModal(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          New Alert
        </button>
      </div>

      {/* Quick Setup Templates */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Setup Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alertTemplates.map((template) => {
            const Icon = template.icon;
            return (
              <div
                key={template.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer border-2 border-transparent hover:border-indigo-200"
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h3 className="ml-3 font-semibold text-gray-900">{template.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                <div className="space-y-2">
                  {template.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500">
                      <ChevronRight className="w-4 h-4 mr-1" />
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Active Alerts */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Bell className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">Active Alerts</h2>
          </div>
          <Settings className="w-5 h-5 text-gray-500 cursor-pointer hover:text-indigo-600" />
        </div>

        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div key={alert.id} className="border border-gray-200 rounded-lg p-6 hover:border-indigo-200 transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium 
                      ${alert.priority === 'High' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'}`}>
                      {alert.priority} Priority
                    </span>
                    <span className="ml-3 text-sm text-gray-500">{alert.triggered}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{alert.type}</h3>
                  <p className="text-gray-600 text-sm">
                    Alert when {alert.metric} {alert.condition} {alert.threshold}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-indigo-600">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {alert.actions.map((action, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                    {action}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <span className="text-orange-600 text-sm font-medium">Last 24h</span>
          </div>
          <h3 className="text-gray-600 text-sm">Active Alerts</h3>
          <p className="text-2xl font-bold text-gray-900">5</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">↓ 12%</span>
          </div>
          <h3 className="text-gray-600 text-sm">Alert Frequency</h3>
          <p className="text-2xl font-bold text-gray-900">-18%</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-indigo-600" />
            </div>
            <span className="text-indigo-600 text-sm font-medium">Real-time</span>
          </div>
          <h3 className="text-gray-600 text-sm">Monitored Metrics</h3>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>
      </div>

      {/* Alert Creation Modal would go here */}
      {showNewAlertModal && (
        // Modal implementation
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Modal content */}
        </div>
      )}
    </div>
  )
};

export default AlertsPage; 