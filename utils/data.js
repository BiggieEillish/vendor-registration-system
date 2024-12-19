import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  DocumentDuplicateIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
  { name: 'Dashboard', href: '/adminDashboard', icon: HomeIcon },
  { name: 'Vendor', href: '#', icon: UsersIcon, children: [
      { name: 'Add Vendor', href: '/adminDashboard/addVendor', icon: UsersIcon },
      { name: 'All Vendor Info', href: '/adminDashboard/allVendorInfo', icon: FolderIcon },
    ]
  },
  { name: 'Contracts', href: '#', icon: DocumentDuplicateIcon, children: [
    { name: 'Add Contracts', href: '/adminDashboard/addContract', icon: UsersIcon },
    { name: 'All Contracts Info', href: '/adminDashboard/allContractInfo', icon: FolderIcon },
  ]
},
  { name: 'Calendar', href: '/calendar', icon: CalendarIcon },
  { name: 'Documents', href: '/documents', icon: DocumentDuplicateIcon },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon },
];

export const VendorsData = [
  {
    id: 1,
    registrationId: '123456789',
    requestedBy: 'Jane Smith',
    approvedBy: 'John Doe',
    companyName: 'Example Company 1',
    docCreationDate: '2022-06-15',
    vendorName: 'Example Vendor 1',
    vendorSelectionType: 'Prequalified',
    generalDetailsOfServices: 'Provides IT consulting services.',
    dateEstablished: '2015-08-01',
    businessType: 'Private Limited',
    website: 'https://examplecompany1.com',
    bumiputeraPercentage: '60%',
    nonBumiputeraPercentage: '30%',
    foreignPercentage: '10%',
    contactPersonPrimary: 'Jane Smith',
    contactPhonePrimary: '+1 123-456-7890',
    emailPrimary: 'jane@example.com',
    ssmRegistrationNumber: 'SSM123456',
    ssmCertificateAttachment: 'attached',
    remarks: 'Initial approval pending.',
    actionDate: '2023-01-10'
  },
  {
    id: 2,
    registrationId: '987654321',
    requestedBy: 'John Doe',
    approvedBy: 'Jane Smith',
    companyName: 'Example Company 2',
    docCreationDate: '2023-02-10',
    vendorName: 'Example Vendor 2',
    vendorSelectionType: 'Open Tender',
    generalDetailsOfServices: 'Provides financial auditing services.',
    dateEstablished: '2010-05-15',
    businessType: 'Public Limited',
    website: 'https://examplecompany2.com',
    bumiputeraPercentage: '50%',
    nonBumiputeraPercentage: '40%',
    foreignPercentage: '10%',
    contactPersonPrimary: 'John Doe',
    contactPhonePrimary: '+1 098-765-4321',
    emailPrimary: 'john@example.com',
    ssmRegistrationNumber: 'SSM987654',
    ssmCertificateAttachment: 'attached',
    remarks: 'Awaiting documentation.',
    actionDate: '2023-03-05'
  }
];


export const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];

export const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '/' },
];

export const contractsData = [
  {
    registrationID: 'CNTR_001',
    requestedBy: 'Alice',
    approvedBy: 'John',
    companyName: 'Enterprise DM Sdn Bhd',
    vendorName: 'Global Solutions',
    vendorSelectionType: 'New',
    generalDetails: 'IT Services',
    contractType: 'Service Agreement',
    contractAmount: 50000,
    status: 'Active',
    startDate: '01/10/2023',
    endDate: '01/10/2024',
  },
  {
    registrationID: 'CNTR_002',
    requestedBy: 'Bob',
    approvedBy: 'Sarah',
    companyName: 'Tech Innovations',
    vendorName: 'Best Suppliers Ltd',
    vendorSelectionType: 'Renewal',
    generalDetails: 'Office Supplies',
    contractType: 'Product Supply',
    contractAmount: 30000,
    status: 'Pending',
    startDate: '01/11/2023',
    endDate: '01/11/2024',
  },
  // Add more dummy data as needed
];