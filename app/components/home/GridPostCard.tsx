import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";

import menHoodie from "../../assets/images/home/menhoodie.png";
import womenRing from "../../assets/images/home/womenring.png";
import womenNonRing from "../../assets/images/home/womennonring.png";
import boyCurly from "../../assets/images/home/boycurly.png";

interface IGridPassProps {
  gridPass?: string;
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
    background: "#f1f4e1",
  },
  {
    id: 2,
    title: "On Sale",
    type: "Contact Lenses",
    price: 120.0,
    context: "EXPLORE COLLECTION",
    image: womenRing,
    span: "lg:row-span-4",
    background: "#ebf0f4",
  },

  /* {
    id: 3,
    title: "Deals Good",
    type: "Sunglasses",
    price: 189.0,
    context: "BUY NOW",
    image: womenNonRing,
    span: "row-span-4",
    background: "#f5f1d5",
  },
  {
    id: 4,
    title: "Super Sale",
    type: "Computer Glassess",
    price: 229.0,
    context: "SHOP NOW",
    image: boyCurly,
    span: "row-span-4",
    background: "#f4e7de",
  }, */
];

const GridPostCard = () => {
  return (
    <div className=" mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-1  col-span-3">
        <BlogCardGroup gridColPass="" />
        {/* <BlogCardGroup
          gridPass="lg:grid-cols-1 scale-50"
          width="flex flex-row "
        /> */}
      </div>
    </div>
  );
};

export default GridPostCard;

const BlogCardGroup = ({ gridPass }: IGridPassProps) => {
  return (
    <div>
      <div className="sub-grid-cols-2 grid bg-rose-200 p-10 col-span-3">
        <div>hello</div> <div>hello</div>
      </div>
      <div className="sub-grid-cols-4 grid bg-rose-500 p-10">
        <div>hello</div> <div>hello</div>
      </div>
    </div>
  );
};
/*  <div
      className={`
        gap-4 grid md:grid-cols-2 p-5      
        ${gridPass && gridPass}
            
        `}
    >
      {gridPostCardData?.map((gridData) => (
        <div
          className={`   
                flex  lg:items-center lg:flex-col
                md:flex-row items-end
               bg-rose-300                  
          `}
          key={gridData.id}
        >
          <div className="text-light  ">
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
    </div> */
