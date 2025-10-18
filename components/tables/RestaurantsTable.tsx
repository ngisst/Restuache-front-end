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
import { Pencil, SlidersHorizontal, Trash } from "lucide-react";
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
          <form>
            <div className="relative">
              <span className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2">
                <svg
                  className="fill-gray-500 dark:fill-gray-400"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z"
                    fill=""
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search By Name.."
                className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pr-14 pl-12 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden xl:w-[300px] dark:border-gray-800 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30"
              />
            </div>
          </form>
          <button className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <SlidersHorizontal size={20} />
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
