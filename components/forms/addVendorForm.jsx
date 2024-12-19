"use client";
import { useState } from 'react';

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
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-6xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-6 text-blue-400">New Vendor Registration</h2>

      {/* Registration Section */}
      <div>
        <button
          onClick={() => toggleSection('registration')}
          className="w-full text-left bg-gray-100 p-4 rounded-lg mb-2 text-lg font-semibold text-gray-700"
        >
          Registration ID {openSections.registration ? '-' : '+'}
        </button>
        {openSections.registration && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Registration ID 
              </label>
              <input
                type="text"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Requested By
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Approved By
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                required
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Doc Creation Date
              </label>
              <input
                type="date"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
          </form>
        )}
      </div>

      {/* Company Business Overview Section */}
      <div>
        <button
          onClick={() => toggleSection('businessOverview')}
          className="w-full text-left bg-gray-100 p-4 rounded-lg mb-2 text-lg font-semibold text-gray-700"
        >
          Company Business Overview {openSections.businessOverview ? '-' : '+'}
        </button>
        {openSections.businessOverview && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Vendor Name
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Vendor Selection Type
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-gray-700">
                General Details of Services
              </label>
              <textarea
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Date Established
              </label>
              <input
                type="date"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Business Type
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Website
              </label>
              <input
                type="url"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
          </form>
        )}
      </div>

      {/* Ownership Status Section */}
      <div>
        <button
          onClick={() => toggleSection('ownershipStatus')}
          className="w-full text-left bg-gray-100 p-4 rounded-lg mb-2 text-lg font-semibold text-gray-700"
        >
          Ownership Status {openSections.ownershipStatus ? '-' : '+'}
        </button>
        {openSections.ownershipStatus && (
          <form className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Bumiputera %
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Non Bumiputera %
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Foreign %
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
          </form>
        )}
      </div>

      {/*Contact Person Information Section */}
      <div>
        <button
          onClick={() => toggleSection('contactPerson')}
          className="w-full text-left bg-gray-100 p-4 rounded-lg mb-2 text-lg font-semibold text-gray-700"
        >
          Contact Person Information {openSections.contactPerson ? '-' : '+'}
        </button>
        {openSections.contactPerson && (
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Contact Person Primary
              </label>
              <input
                type="text"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Contact Phone Primary
              </label>
              <input
                type="tel"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Email Address Primary
              </label>
              <input
                type="email"
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
              />
            </div>
          </form>
        )}
      </div>

      {/* Supporting Document Section */}
      <div>
      <button
          onClick={() => toggleSection('supportingDocument')}
          className="w-full text-left bg-gray-100 p-4 rounded-lg mb-2 text-lg font-semibold text-gray-700"
        >
          Supporting Document {openSections.supportingDocument ? '-' : '+'}
        </button>
          {openSections.supportingDocument && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              {/* SSM Registration Number */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">SSM Registration Number <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
                />
              </div>

              {/* SSM Certificate Attachment */}
              <div className="mt-4">
                <label className="block mb-1 font-medium text-gray-700">SSM Certificate Attachment <span className="text-red-500">*</span></label>
                <input
                  type="file"
                  required
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
                />
              </div>
            </div>
          )}
        </div>

        {/* Procurement Section */}
        <div>
        <button
          onClick={() => toggleSection('procurementSection')}
          className="w-full text-left bg-gray-100 p-4 rounded-lg mb-2 text-lg font-semibold text-gray-700"
        >
          Procurement Section {openSections.procurementSection ? '-' : '+'}
        </button>
          {openSections.procurementSection && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              {/* Remarks */}
              <div>
                <label className="block mb-1 font-medium text-gray-700">Remarks</label>
                <textarea
                  rows={4}
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
                />
              </div>

              {/* Action Date */}
              <div className="mt-4">
                <label className="block mb-1 font-medium text-gray-700">Action Date</label>
                <input
                  type="date"
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 bg-white text-black"
                />
              </div>
            </div>
          )}
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
