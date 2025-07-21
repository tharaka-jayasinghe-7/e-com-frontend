import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Truck, CheckCircle, XCircle, Clock, Eye } from "lucide-react";
import { orders, getStatusColor, formatDate } from "../data/orders";

const MyOrdersPage = () => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Filter orders based on selected status
  const filteredOrders = selectedStatus === "all" 
    ? orders 
    : orders.filter(order => order.status.toLowerCase() === selectedStatus);

  // Get status icon
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return <CheckCircle className="h-5 w-5" />;
      case 'shipped':
        return <Truck className="h-5 w-5" />;
      case 'processing':
        return <Package className="h-5 w-5" />;
      case 'pending':
        return <Clock className="h-5 w-5" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  // Order detail modal
  const OrderDetailModal = ({ order, onClose }) => {
    if (!order) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>

            {/* Order Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Order ID</p>
                  <p className="font-semibold">{order.id}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Order Date</p>
                  <p className="font-semibold">{formatDate(order.orderDate)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span className="ml-1">{order.status}</span>
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="font-semibold text-lg">${order.total}</p>
                </div>
                {order.trackingNumber && (
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600">Tracking Number</p>
                    <p className="font-semibold">{order.trackingNumber}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Items */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Items Ordered</h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 border rounded-lg p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p className="font-semibold text-teal-600">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Shipping Address</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-medium">{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.street}</p>
                <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your order history</p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { key: "all", label: "All Orders", count: orders.length },
                { key: "pending", label: "Pending", count: orders.filter(o => o.status.toLowerCase() === "pending").length },
                { key: "processing", label: "Processing", count: orders.filter(o => o.status.toLowerCase() === "processing").length },
                { key: "shipped", label: "Shipped", count: orders.filter(o => o.status.toLowerCase() === "shipped").length },
                { key: "delivered", label: "Delivered", count: orders.filter(o => o.status.toLowerCase() === "delivered").length },
                { key: "cancelled", label: "Cancelled", count: orders.filter(o => o.status.toLowerCase() === "cancelled").length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedStatus(tab.key)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    selectedStatus === tab.key
                      ? "border-teal-500 text-teal-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
            <p className="text-gray-600 mb-6">You haven't placed any orders yet.</p>
            <Link
              to="/all-products"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{order.id}</h3>
                      <p className="text-sm text-gray-600">{formatDate(order.orderDate)}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1">{order.status}</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">${order.total}</p>
                    <p className="text-sm text-gray-600">{order.items.length} item{order.items.length > 1 ? 's' : ''}</p>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="flex items-center space-x-4 mb-4">
                  {order.items.slice(0, 3).map((item, index) => (
                    <img
                      key={index}
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 object-cover rounded-lg"
                    />
                  ))}
                  {order.items.length > 3 && (
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-600">
                      +{order.items.length - 3}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </button>
                    {order.trackingNumber && (
                      <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <Truck className="h-4 w-4 mr-1" />
                        Track Order
                      </button>
                    )}
                  </div>
                  {order.status.toLowerCase() === "delivered" && (
                    <button className="text-sm text-teal-600 hover:text-teal-800 font-medium">
                      Reorder
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Order Detail Modal */}
      <OrderDetailModal 
        order={selectedOrder} 
        onClose={() => setSelectedOrder(null)} 
      />
    </div>
  );
};

export default MyOrdersPage;
