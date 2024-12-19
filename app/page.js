"use client";

export default function LandingPage() {
  return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to My Landing Page
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Discover the best features of our product with this responsive design.
      </p>
      <div className="mt-8">
        <button className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </main>
  );
}
