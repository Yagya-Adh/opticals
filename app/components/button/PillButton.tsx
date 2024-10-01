"use client";

import { PlusIcon } from "@heroicons/react/24/outline";

interface IPillButtonProps {
  text: string;
  uppercase?: string;
  varriant: string | "primary";
}
const PillButton = ({
  text,
  uppercase,
  varriant,
}: IPillButtonProps): JSX.Element => {
  if (varriant == "primary-plus") {
    return (
      <button
        className={`border border-optixColor-optText   text-optixColor-optTextMain rounded-full px-6 py-2  text-sm flex items-center cursor-pointer ${
          uppercase && "uppercase"
        }`}
      >
        <PlusIcon className="size-4 me-1" />
        <span>{text}</span>
      </button>
    );
  }
  if (varriant == "primary") {
    return (
      <button
        className={`border border-optixColor-optText   text-optixColor-optTextMain rounded-full px-6 py-2  text-sm  ${
          uppercase && "uppercase"
        }`}
      >
        {text}
      </button>
    );
  }

  return (
    <button
      className={`border border-optixColor-optText bg-optixColor-optbg text-optixColor-optTextMain rounded-full px-6 py-2  text-sm  ${
        uppercase && "uppercase"
      }`}
    >
      {text}
    </button>
  );
};

export default PillButton;
