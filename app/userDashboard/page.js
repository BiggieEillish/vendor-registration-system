import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function UserDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>Please log in to access this page.</p>;
  }

  return <div>
    <h1 className="text-3xl font-bold text-gray-300 mb-4">Welcome to the User Dashboard</h1>
    <p className="text-gray-600">Here you can access your vendor registration and other features.</p>
  </div>;
}
