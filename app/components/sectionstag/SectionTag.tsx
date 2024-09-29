"use client";
import Image from "next/image";
import iconLogo from "../../assets/images/iconGlassess.svg";

interface ISectionTagProps {
  name: string;
  head: string;
}

const SectionTag = ({ name, head }: ISectionTagProps) => {
  return (
    <div>
      <div className="flex items-center ">
        <Image src={iconLogo} alt="icon_" className="me-1 size-6" />
        <span className="font-light  ">{name}</span>
      </div>
      <h1 className="text-4xl my-4">{head}</h1>
    </div>
  );
};

export default SectionTag;
