import BasicTableOne from "@/components/tables/BasicTableOne";
import OrdersTable from "@/components/tables/OrdersTable";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function OrdersPage() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <OrdersTable />
      </div>
    </div>
  );
}
