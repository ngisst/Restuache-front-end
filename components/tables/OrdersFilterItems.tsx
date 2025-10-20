import { ChevronDown } from "lucide-react";
import Select from "../form/Select";

const OrdersFilterItems = () => {

  const statusOptions = [
    { value: "pending", label: "pending" },
    { value: "delivered", label: "delivered" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <div className={`flex gap-4 text-white`}>
      <div className="relative">
        <Select
          options={statusOptions}
          placeholder="Status"
          onChange={handleSelectChange}
          className="dark:bg-dark-900 p-0 text-gray-800"
        />
        <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-400">
          <ChevronDown />
        </span>
      </div>
    </div>
  );
};

export default OrdersFilterItems;
