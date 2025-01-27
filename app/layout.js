'use client';
import './globals.css';
import Navbar from '@/components/UI/Navbar';
import { usePathname } from 'next/navigation';
import { UserProvider } from "@/context/UserContext";
import { SessionProvider } from "next-auth/react";

export default function LandingPageLayout({ children }) {
  const pathname = usePathname();

  // Exclude routes like /adminDashboard and /userDashboard
  const isExcludedRoute =
    pathname.startsWith('/adminDashboard') || pathname.startsWith('/userDashboard');

  return (
    <UserProvider>
      <SessionProvider>
    <html lang="en">
      <head>
        <title>Landing Page</title>
      </head>
      <body className="bg-white">
        
          {isExcludedRoute ? (
            // For excluded routes, render only children
            <>{children}</>
          ) : (
            <>
              <Navbar className= "bg-gray-100"/>
              <main>{children}</main>
            </>
          )}
      </body>
    </html>
    </SessionProvider>
    </UserProvider>
  );
}
