import AllContractInfoPage from "@/components/tables/AllContractInfoPage";
import SectionHeader from "@/components/UI/SectionHeader";
import Link from "next/link";
import { UserPlusIcon } from "@heroicons/react/20/solid";


export default function AllContractPage() {
  return (
    <div className="p-2">
      <SectionHeader
        title="List of Contracts"
        subtitle="Here you can access all your vendors' contracts and add them."
      >
        <Link
          className=" inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          href="/adminDashboard/addContract"
        > <UserPlusIcon className=" h-5 w-5" />
          Add Contract
        </Link>
      </SectionHeader>

      <AllContractInfoPage />
    </div>
  );
}
