"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface ButtonProps {
  text: string;
  variant:
    | "primary"
    | "dark"
    | "secondary"
    | "sky"
    | "next"
    | "primary-noborder"
    | "primay-white"
    | "danger";
  onSubmit?: () => void;
}

const Button = ({ text, variant, onSubmit }: ButtonProps) => {
  if (variant == "primary") {
    return (
      <button
        onSubmit={onSubmit}
        className=" rounded-md  border border-black text-sm text-black px-4 py-2 translate-270  overflow-hidden relative "
      >
        <div className="translate-y-0 hover:translate-y-5 ">{text}</div>
      </button>
    );
  }
  if (variant == "primay-white") {
    return (
      <button
        onSubmit={onSubmit}
        className=" rounded-md  border border-white text-sm text-white px-4 py-2 translate-270  overflow-hidden relative "
      >
        <div className=" ">{text}</div>
      </button>
    );
  }
  if (variant == "primary-noborder") {
    return (
      <button
        onSubmit={onSubmit}
        className=" rounded-md  text-sm text-black py-2 translate-270 overflow-hidden relative hover:cursor-pointer"
      >
        <div className="flex items-center p-1">
          <span>{text}</span>
          <ChevronRightIcon className="ms-3 size-5 border rounded-full border-black hover:bg-black hover:text-white hover:border-white" />
        </div>
      </button>
    );
  }

  if (variant == "next") {
    return (
      <button
        onSubmit={onSubmit}
        className=" rounded-md  border border-black text-sm text-black px-4 py-2 translate-270 hover:bg-black hover:text-white  overflow-hidden relative "
      >
        <div className="flex items-center p-1 hover:bg-black hover:text-white">
          <span>{text}</span>
          <ChevronRightIcon className="ms-3 size-5 border rounded-full border-black hover:bg-black hover:text-white hover:border-white" />
        </div>
      </button>
    );
  }

  if (variant == "secondary") {
    return (
      <button
        onSubmit={onSubmit}
        className="rounded-md  border bg-gray-500 text-sm text-white px-4 py-2 translate-270  overflow-hidden relative "
      >
        <div className="translate-y-0 hover:translate-y-5 ">{text}</div>
      </button>
    );
  }
  if (variant == "dark") {
    return (
      <button
        onSubmit={onSubmit}
        className="rounded-md  border bg-black text-sm text-white px-4 py-2 translate-270  overflow-hidden relative "
      >
        <div className="translate-y-0 hover:translate-y-5 ">{text}</div>
      </button>
    );
  }
  if (variant == "sky") {
    return (
      <button
        onSubmit={onSubmit}
        className="rounded-md  border bg-sky-500 text-sm text-white px-4 py-2 translate-270  overflow-hidden relative "
      >
        <div className="translate-y-0 hover:translate-y-5 ">{text}</div>
      </button>
    );
  }
  return (
    <button
      onSubmit={onSubmit}
      className="rounded-md  border bg-rose-500 text-sm text-white px-4 py-2 translate-270  overflow-hidden relative "
    >
      <div className="translate-y-0 hover:translate-y-5 ">{text}</div>
    </button>
  );
};

export default Button;
