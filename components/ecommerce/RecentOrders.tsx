import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import { Pencil, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

// Define the TypeScript interface for the table rows
interface Orders {
  id: number; // Unique identifier for each product
  orderImage: string; // Product name
  orderNumber: string; // Product name
  restaurantName: string; // Number of variants (e.g., "1 Variant", "2 Variants")
  customerName: string; // Category of the product
  destinationAddress: string; // Price of the product (as a string with currency symbol)
  status: string;
}

// Define the table data using the interface
const tableData: Orders[] = [
  {
    id: 1,
    orderImage: "/images/restaurants/restaurant-2.jpg",
    restaurantName: "Bella Italia",
    orderNumber: "No. 1571",
    customerName: "John Smith",
    destinationAddress: "123 Oak Street, Boston, MA 02101",
    status: "pending",
  },
  {
    id: 2,
    orderImage: "/images/restaurants/restaurant-2.jpg",
    restaurantName: "Dragon Palace",
    orderNumber: "No. 1421",
    customerName: "Sarah Chen",
    destinationAddress: "456 Maple Avenue, Seattle, WA 98101",
    status: "Delivered",
  },
  {
    id: 3,
    orderImage: "/images/restaurants/restaurant-2.jpg",
    restaurantName: "The Burger Joint",
    orderNumber: "No. 5471",
    customerName: "Michael Johnson",
    destinationAddress: "Take Away",
    status: "pending",
  },
  {
    id: 4,
    orderImage: "/images/restaurants/restaurant-2.jpg",
    restaurantName: "Spice Route",
    orderNumber: "No. 3114",
    customerName: "Priya Patel",
    destinationAddress: "321 Elm Street, San Francisco, CA 94102",
    status: "Delivered",
  },
  {
    id: 5,
    orderImage: "/images/restaurants/restaurant-2.jpg",
    restaurantName: "Taco Fiesta",
    orderNumber: "No. 1244",
    customerName: "Carlos Rodriguez",
    destinationAddress: "Take Away",
    status: "pending",
  },
];

export default function RecentOrders() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pt-4 pb-3 sm:px-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <SlidersHorizontal size={20} />
            Filter
          </button>
          <Link href="/admin/orders">
            <button className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
              See all
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-y border-gray-100 dark:border-gray-800">
            <TableRow>
              <TableCell
                isHeader
                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Order
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Customer Name
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Address
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Status
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Action
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Table Body */}

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((order) => (
              <TableRow key={order.id} className="">
                <TableCell className="py-3">
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
                      <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                        {order.orderNumber}
                      </p>
                      <span className="text-theme-xs text-gray-500 dark:text-gray-400">
                        {order.restaurantName}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  {order.customerName}
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  {order.destinationAddress}
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.status === "Delivered"
                        ? "success"
                        : order.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  <div className="flex gap-12">
                    <Pencil className="cursor-pointer text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
