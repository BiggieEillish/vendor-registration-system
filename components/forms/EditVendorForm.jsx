import { useState, useEffect } from 'react';

export default function EditVendorForm({ customer, onClose }) {
  // Initializing formData using customer data or default empty values
  const [formData, setFormData] = useState({
    name: customer?.name || '',
    type: customer?.type || '',
    status: customer?.status || '',
    countryOfRegistration: customer?.countryOfRegistration || '',
    companyRegistrationNumber: customer?.companyRegistrationNumber || '',
    stockSymbol: customer?.stockSymbol || '',
    companyWebsite: customer?.companyWebsite || '',
    dealsWith: customer?.dealsWith || '',
    internalRepresentative: customer?.internalRepresentative || '',
    relationshipSince: customer?.relationshipSince || '',
    mainContactPerson: customer?.mainContactPerson || '',
    officialEmail: customer?.officialEmail || '',
    secondaryEmail: customer?.secondaryEmail || '',
    mobileNumber: customer?.mobileNumber || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to save customer data here
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg overflow-auto" style={{ maxHeight: '90vh' }}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-6 text-black">Edit Customer</h2>

            {/* Customer Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-semibold mb-2">Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Individual">Individual</option>
                  <option value="Business">Business</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-semibold mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                >
                  <option value="Live">Live</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Country of Registration */}
              <div>
                <label className="block text-sm font-semibold mb-2">Country of Registration</label>
                <input
                  type="text"
                  name="countryOfRegistration"
                  value={formData.countryOfRegistration}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Company Registration Number */}
              <div>
                <label className="block text-sm font-semibold mb-2">Company Registration Number</label>
                <input
                  type="text"
                  name="companyRegistrationNumber"
                  value={formData.companyRegistrationNumber}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Stock Symbol */}
              <div>
                <label className="block text-sm font-semibold mb-2">Stock Symbol</label>
                <input
                  type="text"
                  name="stockSymbol"
                  value={formData.stockSymbol}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Company Website */}
              <div>
                <label className="block text-sm font-semibold mb-2">Company Website</label>
                <input
                  type="text"
                  name="companyWebsite"
                  value={formData.companyWebsite}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Deals With */}
              <div>
                <label className="block text-sm font-semibold mb-2">Deals With</label>
                <input
                  type="text"
                  name="dealsWith"
                  value={formData.dealsWith}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Internal Representative */}
              <div>
                <label className="block text-sm font-semibold mb-2">Internal Representative</label>
                <input
                  type="text"
                  name="internalRepresentative"
                  value={formData.internalRepresentative}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Relationship Since */}
              <div>
                <label className="block text-sm font-semibold mb-2">Relationship Since</label>
                <input
                  type="date"
                  name="relationshipSince"
                  value={formData.relationshipSince}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Main Contact Person */}
              <div>
                <label className="block text-sm font-semibold mb-2">Main Contact Person</label>
                <input
                  type="text"
                  name="mainContactPerson"
                  value={formData.mainContactPerson}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Official Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Official Email</label>
                <input
                  type="email"
                  name="officialEmail"
                  value={formData.officialEmail}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>

              {/* Secondary Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">Secondary Email</label>
                <input
                  type="email"
                  name="secondaryEmail"
                  value={formData.secondaryEmail}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-semibold mb-2">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
