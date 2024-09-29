"use client";
import Image, { StaticImageData } from "next/image";
// import clearVue from "../../assets/images/iconGlassess.svg";

interface IpropsItms {
  id: number;
  image?: StaticImageData | HTMLImageElement;
  title: string;
  price: number;
}

interface IPassProps {
  passProp: IpropsItms;
  key: number;
}

const ImageGlassess = ({ passProp, key }: IPassProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center border hover:border-black transition-all ease-in-out duration-500  relative"
      key={key}
    >
      <Image
        src={passProp.image}
        alt="latest_glasses_"
        className=" object-cover scale-90 hover:scale-95 transition-all ease-in-out duration-500 "
      />
      <div className="flex-col flex justify-center items-center absolute bottom-2">
        <h1 className="font-bold">{passProp.title}</h1>
        <h2>
          $ <span className="text-sm ">{passProp.price} USD</span>
        </h2>
      </div>
    </div>
  );
};

export default ImageGlassess;
