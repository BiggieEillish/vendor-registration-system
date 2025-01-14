"use client"; 

import { useUserContext } from "../../context/UserContext";

export default function UserSidebar() {
  const { userStatus } = useUserContext();

  const navigation = userStatus === "verified"
    ? [
        { name: "Dashboard", href: "/userDashboard" },
        { name: "Vendor Registration", href: "/userDashboard/userVendorRegister" },
        { name: "Contracts", href: "/userDashboard/addContract" },
      ]
    : [
        { name: "Dashboard", href: "/userDashboard" },
        { name: "Vendor Registration", href: "/userDashboard/userVendorRegister" },
        { name: "Contracts", href: "/userDashboard/addContract" },
      ];

  return (
    <nav>
      <ul>
        {navigation.map((item) => (
          <li key={item.name}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}