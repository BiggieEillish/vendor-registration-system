"use client";

import { useRouter } from "next/navigation";
import { classNames } from "@/utils/helpers";
import SidebarDropdown from "./SidebarDropdown";
import { HomeIcon, UsersIcon, DocumentDuplicateIcon, IdentificationIcon, UserPlusIcon, UserGroupIcon, DocumentPlusIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

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
            { name: "Add Vendor", href: "/adminDashboard/addVendor", 
              icon: UserPlusIcon
            },
            { name: "All Vendor Info", href: "/adminDashboard/allVendorInfo",
              icon: UserGroupIcon
             },
          ],
          icon: UsersIcon,
        },
        {
          name: "Contracts",
          children: [
            { name: "Add Contract", href: "/adminDashboard/addContract",
              icon:DocumentPlusIcon
             },
            { name: "All Contract Info", href: "/adminDashboard/allContractInfo",
              icon: ClipboardDocumentListIcon
             },
          ],
          icon: DocumentDuplicateIcon,
        },
        {
          name: "Application Review",
          href: "/adminDashboard/applicationReview",
          icon: IdentificationIcon,
        },
      ];

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-custom1 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          {navigation.map((item) =>
            item.children ? (
              <SidebarDropdown key={item.name} title={item.name} icon={item.icon}>
                <ul role="list" className="flex flex-col gap-y-2">
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <a
                        href={child.href}
                        className={classNames(
                          router.pathname === child.href
                            ? "text-indigo-600"
                            : "text-gray-700 hover:text-indigo-600",
                          "group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold"
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
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600",
                    "group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold"
                  )}
                >
                  <item.icon
                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                  />
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
