"use client";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className=" rounded-md  border bg-black text-sm text-white px-4 py-2 translate-270  overflow-hidden relative ">
      <div className="translate-y-0 hover:translate-y-5 ">{text}</div>
    </button>
  );
};

export default Button;
