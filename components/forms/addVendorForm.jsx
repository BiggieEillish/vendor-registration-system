"use client";
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function AddVendorForm() {
  const [openSections, setOpenSections] = useState({
    registration: true,
    businessOverview: true,
    ownershipStatus: true,
    registrationAddress: true,
    contactPerson: true,
    supportingDocument: true,
    procurementSection: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className=" p-6 w-full max-w-6xl mx-auto mt-8">
      

      {/* Registration Section */}
      <div className='shadow-md bg-slate-50 m-4 p-6 rounded-lg border border-slate-100'>
      <div className=" border border-blue-200 rounded-lg overflow-hidden">
      {/* Header / Title Bar */}
      <button
        onClick={() => toggleSection('registration')}
        className="
          flex 
          space-x-2
          items-center 
          w-full 
          bg-blue-100 
          p-4 
          text-lg 
          font-semibold 
          text-gray-700
        "
      >
        <span>REGISTRATION ID</span>
        <span>{openSections.registration ? (
          <ChevronUpIcon className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-blue-600" />
        )}</span>
      </button>

      {openSections.registration && (
        
        <div className="p-4 bg-white">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Registration ID */}
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Registration ID <span className="text-blue-500">*</span>
              </label>
              <input
                type="text"
                required
                className="text-gray-900 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </div>
            
            {/* Requested By */}
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Requested By
              </label>
              <input
                type="text"
                className="text-gray-900 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </div>
            
            {/* Approved By */}
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Approved By
              </label>
              <input
                type="text"
                className="text-gray-900 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </div>
            
            {/* Company Name */}
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Company Name <span className="text-blue-500">*</span>
              </label>
              <input
                type="text"
                required
                className="text-gray-900 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </div>
            
            {/* Document Creation Date */}
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Document Creation Date
              </label>
              <input
                type="date"
                className="text-gray-900 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
              />
            </div>
          </form>
        </div>
      )}
    </div>
    </div>

      {/* Company Business Overview Section */}
      <div className='m-4 p-6 shadow-md bg-slate-50 rounded-lg border border-slate-100'>
      <div className=" border border-blue-200 rounded-lg overflow-hidden">
      
      <button
        onClick={() => toggleSection('businessOverview')}
        className="flex space-x-2 items-center w-full bg-blue-100 p-4 text-lg font-semibold text-gray-700"
      >
      <span>Company Business Overview</span>
        {openSections.businessOverview ? (
          <ChevronUpIcon className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-blue-600" />
        )}
      </button>

        {openSections.businessOverview && (
          <div className="p-4 bg-white">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Vendor Name
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Vendor Selection Type
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-bold text-gray-700">
                General Details of Services
              </label>
              <textarea
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Date Established
              </label>
              <input
                type="date"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Business Type
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Website
              </label>
              <input
                type="url"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
          </form>
        </div>
        )}
      
      </div>
      </div>

      {/* Ownership Status Section */}
      <div className='m-4 p-6 shadow-md bg-slate-50 rounded-lg border border-slate-100'>
      <div className=" border border-blue-200 rounded-lg overflow-hidden">
      <div>
        <button
          onClick={() => toggleSection('ownershipStatus')}
          className="flex 
          space-x-2 
          items-center 
          w-full 
          bg-blue-100 
          p-4 
          text-lg 
          font-semibold 
          text-gray-700"
        >
          <span>Ownership Status</span>
          {openSections.ownershipStatus ? (
          <ChevronUpIcon className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-blue-600" />
        )}
        </button>
        {openSections.ownershipStatus && (
          <div className="p-4 bg-white">
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Bumiputera %
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Non Bumiputera %
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Foreign %
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
          </form>
        </div>
        )}
      </div>
      </div>
      </div>


      {/*Contact Person Information Section */}
      <div className='m-4 p-6 shadow-md bg-slate-50 rounded-lg border border-slate-100'>
      <div className=" border border-blue-200 rounded-lg overflow-hidden">
      <div>
        <button
          onClick={() => toggleSection('contactPerson')}
          className="flex 
          space-x-2 
          items-center 
          w-full 
          bg-blue-100 
          p-4 
          text-lg 
          font-semibold 
          text-gray-700"
        >
          <span>Contact Person Information</span>
           {openSections.contactPerson ? (
          <ChevronUpIcon className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-blue-600" />
        )}
        </button>
        {openSections.contactPerson && (
          <div className="p-4 bg-white">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Contact Person Primary
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Contact Phone Primary
              </label>
              <input
                type="tel"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-bold text-gray-700">
                Email Address Primary
              </label>
              <input
                type="email"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
          </form>
        </div>
        )}
      </div>
      </div>
      </div>

      {/* Supporting Document Section */}
      <div className='m-4 p-6 shadow-md bg-slate-50 rounded-lg border border-slate-100'>
      <div className=" border border-blue-200 rounded-lg overflow-hidden">
      <div>
      <button
          onClick={() => toggleSection('supportingDocument')}
          className="flex 
          space-x-2 
          items-center 
          w-full 
          bg-blue-100 
          p-4 
          text-lg 
          font-semibold 
          text-gray-700"
        >
          <span>Supporting Document</span>
           {openSections.supportingDocument ? (
          <ChevronUpIcon className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-blue-600" />
        )}
        </button>
          {openSections.supportingDocument && (
            <div className="p-4 bg-white">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SSM Registration Number */}
              <div>
                <label className="block mb-1 font-bold text-gray-700">SSM Registration Number <span className="text-blue-500">*</span></label>
                <input
                  type="text"
                  required
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
                />
              </div>

              {/* SSM Certificate Attachment */}
              <div className="mt-4">
                <label className="block mb-1 font-bold text-gray-700">SSM Certificate Attachment <span className="text-blue-500">*</span></label>
                <input
                  type="file"
                  required
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
                />
              </div>
              </form>
            </div>
          )}
        </div>
      </div>
      </div>

        {/* Procurement Section */}
        <div className='m-4 p-6 shadow-md bg-slate-50 rounded-lg border border-slate-100'>
        <div className=" border border-blue-200 rounded-lg overflow-hidden">
        
        <button
          onClick={() => toggleSection('procurementSection')}
          className="flex 
          space-x-2 
          items-center 
          w-full 
          bg-blue-100 
          p-4 
          text-lg 
          font-semibold 
          text-gray-700"
        >
          <span>Procurement Section</span>
           {openSections.procurementSection ? (
          <ChevronUpIcon className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-blue-600" />
        )}
        </button>
          {openSections.procurementSection && (
            <div className="p-4 bg-white">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Remarks */}
              <div>
                <label className="block mb-1 font-bold text-gray-700">Remarks</label>
                <textarea
                  rows={4}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
                />
              </div>

              {/* Action Date */}
              <div className="mt-4">
                <label className="block mb-1 font-bold text-gray-700">Action Date</label>
                <input
                  type="date"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
                />
              </div>
            </form>
            </div>
          )}
        </div>
        </div>

      {/* Submit and Reset Buttons */}
      <div className="md:col-span-2 mt-6 flex justify-end space-x-4">
        <button
          type="reset"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
