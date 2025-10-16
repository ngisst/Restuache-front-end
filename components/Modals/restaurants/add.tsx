import Label from "@/components/form/Label";
import DropzoneComponent from "@/components/form/form-elements/DropZone";
import Input from "@/components/form/input/InputField";
import Switch from "@/components/form/switch/Switch";
import Button from "@/components/ui/button/Button";
import { Modal } from "@/components/ui/modal";

const AddRestaurantModal = ({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: any;
}) => {
  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
      <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 lg:p-11 dark:bg-gray-900">
        <div className="px-2 pr-14">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Restaurant Form
          </h4>
          <p className="mb-6 text-sm text-gray-500 lg:mb-7 dark:text-gray-400">
            Add a new restaurant to the list
          </p>
        </div>
        <form className="flex flex-col">
          <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
            <div className="mt-4">
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                <div className="col-span-2 lg:col-span-1">
                  <Label>Restaurant&apos;s Name</Label>
                  <Input type="text" defaultValue="Musharof" />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <Label>Owner&apos;s Name</Label>
                  <Input type="text" defaultValue="Chowdhury" />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <Label>City</Label>
                  <Input type="text" defaultValue="Chicago" />
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <Switch
                    label="Default"
                    defaultChecked={true}
                    onChange={handleSwitchChange}
                  />
                </div>
              </div>
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

export default AddRestaurantModal;
