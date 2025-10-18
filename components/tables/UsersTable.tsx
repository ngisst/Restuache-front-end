import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";
import Image from "next/image";
import Switch from "../form/switch/Switch";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

// Define the TypeScript interface for the table rows
interface Product {
  id: number;
  name: string;
  variants: string;
  restaurantName: string;
  image: string;
  status: "Online" | "Offline";
}

// Define the table data using the interface
const tableData: Product[] = [
  {
    id: 1,
    name: "Mark",
    variants: "2 Variants",
    restaurantName: "The Golden Fork",
    status: "Online",
    image: "/images/users/user-01.jpg",
  },
  {
    id: 2,
    name: "John",
    variants: "1 Variant",
    restaurantName: "Sakura Dreams",
    status: "Online",
    image: "/images/users/user-02.jpg",
  },
  {
    id: 3,
    name: "Lina",
    variants: "2 Variants",
    restaurantName: "La Bella Notte",
    status: "Offline",
    image: "/images/users/user-03.jpg",
  },
  {
    id: 4,
    name: "Jane",
    variants: "2 Variants",
    restaurantName: "The Crimson Plate",
    status: "Online",
    image: "/images/users/user-04.jpg",
  },
  {
    id: 5,
    name: "Adam",
    variants: "1 Variant",
    restaurantName: "Ocean's Harvest",
    status: "Offline",
    image: "/images/users/user-05.jpg",
  },
];

export default function UsersTable({ userType }: { userType: string }) {
  const [label, setLabel] = useState("Enabled");

  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
    setLabel(checked ? "Enabled" : "Disabled");
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pt-4 pb-3 sm:px-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            {userType}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-theme-sm shadow-theme-xs inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <SlidersHorizontal size={20} />
            Filter
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
                Profile
              </TableCell>

              <TableCell
                isHeader
                className="text-theme-xs py-3 text-start font-medium text-gray-500 dark:text-gray-400"
              >
                Restaurant&apos;s Name
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
            {tableData.map((user) => (
              <TableRow
                key={user.id}
                className="cursor-pointer hover:bg-gray-700"
              >
                <TableCell className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                      <Image
                        width={50}
                        height={50}
                        src={user.image}
                        className="h-[50px] w-[50px]"
                        alt={user.name}
                      />
                    </div>
                    <div>
                      <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                        {user.name}
                      </p>
                      <span className="text-theme-xs text-gray-500 dark:text-gray-400">
                        {user.variants}
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  {user.restaurantName}
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={user.status === "Online" ? "success" : "warning"}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-theme-sm py-3 text-gray-500 dark:text-gray-400">
                  <Switch
                    label=''
                    defaultChecked={true}
                    onChange={handleSwitchChange}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
