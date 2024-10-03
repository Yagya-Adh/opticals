"use client";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface ButtonProps {
  variant: "single-right" | "double";
  ClickHandle?: () => void;
}

const ArrowButton = ({ variant, ClickHandle }: ButtonProps) => {
  if (variant == "single-right") {
    return (
      <button
        onClick={ClickHandle}
        className="  rounded-full p-2 border border-gray-400 hover:bg-black hover:text-white m-1"
      >
        <ArrowRightIcon className="size-5" />
      </button>
    );
  }

  if (variant == "double") {
    return (
      <div className="flex">
        <button
          onClick={ClickHandle}
          className="  rounded-full p-2 border border-gray-400 hover:bg-black hover:text-white m-1 "
        >
          <ArrowLeftIcon className="size-5 " />
        </button>
        <button
          onClick={ClickHandle}
          className="  rounded-full p-2 border border-gray-400 hover:bg-black hover:text-white m-1"
        >
          <ArrowRightIcon className="size-5 " />
        </button>{" "}
      </div>
    );
  }
};

export default ArrowButton;
