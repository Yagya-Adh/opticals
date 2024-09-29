"use client";
import Image from "next/image";
import iconLogo from "../../assets/images/iconGlassess.svg";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface ISectionTagProps {
  name: string;
  head: string;
}

const SectionTag = ({ name, head }: ISectionTagProps) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center ">
          <Image src={iconLogo} alt="icon_" className="me-1 size-6" />
          <span className="font-light  ">{name}</span>
        </div>
        <h1 className="text-4xl my-4">{head}</h1>
      </div>

      <div>
        {name !== "TESTIMONIALS" ? (
          <button className="text-sm text-optixColor-optTextMuted hover:text-optixColor-opttitle transition-all ease-in-out duration-500">
            {"View All"}
          </button>
        ) : (
          <>
            <div className="flex">
              <ArrowLeftCircleIcon className="size-8 me-2" />
              <ArrowRightCircleIcon className="size-8 " />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SectionTag;
