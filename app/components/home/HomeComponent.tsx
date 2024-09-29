"use client";
import Image, { StaticImageData } from "next/image";
import PillButton from "../button/PillButton";
import Button from "../button/Button";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import ImageCardComponent from "../ImageCard/ImageCardComponent";

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

// import followerOne from "../../assets/images/home/followe_one.jpg";
// import followerTwo from "../../assets/images/home/followe_two.jpg";
// import followerThree from "../../assets/images/home/followe_three.jpg";

// const followerData = [
//   { id: 1, images: followerOne },
//   { id: 2, images: followerTwo },
//   { id: 3, images: followerThree },
// ];

/* 
interface IBannerProps {
  children: () => React.JSX.Element;
} */

const HomeComponent = () => {
  return (
    <>
      <div className="bg-optixColor-optbg text-optixColor-optTextMain">
        <div className="grid grid-cols-1  items-center max-w-screen-2xl mx-auto px-5 gap-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-screen-2xl mx-auto py-10">
            <BannerText />
            <ImageCardComponent />
          </div>
          <FollowerComponent />
          <GridPostCard />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;

const BannerText = () => {
  return (
    <div className="grid grid-cols-1 text-optixColor-optTextMain">
      <div className=" ">
        <PillButton text="Frames of distinction" uppercase="uppercase" />
      </div>
      <h1 className="md:text-6xl text-3xl max-w-screen-sm mt-5">
        Frame your world with eyewear fashion
      </h1>
      <p className="mt-5 max-w-screen-60 mb-4">
        From sophisticated frames to cutting-edge goggles, we've got everything
        you need to elevate your look and enhance your vision. Discover a world
        of eyewear excellence curated just for you.
      </p>
      <div>
        <Button />
      </div>
    </div>
  );
};

const FollowerComponent = () => {
  return (
    <div className="flex justify-between  items-center w-full ">
      <div className="flex items-center">
        {/*  <div class="mt-3 flex -space-x-2 overflow-hidden">
          <img
            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src={womenNonRing}
            alt="{user.handle}"
          />
        </div> */}

        <PillButton text="2.6M+ Followers" />
      </div>
      <p className="text-optixColor-optTextMain border-l border-black ps-4 max-w-60 ">
        Over 3,500 reviews validate our quality with 4.5 stars
      </p>
    </div>
  );
};

const GridPostCard = () => {
  return (
    <>
      <div className="grid grid-col-1 md:grid-cols-2 lg:col-span-1 gap-4 items-center mb-5">
        {gridPostCardData?.map((gridData) => (
          <div
            className={`flex justify-between items-center pt-10 px-10 
              ${gridData.background && `bg-[ ${gridData.background}]`}
            
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
                <ChevronRightIcon className="size-6 text-optixColor-optTextMain border border-black rounded-full p-1 ms-3 font-bold" />
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
