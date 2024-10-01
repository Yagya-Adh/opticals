"use client";
import Image, { StaticImageData } from "next/image";
import boyCurly from "../../assets/images/home/boycurly.png";
import womennonRing from "../../assets/images/home/womennonring.png";
import Button from "../button/Button";

interface PropsData {
  id: number;
  image?: StaticImageData;
  description: string;
  background: string;
}

const data: PropsData[] = [
  {
    id: 1,
    image: boyCurly,
    description: "Rogue refined embrace bold sophistication",
    background: "bg-[#e0ebf4]",
  },
  {
    id: 2,
    image: womennonRing,
    description: "Radiant rebel illuminate your individuality",
    background: "bg-[#f1f4e1]",
  },
];

const LatestCard = () => {
  return (
    <div className="grid gird-cols-1 md:grid-cols-2 gap-10 ">
      {data?.map((list) => (
        <div
          key={list.id}
          className={`
        border
        rounded-md items-center flex flex-col justify-center z-20  px-4  w-full pt-10
         ${list.background && list.background}
        `}
        >
          <div className="flex items-center">
            <div className="-z-10">
              <h1 className="text-xl py-2 min-w-60">{list.description}</h1>
              <Button text="SHOP NOW" variant="dark" />
            </div>
            <Image
              src={list.image}
              alt="card_image"
              className={`   
                 size-50 z-20 object-contain
              `}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestCard;
