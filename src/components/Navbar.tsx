"use client"

import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  Settings,
  ChevronDown,
  Bell,
  Building2,
  Target,
  UserCheck,
  MessageSquare,
  Heart,
  TrendingUp,
  Menu,
  X
} from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [analyticsOpen, setAnalyticsOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close other dropdowns when opening a new one
  const handleDropdownClick = (dropdown: 'analytics' | 'users') => {
    if (dropdown === 'analytics') {
      setAnalyticsOpen(!analyticsOpen);
      setUsersOpen(false);
    } else if (dropdown === 'users') {
      setUsersOpen(!usersOpen);
      setAnalyticsOpen(false);
    }
  };

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-button')) {
        setAnalyticsOpen(false);
        setUsersOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <a href='/' className="flex-shrink-0 flex items-center">
              <img src="/logo.svg" alt="Retenssion Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-900">retenssion</span>
            </a>


            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {/* Analytics Dropdown */}
              <div className="relative">
                <button
                  className="dropdown-button inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
                  onClick={() => handleDropdownClick('analytics')}
                >
                  <BarChart3 className="w-4 h-4 mr-1" />
                  How it Works
                  <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform ${analyticsOpen ? 'rotate-180' : ''}`} />
                </button>
                {analyticsOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="/retention-metrics" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                        <TrendingUp className="mr-3 h-4 w-4 text-gray-500 group-hover:text-indigo-600" />
                        Retention Metrics
                      </a>
                      <a href="/customer-health" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                        <Heart className="mr-3 h-4 w-4 text-gray-500 group-hover:text-indigo-600" />
                        Customer Health
                      </a>

                    </div>
                  </div>
                )}
              </div>

              {/* Users Dropdown */}
              {/* <div className="relative">
                <button
                  className="dropdown-button inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600"
                  onClick={() => handleDropdownClick('users')}
                >
                  <Users className="w-4 h-4 mr-1" />
                  What you get
                  <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform ${usersOpen ? 'rotate-180' : ''}`} />
                </button>
                {usersOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="/what-you-get" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                        <UserCheck className="mr-3 h-4 w-4 text-gray-500 group-hover:text-indigo-600" />
                        Active Users
                      </a>

                      <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                        <MessageSquare className="mr-3 h-4 w-4 text-gray-500 group-hover:text-indigo-600" />
                        Feedback
                      </a>
                    </div>
                  </div>
                )}
              </div> */}

              <a href="/pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600">
                <Building2 className="w-4 h-4 mr-1" />
                Pricing
              </a>

            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            {/* Notifications */}
            <button className="p-2 text-gray-500 hover:text-indigo-600">
              <Bell className="h-5 w-5" />
            </button>

            {/* Conditional Sign In / Dashboard Button */}
            <SignedIn>
              <>
                <a href="/dashboard" className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-200">
                  Dashboard
                </a>
                <div className="ml-4">
                  <UserButton />
                </div>
              </>
            </SignedIn>
            <SignedOut>
              <a href="/sign-in" className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition duration-200">
                Sign In
              </a>
            </SignedOut>

            {/* Mobile menu button */}
            <div className="md:hidden ml-3">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {/* Analytics Section */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => handleDropdownClick('analytics')}
              >
                <div className="flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </div>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${analyticsOpen ? 'rotate-180' : ''}`} />
              </button>
              {analyticsOpen && (
                <div className="pl-6 pr-4 py-2 space-y-1 bg-gray-50">
                  <a href="/retention-metrics" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">
                    <TrendingUp className="mr-3 h-4 w-4" />
                    Retention Metrics
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">
                    <Heart className="mr-3 h-4 w-4" />
                    Customer Health
                  </a>
                </div>
              )}
            </div>

            {/* Users Section */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => handleDropdownClick('users')}
              >
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Users
                </div>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${usersOpen ? 'rotate-180' : ''}`} />
              </button>
              {usersOpen && (
                <div className="pl-6 pr-4 py-2 space-y-1 bg-gray-50">
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">
                    <UserCheck className="mr-3 h-4 w-4" />
                    Active Users
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:text-indigo-600">
                    <MessageSquare className="mr-3 h-4 w-4" />
                    Feedback
                  </a>
                </div>
              )}
            </div>

            {/* Companies Link */}
            <a href="#" className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Building2 className="w-4 h-4 mr-2" />
              Companies
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;