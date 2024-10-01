import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

import menHoodie from "../../assets/images/home/menhoodie.png";
import womenRing from "../../assets/images/home/womenring.png";
import womenNonRing from "../../assets/images/home/womennonring.png";
import boyCurly from "../../assets/images/home/boycurly.png";

interface IGridPassProps {
  gridPass?: string;
  variant: string;
}

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
const gridPostCardData: IgridPostCardData[] = [
  {
    id: 1,
    title: "New Arrivals",
    type: "Men's Eyewear",
    price: 149.0,
    context: "SHOP NOW",
    image: menHoodie,
    span: "lg:row-span-4",
    background: "bg-[#f1f4e1]",
  },
  {
    id: 2,
    title: "On Sale",
    type: "Contact Lenses",
    price: 120.0,
    context: "EXPLORE COLLECTION",
    image: womenRing,
    span: "lg:row-span-4",
    background: "bg-[#ebf0f4]",
  },

  {
    id: 3,
    title: "Deals Good",
    type: "Sunglasses",
    price: 189.0,
    context: "BUY NOW",
    image: womenNonRing,
    span: "row-span-4",
    background: "bg-[#f5f1d5]",
  },
  {
    id: 4,
    title: "Super Sale",
    type: "Computer Glassess",
    price: 229.0,
    context: "SHOP NOW",
    image: boyCurly,
    span: "row-span-4",
    background: "bg-[#f4e7de]",
  },
];

const GridPostCard = () => {
  return (
    <div className="py-20 max-w-screen-2xl mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:col-span-1">
          {gridPostCardData?.slice(0, 2).map((gridData) => (
            <BlogCardGroup
              gridData={gridData}
              variant="flex lg:items-center lg:flex-col lg:justify-end 
                md:flex-row items-end"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:col-span-1">
          {gridPostCardData?.slice(2, 4).map((gridData) => (
            <BlogCardGroup
              gridData={gridData}
              variant="flex p-10 pb-0 items-end justify-between"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridPostCard;

const BlogCardGroup = ({ gridData, variant }: IGridPassProps) => {
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
        key={gridData.id}
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
