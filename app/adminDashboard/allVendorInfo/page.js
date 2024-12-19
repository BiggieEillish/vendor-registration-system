'use client';

import { useState } from 'react';
import Modal from '@/components/UI/Modal';
import EditVendorForm from '@/components/forms/EditVendorForm';
import VendorTable from '@/components/tables/AllVendorInfo';

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
    // Implement delete logic
    console.log('Delete vendor:', vendor);
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-gray-800">List of Vendor</h2>
      <VendorTable onEdit={openModal} onDelete={handleDelete} />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <EditVendorForm vendor={selectedVendor} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
}
