// Sample order data
export const orders = [
  {
    id: "ORD-2024-001",
    orderDate: "2024-07-15",
    status: "Delivered",
    total: 129.99,
    items: [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        price: 79.99,
        quantity: 1
      },
      {
        id: 2,
        name: "Smart Watch Series 8",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        price: 50.00,
        quantity: 1
      }
    ],
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "Colombo",
      state: "Western Province",
      zipCode: "00100",
      country: "Sri Lanka"
    },
    trackingNumber: "TRK123456789"
  },
  {
    id: "ORD-2024-002",
    orderDate: "2024-07-18",
    status: "Processing",
    total: 89.99,
    items: [
      {
        id: 3,
        name: "Organic Cotton T-Shirt",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        price: 29.99,
        quantity: 2
      },
      {
        id: 4,
        name: "Blue Denim Jeans",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
        price: 30.01,
        quantity: 1
      }
    ],
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "Colombo",
      state: "Western Province",
      zipCode: "00100",
      country: "Sri Lanka"
    },
    trackingNumber: "TRK987654321"
  },
  {
    id: "ORD-2024-003",
    orderDate: "2024-07-20",
    status: "Shipped",
    total: 199.97,
    items: [
      {
        id: 5,
        name: "Stainless Steel Water Bottle",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
        price: 24.99,
        quantity: 1
      },
      {
        id: 6,
        name: "Wireless Charging Pad",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
        price: 39.99,
        quantity: 1
      },
      {
        id: 7,
        name: "Premium Leather Wallet",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
        price: 134.99,
        quantity: 1
      }
    ],
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "Colombo",
      state: "Western Province",
      zipCode: "00100",
      country: "Sri Lanka"
    },
    trackingNumber: "TRK456789123"
  },
  {
    id: "ORD-2024-004",
    orderDate: "2024-07-10",
    status: "Cancelled",
    total: 45.98,
    items: [
      {
        id: 8,
        name: "Yoga Mat",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
        price: 22.99,
        quantity: 2
      }
    ],
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "Colombo",
      state: "Western Province",
      zipCode: "00100",
      country: "Sri Lanka"
    },
    trackingNumber: null
  },
  {
    id: "ORD-2024-005",
    orderDate: "2024-07-21",
    status: "Pending",
    total: 159.99,
    items: [
      {
        id: 9,
        name: "Gaming Mouse",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        price: 79.99,
        quantity: 1
      },
      {
        id: 10,
        name: "Mechanical Keyboard",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        price: 80.00,
        quantity: 1
      }
    ],
    shippingAddress: {
      name: "John Doe",
      street: "123 Main Street",
      city: "Colombo",
      state: "Western Province",
      zipCode: "00100",
      country: "Sri Lanka"
    },
    trackingNumber: null
  }
];

// Helper function to get status color
export const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'delivered':
      return 'text-green-600 bg-green-100';
    case 'shipped':
      return 'text-blue-600 bg-blue-100';
    case 'processing':
      return 'text-yellow-600 bg-yellow-100';
    case 'pending':
      return 'text-orange-600 bg-orange-100';
    case 'cancelled':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

// Helper function to format date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
