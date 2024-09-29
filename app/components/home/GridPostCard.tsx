import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

import menHoodie from "../../assets/images/home/menhoodie.png";
import womenRing from "../../assets/images/home/womenring.png";
import womenNonRing from "../../assets/images/home/womennonring.png";
import boyCurly from "../../assets/images/home/boycurly.png";

interface IgridPostCardData {
  id: number;
  title: string;
  type: string;
  price: number;
  context: string;
  image?: StaticImageData;
  span: number;
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
    span: 3,
    background: "#f1f4e1",
  },
  {
    id: 2,
    title: "On Sale",
    type: "Contact Lenses",
    price: 120.0,
    context: "EXPLORE COLLECTION",
    image: womenRing,
    span: 2,
    background: "#ebf0f4",
  },

  {
    id: 3,
    title: "Deals Good",
    type: "Sunglasses",
    price: 189.0,
    context: "BUY NOW",
    image: womenNonRing,
    span: 4,
    background: "#f5f1d5",
  },

  {
    id: 4,
    title: "Super Sale",
    type: "Computer Glassess",
    price: 229.0,
    context: "SHOP NOW",
    image: boyCurly,
    span: 4,
    background: "#f4e7de",
  },
];

const GridPostCard = () => {
  return (
    <>
      <div className="grid grid-col-1 md:grid-cols-2 lg:col-span-1 gap-4 items-center mb-5 mx-auto max-w-screen-2xl py-10">
        {gridPostCardData?.map((gridData) => (
          <div
            className={`flex justify-between items-center pt-10 px-10 

                md:grid md:grid-cols-2
                ${gridData.background}              
              `}
            key={gridData.id}
          >
            <div className="text-light">
              <h2 className="text-sm ">{gridData.title}</h2>
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
                className="object-cover  max-w-60"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridPostCard;
