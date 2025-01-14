"use client";

import TopNav from "@/components/UI/TopNav";
import { UsersIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { UserProvider, useUserContext } from "@/context/UserContext";

export default function UserDashboardLayout({ children }) {
  const { userStatus } = useUserContext();
  const pathname = usePathname();
  

  return (
    <UserProvider>
    <div className="flex h-screen bg-gray-900 text-gray-300">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col bg-gray-800 shadow-lg">
        <div className="flex items-center justify-center h-16 border-b border-gray-700">
          <img
            src="/panda.svg"
            alt="Panda Icon"
            className="h-8 w-8 mr-2"
          />
          <h1 className="text-lg font-semibold text-gray-200">Vendorify</h1>
        </div>
        <nav className="flex-1 px-4 mt-6 overflow-y-auto">
          <ul className="space-y-2">
            <li>
              <a
                href="/userDashboard"
                className="flex items-center gap-x-4 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-gray-200 rounded-md"
              >
                <UsersIcon className="h-5 w-5 text-gray-500" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/userDashboard/userVendorRegister"
                className="flex items-center gap-x-4 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-gray-200 rounded-md"
              >
                <UsersIcon className="h-5 w-5 text-gray-500" />
                Vendor Registration
              </a>
              <li>
              <a
                href="/userDashboard/addContract"
                className="flex items-center gap-x-4 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-700 hover:text-gray-200 rounded-md"
              >
                <UsersIcon className="h-5 w-5 text-gray-500" />
                Add Contract
              </a>
              </li>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navigation */}
        <div className="sticky top-0 z-20 shadow-md bg-gray-700">
          <TopNav />
        </div>

        {/* Page Content with Scrolling */}
        <main className="flex-1 overflow-y-auto p-8 bg-gray-700 mx-6 my-4 rounded-lg shadow">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md h-full overflow-y-auto">
            {userStatus === "unverified" && pathname !== "/userDashboard" && pathname !== "/userDashboard/userVendorRegister" ? (
              <p className="text-gray-400">You need to verify your account to access this section.</p>
            ) : (
              children
            )}
          </div>
        </main>
      </div>
    </div>
    </UserProvider>
  );
}
