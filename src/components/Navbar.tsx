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
  X,
  Play,
  Map,
  BarChart,
  AlertTriangle,
  MessageCircle
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

  // Mobile dropdown toggle
  const handleMobileDropdownClick = (dropdown: 'analytics' | 'users') => {
    if (dropdown === 'analytics') {
      setAnalyticsOpen(!analyticsOpen);
      setUsersOpen(false);
    } else if (dropdown === 'users') {
      setUsersOpen(!usersOpen);
      setAnalyticsOpen(false);
    }
  };

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

            {/* Navigation Links */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600">
                Products
              </a>

              <a href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600">
                What you get
              </a>
              <a href="/pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600">
                Pricing
              </a>

              <SignedIn>
                <a href="/dashboard" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-indigo-600">
                  Dashboard
                </a>
              </SignedIn>
              
              
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center">

            {/* Conditional Sign In / Dashboard Button */}
            <SignedIn>
              <UserButton />
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
            <a href="/product-1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Products
            </a>
            <a href="/users" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              What you get
            </a>
            <a href="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
              Pricing
            </a>
            <SignedIn>
              <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                Dashboard
              </a>
            </SignedIn>
                       
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;