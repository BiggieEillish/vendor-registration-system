import SectionHeader from "@/components/UI/SectionHeader";
import StatsCards from "@/components/UI/StatsCards";
import RecentActivities from "@/components/tables/RecentActivities";
import Link from "next/link";

export default function UserDashboardPage() {
    return (
      <main className="p-4 space-y-4">
      <div>
        <SectionHeader 
          title="Welcome to the Admin Dashboard"
          subtitle="Here you can access your vendor registration and other features."
        >
          <Link className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          href="/adminDashboard/addVendor">
            Add Vendor
          </Link>
        </SectionHeader>
        {/* Stats Cards */}
        <StatsCards />

        {/* Recent Activities */}
        <RecentActivities />
      </div>
      </main>
    );
  }
  