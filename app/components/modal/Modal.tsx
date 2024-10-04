import { XMarkIcon } from "@heroicons/react/24/outline";
interface IModalProps {
  handlePopUp: () => void;
}
const Modal = ({ handlePopUp }: IModalProps) => {
  return (
    <>
      <div
        className="h-full w-full bg-black opacity-70 p-20"
        onClick={handlePopUp}
      ></div>

      <div className="absolute top-[40%] left-[40%] rounded-xl overflow-hidden bg-white to-black w-1/3  h-1/3">
        <div className="flex justify-between border py-3 px-2 text-3xl">
          <h1>Your Cart</h1>
          <button onClick={handlePopUp}>
            <XMarkIcon className="size-5" />
          </button>
        </div>
        <div className="flex justify-center items-center h-full">
          <p className="font-bold font-sans">No items found.</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
