import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import ProfileDropdown from './ProfileDropdown';
import SearchBox from './Searchbox';

export default function TopNav({ setSidebarOpen, currentPath }) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center border-b border-gray-200 px-4 shadow-sm bg-white">
      {/* Sidebar toggle button */}
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

      {/* Main content area */}
      <div className="flex flex-1 items-center gap-x-4 lg:gap-x-6">
        {/* Left side: Search bar */}
        {currentPath === '/adminDashboard' && <SearchBox />}

        {/* Right side */}
        <div className="ml-auto flex items-center gap-x-4 lg:gap-x-6">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-blue-400 hover:text-gray-500"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" className="size-6" />
          </button>
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
}
