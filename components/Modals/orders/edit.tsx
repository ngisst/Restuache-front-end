import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal";
import { useState } from "react";

const EditOrderModal = ({
  isOpen,
  closeModal,
  orderNumber,
}: {
  isOpen: boolean;
  closeModal: any;
  orderNumber: string;
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
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Order {orderNumber}
          </h4>
          <p className="mb-6 text-sm text-gray-500 lg:mb-7 dark:text-gray-400">
            Edit order status
          </p>
        </div>
        <form className="flex flex-col">
          <div className="mt-6">
            <label className="mb-4 block text-sm font-medium text-gray-700 dark:text-gray-400">
              Select Status
            </label>
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              {Object.entries(status).map(([key, value]) => (
                <div key={key} className="n-chk">
                  <div
                    className={`form-check form-check-${value} form-check-inline`}
                  >
                    <label
                      className="form-check-label flex items-center text-sm text-gray-700 dark:text-gray-400"
                      htmlFor={`modal${key}`}
                    >
                      <span className="relative">
                        <input
                          className="form-check-input sr-only"
                          type="radio"
                          name="event-level"
                          value={key}
                          id={`modal${key}`}
                          checked={eventLevel === key}
                          onChange={() => setEventLevel(key)}
                        />
                        <span className="box mr-2 flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 dark:border-gray-700">
                          <span
                            className={`h-2 w-2 rounded-full bg-white ${
                              eventLevel === key ? "block" : "hidden"
                            }`}
                          ></span>
                        </span>
                      </span>
                      {key}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
            <Button size="sm" variant="outline" onClick={closeModal}>
              Close
            </Button>
            <Button size="sm" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditOrderModal;
