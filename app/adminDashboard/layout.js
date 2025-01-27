"use client";

import MobileSidebar from '@/components/UI/MobileSidebar';
import Sidebar from '@/components/UI/Sidebar';
import TopNav from '@/components/UI/TopNav';
import '@/globals.css';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  return (
    <html lang="en">
      <head>
        <title>Admin Dashboard</title>
      </head>
      <body className="h-full bg-white">
        <>
          {/* Mobile Sidebar */}
          <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          
          {/* Desktop Sidebar */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <Sidebar className="bg-gray-900" />
          </div>
          
          {/* Main Content Area */}
          <div className="lg:pl-72">
            {/* Top Navigation */}
            <TopNav setSidebarOpen={setSidebarOpen} currentPath={pathname} className="text-black" />
            
            {/* Page Content */}
            <main className="py-10">
              <div className="px-4 sm:px-6 lg:px-8">{children}</div>
            </main>
          </div>
        </>
      </body>
    </html>
  );
}
