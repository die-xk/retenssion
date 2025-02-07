"use client"

import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, Disc, Check } from 'lucide-react';

const CommunityPage = () => {
  const communities = [
    {
      name: 'Facebook Group',
      description: 'Join discussions about retention strategies and connect with other SaaS founders',
      icon: <Facebook className="w-8 h-8" />,
      url: 'https://facebook.com/groups/retenssion',
      members: '2.5K'
    },
    {
      name: 'Instagram',
      description: 'Get daily tips and insights on improving customer retention',
      icon: <Instagram className="w-8 h-8" />,
      url: 'https://instagram.com/retenssion',
      members: '5K'
    },
    {
      name: 'LinkedIn',
      description: 'Stay updated with the latest trends in customer retention and SaaS growth',
      icon: <Linkedin className="w-8 h-8" />,
      url: 'https://linkedin.com/company/retenssion',
      members: '3.8K'
    },
    {
      name: 'Slack Community',
      description: 'Get real-time support and share experiences with other retention experts',
      icon: <MessageCircle className="w-8 h-8" />,
      url: 'https://join.slack.com/t/retenssion',
      members: '1.2K'
    },
    {
      name: 'Discord Server',
      description: 'Join live discussions and get exclusive access to retention workshops',
      icon: <Disc className="w-8 h-8" />,
      url: 'https://discord.gg/retenssion',
      members: '4.2K'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            Join Our Growing Community
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with over 16,000 SaaS founders and retention experts. Share experiences, 
            get advice, and stay updated with the latest retention strategies.
          </p>
          <div className="text-gray-800 mb-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Our Community Principles
            </h2>
            <p className="mb-6 text-center text-gray-600">
              We are committed to fostering a supportive environment based on the following core principles:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-lg">Share knowledge and learn from real experiences</span>
              </li>
              <li className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-lg">Get support when facing retention challenges</span>
              </li>
              <li className="flex items-center">
                <Check className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-lg">Network with other successful SaaS founders</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community) => (
            <div key={community.name} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-600 mb-6">
                {community.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {community.name}
              </h3>
              <p className="text-gray-600 mb-4 min-h-[60px]">
                {community.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {community.members} members
                </span>
                <a
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 