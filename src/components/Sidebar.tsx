'use client'
import React, { useState } from 'react';
import { LayoutDashboard, Users, MessageSquare, Bell, Settings } from 'lucide-react';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed inset-0 flex z-40 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={toggleSidebar}></div>
      <div className="relative bg-white w-64 h-full shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleSidebar} className="text-gray-600">
            &times;
          </button>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center p-2 hover:bg-gray-100">
              <LayoutDashboard className="w-5 h-5 mr-2" />
              <a href="/dashboard" className="text-gray-700">Dashboard</a>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100">
              <Users className="w-5 h-5 mr-2" />
              <a href="/users" className="text-gray-700">Users</a>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100">
              <MessageSquare className="w-5 h-5 mr-2" />
              <a href="/messages" className="text-gray-700">Messages</a>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100">
              <Bell className="w-5 h-5 mr-2" />
              <a href="/notifications" className="text-gray-700">Notifications</a>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100">
              <Settings className="w-5 h-5 mr-2" />
              <a href="/settings" className="text-gray-700">Settings</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
