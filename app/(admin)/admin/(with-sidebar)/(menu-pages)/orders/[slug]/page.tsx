"use client";

import {
  Check,
  ChevronLeft,
  DollarSign,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";

export default function SingleOrderPage() {
  const [order, setOrder] = useState({
    id: "ORD-2025-001234",
    status: "preparing",
    createdAt: new Date(Date.now() - 15 * 60000),
    estimatedTime: new Date(Date.now() + 30 * 60000),
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main St, Apt 4B, New York, NY 10001",
    },
    items: [
      {
        id: 1,
        name: "Margherita Pizza",
        quantity: 2,
        price: 14.99,
        subtotal: 29.98,
      },
      { id: 2, name: "Caesar Salad", quantity: 1, price: 9.99, subtotal: 9.99 },
      { id: 3, name: "Garlic Bread", quantity: 1, price: 5.99, subtotal: 5.99 },
      {
        id: 4,
        name: "Coca Cola (500ml)",
        quantity: 2,
        price: 2.99,
        subtotal: 5.98,
      },
    ],
    subtotal: 51.94,
    tax: 5.19,
    delivery: 3.5,
    total: 60.63,
    paymentMethod: "Credit Card",
    notes: "Extra garlic on the pizza please!",
  });

  const statusConfig = {
    pending: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-800",
      label: "Pending",
    },
    preparing: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-800",
      label: "Preparing",
    },
    ready: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-800",
      label: "Ready for Pickup",
    },
    delivering: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      text: "text-orange-800",
      label: "Out for Delivery",
    },
    completed: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-800",
      label: "Completed",
    },
  };

  const status = statusConfig[order.status];

  const params = useParams();

  const { slug } = params;

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="mb-4 flex items-center gap-3">
          <Link href={"/admin/orders"}>
            <button className="rounded-lg p-2 hover:bg-gray-700">
              <ChevronLeft className="h-5 w-5 text-white/90" />
            </button>
          </Link>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            Order No. {slug}
          </h3>
        </div>
        <div className="px-4 py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Main Content */}
            <div className="space-y-6 lg:col-span-2">
              {/* Order Status Timeline */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 text-lg font-semibold text-gray-800 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">Order Status</h2>
                  <div>{status.label}</div>
                </div>
              </div>

              {/* Order Items */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 text-lg font-semibold text-gray-800 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90">
                <h2 className="mb-4 text-lg font-semibold">Order Items</h2>
                <div className="space-y-3 border-b pb-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white/90">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="font-semibold">
                        ${item.subtotal.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              {order.notes && (
                <div className="rounded-2xl border border-gray-200 bg-white p-5 text-lg font-semibold text-gray-800 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90">
                  <div className="flex justify-between">
                    <p className="text-gray-400">Special Notes</p>
                    <p className="text-gray-400">{order.notes}</p>
                  </div>
                </div>
              )}

              {/* Customer Info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 text-lg font-semibold text-gray-800 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90">
                <h2 className="mb-4 text-lg font-semibold">
                  Customer Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <User className="mt-0.5 h-5 w-5 text-gray-400" />
                    <div>
                      <p className="mb-1 text-sm text-gray-600">Name</p>
                      <p className="font-medium">{order.customer.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-gray-400" />
                    <div>
                      <p className="mb-1 text-sm text-gray-600">Phone</p>
                      <p className="font-medium">{order.customer.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-gray-400" />
                    <div>
                      <p className="mb-1 text-sm text-gray-600">
                        Delivery Address
                      </p>
                      <p className="font-medium">{order.customer.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Price Summary */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 text-lg font-semibold text-gray-800 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90">
                <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
                <div className="mb-4 space-y-2 border-b pb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>${order.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span>${order.delivery.toFixed(2)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between dark:text-white/90">
                  <span className="font-semibold text-gray-900 dark:text-white/90">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white/90">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Payment Info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 text-lg font-semibold text-gray-800 lg:p-6 dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                  <DollarSign className="h-5 w-5" />
                  Payment
                </h2>
                <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-3">
                  <Check className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-green-800">Paid</p>
                    <p className="text-xs text-green-700">
                      {order.paymentMethod}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
