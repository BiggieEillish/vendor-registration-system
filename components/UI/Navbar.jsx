"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/UI/Modal";
import LoginForm from "@/components/forms/LoginForm";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo and Title */}        
      <Link href="/" className="flex items-center">
        <img src="/panda.svg" alt="Vendorify Logo" className="h-8 w-auto mr-2" />
        <span className="text-2xl font-bold text-gray-800">Vendorify</span>
      </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div
          className={`hidden lg:flex lg:items-center lg:space-x-8 lg:ml-auto`}
        >
          <Link
            href="/landingPage/vendorRegister"
            className="text-gray-800 hover:text-blue-600"
          >
            Vendor Registration
          </Link>
          <Link href="#" className="text-gray-800 hover:text-blue-600">
            Contact
          </Link>
        {session ? (
        <button onClick={() => signOut()} className="bg-red-500 text-white p-2 rounded">
          Sign Out
        </button>
      ) : ( 
          <div className="flex space-x-4">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Login
            </button>
            <Link
              href="/landingPage/userSignup"
              className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
            >
              Sign Up
            </Link>
          </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="space-y-4 px-4 py-4">
            <li>
              <Link
                href="/landingPage/vendorRegister"
                className="block text-gray-800 hover:text-blue-600"
              >
                Vendor Registration
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-gray-800 hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-gray-800 hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="block text-gray-800 hover:text-blue-600">
                Contact
              </Link>
            </li>
            {/* Mobile Login/Sign Up Buttons */}
            <li>
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Login
              </button>
            </li>
            <li>
              <Link
                href="/landingPage/userSignup"
                className="block w-full px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded hover:bg-gray-300 text-center"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Login</h2>
          <LoginForm />
        </Modal>
      )}
    </nav>
  );
}
