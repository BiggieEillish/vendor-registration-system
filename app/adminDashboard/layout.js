"use client";

import MobileSidebar from '@/components/UI/MobileSidebar';
import Sidebar from '@/components/UI/Sidebar';
import TopNav from '@/components/UI/TopNav';
import '@/globals.css';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Admin Dashboard</title>
      </head>
      <body className="h-full bg-gray-100">
          <>
            <MobileSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
              <Sidebar className="bg-grey-900" />
            </div>
            <div className="lg:pl-72">
              <TopNav setSidebarOpen={setSidebarOpen} className= "text-black" />
              <main className="py-10">
                <div className="px-4 sm:px-6 lg:px-8">{children}</div>
              </main>
            </div>
          </>
      </body>
    </html>
  );
}
