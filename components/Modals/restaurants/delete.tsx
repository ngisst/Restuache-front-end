import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal";

const DeleteRestaurantModal = ({
  isOpen,
  closeModal,
  restaurantIfno
}: {
  isOpen: boolean;
  closeModal: any;
  restaurantIfno: any
}) => {

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 lg:p-11 dark:bg-gray-900">
        <div className="px-2 pr-14">
          <h4 className="mb-10 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Deleting Restaurant
          </h4>
        </div>
        <div>
          <p className="text-2xl text-gray-500 lg:mb-10 dark:text-gray-400">
            Are you sure you want to delete {restaurantIfno?.name}?
          </p>
        </div>
        <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
          <Button size="sm" variant="outline" onClick={closeModal}>
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleSave}
            className="bg-error-500 shadow-theme-xs hover:bg-error-600 flex w-full justify-center rounded-lg px-4 py-3 text-sm font-medium text-white sm:w-auto"
          >
            Yes , Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteRestaurantModal;
