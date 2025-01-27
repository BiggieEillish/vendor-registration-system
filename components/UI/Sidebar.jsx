"use client";

import { useRouter } from "next/navigation";
import { classNames } from "@/utils/helpers";
import SidebarDropdown from "./SidebarDropdown";
import {
  HomeIcon,
  UsersIcon,
  DocumentDuplicateIcon,
  EyeIcon,
  UserPlusIcon,
  UserGroupIcon,
  DocumentPlusIcon,
  ClipboardDocumentListIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ isUserDashboard }) {
  const router = useRouter();

  const navigation = isUserDashboard
    ? [
        {
          name: "Vendor Registration",
          href: "/vendorRegistration",
          icon: UsersIcon,
        },
      ]
    : [
        {
          name: "Dashboard",
          href: "/adminDashboard",
          icon: HomeIcon,
        },
        {
          name: "Vendor",
          children: [
            {
              name: "Add Vendor",
              href: "/adminDashboard/addVendor",
             
            },
            {
              name: "All Vendor Info",
              href: "/adminDashboard/allVendorInfo",
              
            },
          ],
          icon: UsersIcon,
        },
        {
          name: "Contracts",
          children: [
            {
              name: "Add Contract",
              href: "/adminDashboard/addContract",
              
            },
            {
              name: "All Contract Info",
              href: "/adminDashboard/allContractInfo",
              
            },
          ],
          icon: DocumentDuplicateIcon,
        },
        {
          name: "Application Review",
          href: "/adminDashboard/applicationReview",
          icon: EyeIcon,
        },
        {
          name: "Help and Support",
          href: "/adminDashboard/helpSupport",
          icon: InformationCircleIcon,
        }
      ];

  return (
    <div className="flex flex-col h-full border-r border-sky-100 bg-sky-50 shadow-md px-4 py-6">
      {/* Logo Section */}
      <div className="flex items-center mb-8 pl-2">
        <img
          alt="Logo"
          src="/panda.svg"
          className="h-10 w-auto mr-2"
        />
        <h1 className="text-lg font-bold text-gray-800">Vendorify</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col flex-grow">
        <ul role="list" className="space-y-4">
          {navigation.map((item) =>
            item.children ? (
              <SidebarDropdown key={item.name} title={item.name} icon={item.icon}>
                <ul className="pl-6 space-y-2">
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <a
                        href={child.href}
                        className={classNames(
                          router.pathname === child.href
                            ? "bg-indigo-100 text-indigo-600 font-bold"
                            : "text-black hover:bg-gray-100 hover:text-indigo-600 font-bold",
                          "flex items-center p-2 rounded-md text-sm font-bold"
                        )}
                      >
                        
                        {child.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </SidebarDropdown>
            ) : (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    router.pathname === item.href
                      ? "bg-indigo-100 text-indigo-600 font-bold"
                      : "text-black hover:bg-gray-100 hover:text-indigo-600 font-bold",
                    "flex items-center p-2 rounded-md font-bold"
                  )}
                >
                  <item.icon className="h-5 w-5 text-black mr-3 font-bold" />
                  {item.name}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
}
