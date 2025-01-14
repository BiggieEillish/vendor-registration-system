"use client";

import { useUserContext } from "../../context/UserContext";

export default function UserDashboard() {
  const { userStatus, setUserStatus } = useUserContext();

  const handleToggle = () => {
    // Toggle between "verified" and "unverified"
    const newStatus = userStatus === "verified" ? "unverified" : "verified";
    setUserStatus(newStatus);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-300 mb-4">
        Welcome to the User Dashboard
      </h1>
      {userStatus === "verified" ? (
        <p>You have full access to all features.</p>
      ) : (
        <p>Complete your vendor registration to unlock all features.</p>
      )}
      <div className="mt-6">
        <label
          htmlFor="userStatusToggle"
          className="flex items-center cursor-pointer"
        >
          <span className="mr-3 text-gray-300">Toggle User Status</span>
          <div className="relative">
            <input
              id="userStatusToggle"
              type="checkbox"
              checked={userStatus === "verified"}
              onChange={handleToggle}
              className="sr-only"
            />
            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div
              className={`absolute w-6 h-6 bg-white rounded-full shadow transition-transform ${
                userStatus === "verified" ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
}
