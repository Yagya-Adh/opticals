"use client";

interface IPillButtonProps {
  text: string;
  uppercase?: string;
}
const PillButton = ({ text, uppercase }: IPillButtonProps): JSX.Element => {
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
