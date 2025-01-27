'use client';

import { useState } from 'react';
import { BsPencil, BsTrash } from 'react-icons/bs';
import { FiSearch, FiX, FiCalendar, FiChevronDown } from 'react-icons/fi'


// Example repeating data from the first screenshot
const VendorsData = [
  {
    id: 1,
    registrationId: 'REG_001',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 2,
    registrationId: 'REG_002',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 3,
    registrationId: 'REG_003',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 4,
    registrationId: 'REG_004',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 5,
    registrationId: 'REG_005',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 6,
    registrationId: 'REG_006',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 7,
    registrationId: 'REG_007',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 8,
    registrationId: 'REG_008',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 9,
    registrationId: 'REG_009',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
  {
    id: 10,
    registrationId: 'REG_010',
    companyName: 'Tech Innovations PVT LTD',
    vendorName: 'ABC Vendor',
    contactPersonPrimary: 'Mike Tim',
    ssmRegistrationNumber: 'SSM123456',
  },
];

export default function VendorTable({ onEdit, onDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Example total pages = 3
  const totalPages = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // In real app, fetch new data or re-filter
  };

  // Simple filtering by company name; adjust as needed
  const filteredVendors = VendorsData.filter((vendor) =>
    vendor.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center space-x-2 space justify-between">

{/* Rounded Search Input w/ leading search icon & trailing clear (X) */}
<div className="relative flex-grow max-w">
  <span className="absolute inset-y-0 left-3 flex items-center">
    <FiSearch className="text-gray-400" />
  </span>
  <input
    type="text"
    placeholder="    Search"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300
               focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  {/* ‘X’ to clear the input if there's a search term */}
  {searchTerm && (
    <button
      onClick={clearSearch}
      className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
    >
      <FiX />
    </button>
  )}
</div>

{/* Round Search Button */}
<button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700">
  <FiSearch />
</button>

{/* "Set Date" Button (with calendar icon) */}
<button className="flex items-center space-x-2 border border-blue-600 text-blue-600 
                   px-4 py-2 rounded-full hover:bg-blue-50">
  <FiCalendar />
  <span>Set Date</span>
</button>

{/* "All" Button (with dropdown icon) */}
<button className=" flex items-center space-x-1 border border-blue-600 text-blue-600 
                   px-4 py-2 rounded-full hover:bg-blue-50">
  <span>All</span>
  <FiChevronDown className="w-4 h-4" />
</button>
</div>

      {/* Table Container */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="h-96 overflow-y-auto overflow-x-auto">
          <table className=" min-w-full text-left border-collapse">
            <thead >
              <tr className="rounded-lg bg-blue-100 border-b border-blue-200 ">
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Registration ID
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Company Name
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Vendor Name
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Contact Person
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  SSM Registration No.
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-700 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.length > 0 ? (
                filteredVendors.map((vendor, index) => (
                  <tr
                    key={vendor.id}
                    className={`border-b last:border-0 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="py-4 px-4 text-sm text-gray-800">
                      {vendor.registrationId}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {vendor.companyName}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {vendor.vendorName}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {vendor.contactPersonPrimary}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {vendor.ssmRegistrationNumber}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600 space-x-2">
                      {/* Edit */}
                      <button
                        onClick={() => onEdit(vendor)}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <BsPencil className="text-blue-600" />
                      </button>
                      {/* Delete */}
                      <button
                        onClick={() => onDelete(vendor)}
                        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                      >
                        <BsTrash className="text-blue-500" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-4 px-4 text-center text-sm text-gray-500"
                  >
                    No vendors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        {/* Page Numbers */}
        <div className="space-x-2">
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded-full ${
                  page === currentPage
                    ? 'bg-blue-800 text-white hover:text-gray-200'
                    : 'bg-white text-gray-600 border border-black hover:text-white hover:bg-blue-600'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
        {/* Previous/Next Buttons */}
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-full mr-2 ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-full ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
