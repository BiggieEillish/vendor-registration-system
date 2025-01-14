"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState(''); // Initialize email state
  const [password, setPassword] = useState(''); // Initialize password state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result.ok) setError("Invalid credentials!");
    else window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-300"
          placeholder="Company email"
          required/>
      </div>
      <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-900">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-300"
        placeholder="Password"
        required/>
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
