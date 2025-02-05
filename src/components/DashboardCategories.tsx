import React, { useState } from 'react';
import { LayoutDashboard, Users, MessageSquare, Bell, Settings } from 'lucide-react';

const categories = [
    {
      title: 'Dashboard',
      image: '/images/1.png', // Replace with the actual image path
      description: 'Overview of key metrics and performance indicators.',
      icon: <LayoutDashboard className="w-5 h-5 mr-2" />,
    },
    {
      title: 'User Analytics',
      image: '/images/2.png', // Replace with the actual image path
      description: 'Insights into user behavior and engagement trends.',
      icon: <Users className="w-5 h-5 mr-2" />,
    },
    {
      title: 'Surveys & Feedback',
      image: '/images/3.png', // Replace with the actual image path
      description: 'Collect and analyze user feedback to improve services.',
      icon: <MessageSquare className="w-5 h-5 mr-2" />,
    },
    {
      title: 'Alerts',
      image: '/images/5.png', // Replace with the actual image path
      description: 'Real-time notifications for critical events.',
      icon: <Bell className="w-5 h-5 mr-2" />,
    },
    {
      title: 'Settings',
      image: '/images/8.png', // Replace with the actual image path
      description: 'Manage your account and application settings.',
      icon: <Settings className="w-5 h-5 mr-2" />,
    },
  ];

const DashboardCategories = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Explore Our Dashboard Categories</h2>
        <div className="flex items-center justify-center mb-4">
          <button
            onClick={handlePrev}
            className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 mr-2"
            aria-label="Previous Category"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
            aria-label="Next Category"
          >
            &gt;
          </button>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out ${
                  index === selectedIndex ? 'block' : 'hidden'
                }`}
              >
                <img src={category.image} alt={category.title} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
                  <p className="text-gray-600 mt-2">{category.description}</p>
                  <p className="text-sm text-gray-500 mt-4">Join our waitlist for early access!</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCategories; 