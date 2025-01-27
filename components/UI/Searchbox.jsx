import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid';

export default function SearchBox() {
  return (
    <div className="flex items-center w-full max-w-2xl space-x-2 py-3">
      {/* The pill-shaped container */}
      <div className="flex flex-1 items-center rounded-full border border-gray-300 bg-white shadow-sm">
        {/* Left icon */}
        <div className="pl-3 text-gray-400">
          <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        </div>

        {/* Text input */}
        <input
          type="search"
          placeholder="Search"
          className="
            flex-1
            bg-transparent
            py-2
            px-2
            text-sm
            text-gray-900
            placeholder-gray-500
            border-none
            focus:outline-none
            focus:ring-0
          "
        />

        {/* “X” button on the right within the pill */}
        <button
          type="button"
          className="pr-3 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* The separate blue circular ‘Search’ button */}
      <button
        type="button"
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-blue-500
          hover:bg-blue-600
          focus:outline-none
        "
      >
        <MagnifyingGlassIcon className="h-4 w-4 text-white" aria-hidden="true" />
      </button>
    </div>
  );
}
