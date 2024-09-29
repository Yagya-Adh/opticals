"use client";
import Image, { StaticImageData } from "next/image";
import SectionTag from "../sectionstag/SectionTag";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

import protect from "../../assets/images/latestNews/protect.jpg";
import eyewear from "../../assets/images/latestNews/eyewear.jpg";
import behind from "../../assets/images/latestNews/behind.jpg";
import Marquee from "./Marquee";

interface InewsProps {
  id: number;
  title: string;
  description: string;
  image?: StaticImageData;
}

interface IPropLatest {
  newslist: InewsProps[];
  key: number;
}

const data: InewsProps[] = [
  {
    id: 1,
    title: "Trendy Eyewear",
    description:
      "Protect your peepers the importance of uv-blocking sunglasses",
    image: protect,
  },
  {
    id: 2,
    title: "Visionary Style",
    description:
      "Eyewear for every adventure choosing the right frames for your lifestyle",
    image: eyewear,
  },
  {
    id: 3,
    title: "Spectacle Trends",
    description:
      "Behind the lens exploring the technology behind modern eyewear",
    image: behind,
  },
];
const Blogs = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto px-5 py-10">
      <SectionTag name="Blogs" head="Lastest News" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {data?.map((newslist) => (
          <LatestNews newslist={newslist} key={newslist.id} />
        ))}
      </div>
      <BottomNewsComponent />
      <Marquee />
    </div>
  );
};

export default Blogs;

const LatestNews = ({ newslist, key }: IPropLatest | object) => {
  return (
    <>
      <div
        className="rounded-xl overflow-hidden border object-cover pb-5"
        key={key}
      >
        <Image
          src={newslist.image}
          alt="news_image"
          className=" scale-100 object-cover"
        />
        <div className="flex flex-col justify-center items-center p-2">
          <span className="font-bold mb-5 p-1">{newslist.description}</span>
          <div className="flex justify-between items-center w-full pt-20">
            <div className="text-sm ">
              <h3 className="">5 min</h3>
              <h2 className="">{newslist.title}</h2>
            </div>
            <button>
              <ArrowRightCircleIcon className="size-10  hover:bg-optixColor-optbody  rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const BottomNewsComponent = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 ">
      <h1 className="text-3xl">{`Share your stylish moments with #wearoptix`}</h1>
      <p className="text-center max-w-screen-md min-w-60">
        {`From everyday elegance to standout looks, show off how you rock your
        Optix eyewear. Join the conversation and be part of our vibrant
        community of style mavens! #wearoptix"`}
      </p>
    </div>
  );
};
