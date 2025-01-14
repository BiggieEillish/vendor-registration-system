// context/UserContext.js
"use client";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [userStatus, setUserStatus] = useState("verified"); // default to 'unverified'

  return (
    <UserContext.Provider value={{ userStatus, setUserStatus }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    console.error("useUserContext must be used within a UserProvider");
  }
  return context;
}
