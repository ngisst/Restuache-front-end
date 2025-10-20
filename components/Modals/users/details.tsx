import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal";
import Image from "next/image";
import { useState } from "react";

const UserDetailsModal = ({
  isOpen,
  closeModal,
  user,
}: {
  isOpen: boolean;
  closeModal: any;
  user: any;
}) => {
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  const [eventLevel, setEventLevel] = useState("");
  const status = {
    Pending: "pending",
    Preparing: "preparing",
    Delivered: "delivered",
    Cancelled: "cancelled",
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 lg:p-11 dark:bg-gray-900">
        <div className="flex gap-4 px-2 pr-14">
          <div className="h-[60px] w-[60px] overflow-hidden rounded-md">
            <Image
              width={50}
              height={50}
              src={user?.image}
              className="h-[60px] w-[60px]"
              alt={user?.name}
            />
          </div>
          <div>
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              {user?.name}
            </h4>
            <p className="mb-6 text-sm text-gray-500 lg:mb-7 dark:text-gray-400">
              Edit order status
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="my-4 space-y-2">
            <div className="flex gap-4 text-gray-500 dark:text-gray-400">
              <span>Registration Date :</span>
              <span>4/12/2025</span>
            </div>
            <div className="flex gap-4 text-gray-500 dark:text-gray-400">
              <span>Email address :</span>
              <span>mail@email.com</span>
            </div>
            <div className="flex gap-4 text-gray-500 dark:text-gray-400">
              <span>Phone Number :</span>
              <span>+123456789</span>
            </div>
          </div>
          {/* <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Close
            </Button>
          </div> */}
        </div>
      </div>
    </Modal>
  );
};

export default UserDetailsModal;
