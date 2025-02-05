"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  MessageSquare,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: LayoutDashboard,
      description: 'Main analytics overview'
    },
    {
      path: '/dashboard/blog/create',
      name: 'Blog',
      icon: LayoutDashboard,
      description: 'Main analytics overview'
    },

    {
      path: '/dashboard/analytics',
      name: 'User Analytics',
      icon: Users,
      description: 'Engagement trends'
    },
    {
      path: '/dashboard/surveys',
      name: 'Surveys & Feedback',
      icon: MessageSquare,
      description: 'Manage AI surveys'
    },
    {
      path: '/dashboard/alerts',
      name: 'Alerts',
      icon: Bell,
      description: 'System recommendations'
    },
    {
      path: '/dashboard/settings',
      name: 'Settings',
      icon: Settings,
      description: 'Configure system'
    },
  ];

  return (
    <div 
      className={`
        fixed left-0 top-0 h-screen bg-white border-r border-gray-200
        transition-all duration-300 ease-in-out z-20 pt-20
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}
    >
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-24 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50"
      >
        {isCollapsed ? 
          <ChevronRight className="w-4 h-4 text-gray-600" /> : 
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        }
      </button>

      {/* Navigation Menu */}
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                flex items-center py-3 px-4 rounded-lg transition-all duration-200
                ${isActive 
                  ? 'bg-indigo-50 text-indigo-600' 
                  : 'text-gray-600 hover:bg-gray-50'
                }
                ${isCollapsed ? 'justify-center' : ''}
              `}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'text-indigo-600' : 'text-gray-500'}`} />
              
              {!isCollapsed && (
                <div className="ml-3">
                  <div className={`font-medium ${isActive ? 'text-indigo-600' : 'text-gray-900'}`}>
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {item.description}
                  </div>
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section - Pro Badge */}
      {!isCollapsed && (
        <div className="absolute bottom-8 left-4 right-4">
          <div className="bg-indigo-50 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">PRO</span>
              </div>
              <div>
                <div className="text-sm font-medium text-indigo-600">Pro Features</div>
                <div className="text-xs text-indigo-500">Access all features</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar; 