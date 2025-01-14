import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function SearchBox() {
  return (
    <form action="#" method="GET" className="relative flex flex-1 items-center pl-12">
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <MagnifyingGlassIcon
        aria-hidden="true"
        className="absolute left-3 h-5 w-5 text-gray-400"
      />
      <input
        id="search-field"
        name="search"
        type="search"
        placeholder="Search..."
        className="w-full rounded-full border border-gray-300 bg-gray-100 py-2 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
    </form>
  );
}
