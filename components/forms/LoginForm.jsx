"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");

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
        <label>Email</label>
        <input name="email" type="email" required className="border p-2 w-full" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" required className="border p-2 w-full" />
      </div>
      <button type="submit" className="bg-blue-600 text-white p-2 rounded w-full">
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
