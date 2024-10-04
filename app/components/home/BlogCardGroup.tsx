"use client";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Image, { StaticImageData } from "next/image";

interface IgridPostCardData {
  id: number;
  title: string;
  type: string;
  price: number;
  context: string;
  image?: StaticImageData;
  span: string;
  background: string;
}
interface IGridPassProps {
  key: number;
  gridData: IgridPostCardData;
  variant: string;
}
const BlogCardGroup = ({ gridData, variant, key }: IGridPassProps) => {
  return (
    <>
      <div
        className={`   
                 rounded-md
                        ${
                          gridData.background && gridData.background
                        }                        
                        ${variant && variant}
            `}
        key={key}
      >
        <div className="text-light lg:pb-20">
          <h2 className="text-sm">{gridData.title}</h2>
          <h3 className="text-2xl font-medium ">{gridData.type}</h3>
          <h4 className="text-optixColor-optTextMain font-light opacity-80">
            From ${gridData.price}
          </h4>
          <span className="font-medium flex items-center leading-10 min-w-screen-60">
            {gridData.context}
            <ChevronRightIcon className="size-6 text-optixColor-optTextMain border border-optixColor-opttitle hover:bg-optixColor-opttitle rounded-full p-1 ms-3 font-bold" />
          </span>
        </div>
        <div>
          <Image
            src={gridData.image}
            alt="grid_image"
            className="object-cover max-w-60"
          />
        </div>
      </div>
    </>
  );
};

export default BlogCardGroup;
