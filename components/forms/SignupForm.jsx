'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SignupForm({ onLoginClick }) {
  const [formData, setFormData] = useState({
    companyName: '',
    ssmNumber: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    personInCharge: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
  };

  return (
    // 1) Removed the `grid` class from the parent div.
    <div className="bg-indigo-50 p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      {/* Panda Icon */}
      <div className="flex justify-center mb-4">
        <Image
          src="/panda.svg"
          alt="Panda Icon"
          width={50}
          height={50}
          priority
        />
      </div>

      {/* Title & Subtitle */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        Sign Up
      </h2>
      <p className="text-sm text-gray-600 text-center mb-6">
        Create an account to get started
      </p>

      {/* 
        3) Removed the two-column grid (no more `grid grid-cols-1 md:grid-cols-2`) 
           and replaced it with a single-column layout. 
        4) Using `space-y-4` for vertical spacing between form fields.
      */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Company Name */}
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 
                       rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* SSM Number */}
        <div>
          <label
            htmlFor="ssmNumber"
            className="block text-sm font-medium text-gray-700"
          >
            SSM Number
          </label>
          <input
            id="ssmNumber"
            name="ssmNumber"
            type="text"
            value={formData.ssmNumber}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 
                       rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 
                       rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 
                       rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Username */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 
                       rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Person In Charge */}
        <div>
          <label
            htmlFor="personInCharge"
            className="block text-sm font-medium text-gray-700"
          >
            Person In Charge
          </label>
          <input
            id="personInCharge"
            name="personInCharge"
            type="text"
            value={formData.personInCharge}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 
                       rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 
                       rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 
                       rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white 
                     rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>

        {/* Already have an account? */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onLoginClick}
            className="text-blue-600 hover:underline"
          >
            Log in
          </button>
        </p>
      </form>
    </div>
  );
}
