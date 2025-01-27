import AddVendorForm from '@/components/forms/AddVendorForm';

export default function AddVendorPage() {
  return (
    <div className="p-2">
      <h1 className="text-3xl font-semibold mb-6 text-black">Register Vendor</h1>
      <p className="text-lg text-gray-500 mb-4">Register new vendor here</p>
      <AddVendorForm />
    </div>
  );
}
