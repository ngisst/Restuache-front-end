"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { Pencil, Search, SlidersHorizontal } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import EditOrderModal from "../Modals/orders/edit";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OrdersFilterItems from "./OrdersFilterItems";

interface Orders {
  id: number;
  orderImage: string;
  orderNumber: string;
  restaurantName: string;
  customerName: string;
  destinationAddress: string;
  status: string;
}

const tableData: Orders[] = [
  {
    id: 1,
    orderImage: "/images/restaurants/restaurant-2.jpg",
    restaurantName: "Bella Italia",
    orderNumber: "1571",
    customerName: "John Smith",
    destinationAddress: "123 Oak Street, Boston, MA 02101",
    status: "pending",
  },
  {
    id: 2,
    orderImage: "/images/restaurants/restaurant-3.jpg",
    restaurantName: "Dragon Palace",
    orderNumber: "1421",
    customerName: "Sarah Chen",
    destinationAddress: "456 Maple Avenue, Seattle, WA 98101",
    status: "delivered",
  },
  {
    id: 3,
    orderImage: "/images/restaurants/restaurant-1.jpg",
    restaurantName: "The Burger Joint",
    orderNumber: "5471",
    customerName: "Michael Johnson",
    destinationAddress: "Take Away",
    status: "pending",
  },
  {
    id: 4,
    orderImage: "/images/restaurants/restaurant-2.jpg",
    restaurantName: "Spice Route",
    orderNumber: "3114",
    customerName: "Priya Patel",
    destinationAddress: "321 Elm Street, San Francisco, CA 94102",
    status: "delivered",
  },
  {
    id: 5,
    orderImage: "/images/restaurants/restaurant-3.jpg",
    restaurantName: "Taco Fiesta",
    orderNumber: "1244",
    customerName: "Carlos Rodriguez",
    destinationAddress: "Take Away",
    status: "pending",
  },
];

export default function OrdersTable() {
  const router = useRouter();
  const { isOpen, openModal, closeModal } = useModal();
  const [orderNumber, setOrderNumber] = useState(null);

  const handleRowClick = (orderId: any) => {
    // Navigate to the detail page (adjust the path as needed)
    router.push(`/admin/orders/${orderId}`);
  };

  const [openFilter, setOpenFilter] = useState(false);

  const toggleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pt-4 pb-3 sm:px-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Orders
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Search By Order Number.."
              className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pr-14 pl-12 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden xl:w-[300px] dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30"
            />
          </div>
          <div className="relative">
            <div>
              <button
                onClick={toggleOpenFilter}
                className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                <SlidersHorizontal size={20} />
                Filter
              </button>
            </div>
            {openFilter && (
              <div className="animate-in slide-in-from-top-4 absolute top-full left-1/2 z-10 mt-2 w-[120px] -translate-x-1/2 transform duration-700">
                <OrdersFilterItems />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-y border-gray-100 dark:border-gray-800">
            <TableRow>
              <TableCell
                isHeader
                className="text-theme-xs p-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Order
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs p-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Customer Name
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs p-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Address
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs p-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs p-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((order) => (
              <TableRow
                className="cursor-pointer hover:bg-gray-700"
                key={order.id}
                onClick={() => handleRowClick(order.orderNumber)}
              >
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                      <Image
                        width={50}
                        height={50}
                        src={order.orderImage}
                        className="h-[50px] w-[50px]"
                        alt={order.orderNumber}
                      />
                    </div>
                    <div>
                      <p className="text-theme-sm font-medium whitespace-nowrap text-gray-800 dark:text-white/90">
                        No. {order.orderNumber}
                      </p>
                      <span className="text-theme-xs whitespace-nowrap text-gray-500 dark:text-gray-400">
                        {order.restaurantName}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-theme-sm p-3 whitespace-nowrap text-gray-500 dark:text-gray-400">
                  {order.customerName}
                </TableCell>
                <TableCell className="text-theme-sm p-3 whitespace-nowrap text-gray-500 dark:text-gray-400">
                  {order.destinationAddress}
                </TableCell>
                <TableCell className="text-theme-sm p-3 whitespace-nowrap text-gray-500 dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.status === "delivered"
                        ? "success"
                        : order.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-theme-sm p-3 whitespace-nowrap text-gray-500 dark:text-gray-400">
                  <div className="flex gap-12">
                    <Pencil
                      className="cursor-pointer text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal();
                        setOrderNumber(order.orderNumber);
                      }}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <EditOrderModal
        isOpen={isOpen}
        closeModal={closeModal}
        orderNumber={orderNumber}
      />
    </div>
  );
}
