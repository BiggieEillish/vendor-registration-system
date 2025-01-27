'use client';

import { useState } from 'react';
import Image from 'next/image';
import SignupForm from '@/components/forms/SignupForm';
import Modal from '@/components/UI/Modal';
import LoginForm from '@/components/forms/LoginForm';

export default function UserSignupPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row min-h-screen">
        
        {/* Left Column: Full-height image */}
        <div className="relative hidden md:block md:w-1/2">
          <Image
            src="/signupbg.jpg"  // <--- Your local image
            alt="Office environment"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Column: White background to match first picture’s style */}
        <div className="flex w-full md:w-1/2 items-center justify-center bg-white">
          <SignupForm onLoginClick={() => setIsLoginModalOpen(true)} />
        </div>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Login</h2>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}
