'use client';
import './globals.css';
import Navbar from '@/components/UI/Navbar';
import { usePathname } from 'next/navigation';
import { SessionProvider } from "next-auth/react";

export default function LandingPageLayout({ children }) {
  const pathname = usePathname();

  // Exclude routes like /adminDashboard and /userDashboard
  const isExcludedRoute =
    pathname.startsWith('/adminDashboard') || pathname.startsWith('/userDashboard');

  return (
    <html lang="en">
      <head>
        <title>Landing Page</title>
      </head>
      <body className="bg-gray-100">
        {/* Wrap the app with SessionProvider */}
        <SessionProvider>
          {isExcludedRoute ? (
            // For excluded routes, render only children
            <>{children}</>
          ) : (
            <>
              <Navbar />
              <main>{children}</main>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
