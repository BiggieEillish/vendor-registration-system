'use client';

import { useState } from 'react';

export default function AddContractForm() {
  const [formData, setFormData] = useState({
    contractType: 'New',
    vendor: '',
    contractNumber: 'CNTR_1',
    contractTitle: '',
    contractCategory: '',
    contractProducts: '',
    contractAmount: 'RM',
    status: '',
    startDate: '',
    endDate: '',
    description: '',
    contractFiles: null,
    notifyExpiry: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      contractFiles: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="p-4 sm:p-6 border border-gray-300 rounded-lg bg-white shadow-md max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-black">Add Contract</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Contract Type */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Contract</label>
              <div className="flex items-center space-x-4">
                <label className="flex items-center text-gray-500">
                  <input
                    type="radio"
                    name="contractType"
                    value="New"
                    checked={formData.contractType === 'New'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  New
                </label>
                <label className="flex items-center text-gray-500">
                  <input
                    type="radio"
                    name="contractType"
                    value="Renewal"
                    checked={formData.contractType === 'Renewal'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Renewal
                </label>
              </div>
            </div>

            {/* Vendor */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Vendor</label>
              <select
                name="vendor"
                value={formData.vendor}
                onChange={handleChange}
                className="text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="">Select Vendor</option>
                <option value="Vendor 1">Vendor 1</option>
                <option value="Vendor 2">Vendor 2</option>
              </select>
            </div>

            {/* Contract Number */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Contract Number</label>
              <input
                type="text"
                name="contractNumber"
                value={formData.contractNumber}
                onChange={handleChange}
                className="text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                readOnly
              />
            </div>

            {/* Contract Title */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Contract Title</label>
              <input
                type="text"
                name="contractTitle"
                value={formData.contractTitle}
                onChange={handleChange}
                className="text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            {/* Contract Category */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Category</label>
              <select
                name="contractCategory"
                value={formData.contractCategory}
                onChange={handleChange}
                className="text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              >
                <option value="">Select Category</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
              </select>
            </div>

            {/* Contract Products */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Product(s)</label>
              <input
                type="text"
                name="contractProducts"
                value={formData.contractProducts}
                onChange={handleChange}
                className="text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            {/* Contract Amount */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Contract Amount</label>
              <input
                type="text"
                name="contractAmount"
                value={formData.contractAmount}
                onChange={handleChange}
                className="text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className=" text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            {/* Contract Files */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Contract Files</label>
              <input
                type="file"
                name="contractFiles"
                onChange={handleFileChange}
                className=" text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>

            {/* Notify Contract Expiry */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="notifyExpiry"
                checked={formData.notifyExpiry}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm font-semibold text-black">Notify Contract Expiry</label>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-black">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="text-gray-500 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="reset"
              className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
