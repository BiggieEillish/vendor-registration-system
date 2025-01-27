'use client';

import { useState } from 'react';
import Modal from '@/components/UI/Modal';
import EditVendorForm from '@/components/forms/EditVendorForm';
import VendorTable from '@/components/tables/AllVendorInfo';
import Link from 'next/link';
import SectionHeader from '@/components/UI/SectionHeader';
import { UserPlusIcon } from '@heroicons/react/24/outline';

export default function AllVendorInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);

  const openModal = (vendor) => {
    setSelectedVendor(vendor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVendor(null);
  };

  const handleDelete = (vendor) => {
    // Implement delete logic here
    console.log('Delete vendor:', vendor);
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Top Section Header with Title & Subtitle */}
      <SectionHeader
        title="List of Vendors"
        subtitle="Here you can access your vendors and add them."
      >
        <Link
          className=" inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          href="/adminDashboard/addVendor"
        > <UserPlusIcon className=" h-5 w-5" />
          Add Contract
        </Link>
      </SectionHeader>

      {/* Vendor Table */}
      <VendorTable onEdit={openModal} onDelete={handleDelete} />

      {/* Edit Modal */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <EditVendorForm vendor={selectedVendor} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
