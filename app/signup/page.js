'use client';

import { useState } from 'react';
import SignupForm from '@/components/forms/SignupForm';
import Modal from '@/components/UI/Modal';
import LoginForm from '@/components/forms/LoginForm';

export default function UserSignupPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <SignupForm onLoginClick={() => setIsLoginModalOpen(true)} />
      </div>

      {isLoginModalOpen && (
        <Modal onClose={() => setIsLoginModalOpen(false)}>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Login</h2>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}
