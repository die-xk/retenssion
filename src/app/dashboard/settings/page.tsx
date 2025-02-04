"use client"
import React, { useState, useEffect } from 'react';
import {
  Settings,
  Code,
  CreditCard,
  Bell,
  Users,
  Lock,
  Globe,
  Zap,
  CheckCircle,
  Copy,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import TeamManagement from '@/components/TeamManagement';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('integrations');
  const [copied, setCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Mock user data
  const userData = {
    plan: 'Free',
    usageLimit: 1000,
    currentUsage: 850,
    trackingPages: 1,
    integrations: ['Website Tracking'],
    billingCycle: 'Monthly',
    nextBilling: '2024-04-01'
  };

  const trackingScript = `
<script>
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'start':
    new Date().getTime(),event:'retention-init'});
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;j.src=
    'https://cdn.retenssion.com/track.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','retData','YOUR-SITE-ID');
</script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(trackingScript);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: [
        '1,000 monthly tracked users',
        '1 website/app tracking',
        'Basic analytics',
        'Email support'
      ],
      current: userData.plan === 'Free'
    },
    {
      name: 'Pro',
      price: '$49/mo',
      features: [
        '10,000 monthly tracked users',
        'Unlimited websites/apps',
        'Advanced analytics',
        'Priority support',
        'Custom surveys',
        'API access'
      ],
      current: userData.plan === 'Pro'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited tracked users',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom features',
        'On-premise option'
      ],
      current: userData.plan === 'Enterprise'
    }
  ];

  // Add this effect to show the popup after 45 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 45000); // 45000 milliseconds = 45 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className="p-8 pt-16 bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account, integrations, and billing</p>
      </div>

      {/* Settings Navigation */}
      <div className="flex space-x-4 mb-8">
        {[
          { id: 'integrations', icon: Code, label: 'Integrations' },
          { id: 'billing', icon: CreditCard, label: 'Billing' },
          { id: 'notifications', icon: Bell, label: 'Notifications' },
          { id: 'team', icon: Users, label: 'Team' },
          { id: 'security', icon: Lock, label: 'Security' }
        ].map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${activeTab === id 
                ? 'bg-indigo-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          >
            <Icon className="w-4 h-4 mr-2" />
            {label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Usage Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Usage Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tracked Users</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">{userData.currentUsage}</span>
                <span className="text-sm text-gray-500">/ {userData.usageLimit}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-indigo-600 rounded-full h-2" 
                  style={{ width: `${(userData.currentUsage / userData.usageLimit) * 100}%` }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Tracking Pages</p>
              <p className="text-2xl font-bold text-gray-900">{userData.trackingPages}</p>
              <p className="text-sm text-gray-500">Free tier limit: 1 page</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Plan</p>
              <p className="text-2xl font-bold text-gray-900">{userData.plan}</p>
              <p className="text-sm text-gray-500">Next billing: {userData.nextBilling}</p>
            </div>
          </div>
        </div>

        {/* Integration Script */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Tracking Script</h2>
            <button
              onClick={copyToClipboard}
              className="flex items-center px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200"
            >
              <Copy className="w-4 h-4 mr-1" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
            {trackingScript}
          </div>
          <p className="mt-4 text-sm text-gray-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1 text-orange-500" />
            Add this script to your website's &lt;head&gt; tag
          </p>
        </div>

        {/* Available Plans */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Plans</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`rounded-xl p-6 ${
                  plan.current 
                    ? 'border-2 border-indigo-600 bg-indigo-50' 
                    : 'border border-gray-200'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-2xl font-bold text-indigo-600 mb-4">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-6 px-4 py-2 rounded-lg text-sm font-medium
                    ${plan.current
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                    }`}
                >
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Available Integrations */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Integrations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Website Tracking', icon: Globe, available: true },
              { name: 'Slack Notifications', icon: Bell, available: false },
              { name: 'API Access', icon: Code, available: false },
              { name: 'Custom Webhooks', icon: Zap, available: false }
            ].map((integration) => (
              <div 
                key={integration.name}
                className={`flex items-center justify-between p-4 rounded-lg border
                  ${integration.available 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                  }`}
              >
                <div className="flex items-center">
                  <integration.icon className={`w-5 h-5 mr-3 ${
                    integration.available ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  <span className={integration.available ? 'text-gray-900' : 'text-gray-500'}>
                    {integration.name}
                  </span>
                </div>
                {!integration.available && (
                  <span className="text-xs text-gray-500">Pro Plan</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {activeTab === 'team' && (
          <TeamManagement />
        )}
      </div>

      {/* Discount Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-gray-900">Special Offer!</h2>
            <p className="mt-2 text-gray-600">Get 20% off for the first 3 months!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage; 