'use client'

import UsersTable from "@/components/tables/UsersTable";
import React from "react";

export default function UsersPage() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <UsersTable userType={'Admins'} />
      </div>
      <div className="col-span-12">
        <UsersTable userType={'Restaurant Owners'}/>
      </div>
      <div className="col-span-12">
        <UsersTable userType={'Customers'}/>
      </div>
    </div>
  );
}
