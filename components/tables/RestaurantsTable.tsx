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
import { Pencil, Trash } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import AddRestaurantModal from "../Modals/restaurants/add";
import DeleteRestaurantModal from "../Modals/restaurants/delete";

interface Product {
  id: number; // Unique identifier for each product
  image: string; // Product name
  name: string; // Product name
  owner: string; // Number of variants (e.g., "1 Variant", "2 Variants")
  city: string; // Price of the product (as a string with currency symbol)
  status: "open" | "closed"; // Status of the product
}

// Define the table data using the interface
const tableData: Product[] = [
  {
    id: 1,
    image: "/images/restaurants/restaurant-1.jpg",
    name: "The Golden Fork",
    owner: "Maria Rodriguez",
    city: "New York",
    status: "open",
  },
  {
    id: 2,
    image: "/images/restaurants/restaurant-1.jpg",
    name: "Sakura Dreams",
    owner: "Kenji Tanaka",
    city: "Los Angeles",
    status: "open",
  },
  {
    id: 3,
    image: "/images/restaurants/restaurant-1.jpg",
    name: "La Bella Notte",
    owner: "Giovanni Rossi",
    city: "Chicago",
    status: "closed",
  },
  {
    id: 4,
    image: "/images/restaurants/restaurant-1.jpg",
    name: "The Crimson Plate",
    owner: "Sarah Mitchell",
    city: "Austin",
    status: "open",
  },
  {
    id: 5,
    image: "/images/restaurants/restaurant-1.jpg",
    name: "Ocean's Harvest",
    owner: "David Chen",
    city: "San Francisco",
    status: "closed",
  },
];

export default function RestaurantsTable() {
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: isDeleteOpen,
    openModal: OpenDeleteModal,
    closeModal: CloseDeleteModal,
  } = useModal();
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pt-4 pb-3 sm:px-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Restaurants
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              className="fill-white stroke-current dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
            </svg>
            Filter
          </button>
          <button
            onClick={openModal}
            className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
          >
            Add
          </button>
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
                Name
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Owner
              </TableCell>
              <TableCell
                isHeader
                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                City
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
            {tableData.map((restaurant) => (
              <TableRow key={restaurant.id} className="">
                <TableCell className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[50px] w-[80px] overflow-hidden rounded-md">
                      <Image
                        width={50}
                        height={50}
                        src={restaurant.image}
                        className="h-[60px] w-[80px]"
                        alt={restaurant.name}
                      />
                    </div>
                    <div>
                      <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                        {restaurant.name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  {restaurant.owner}
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  {restaurant.city}
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      restaurant.status === "open"
                        ? "success"
                        : restaurant.status === "closed"
                        ? "warning"
                        : "error"
                    }
                  >
                    {restaurant.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  <div className="flex gap-12">
                    <Pencil
                      className="cursor-pointer text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                      onClick={openModal}
                    />
                    <Trash
                      className="cursor-pointer text-gray-400 hover:text-red-500 dark:hover:text-red-500"
                      onClick={OpenDeleteModal}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AddRestaurantModal isOpen={isOpen} closeModal={closeModal} />
      <DeleteRestaurantModal
        isOpen={isDeleteOpen}
        closeModal={CloseDeleteModal}
      />
    </div>
  );
}
