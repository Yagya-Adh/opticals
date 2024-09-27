import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import men from "../../assets/images/home/men.jpg";
import women from "../../assets/images/home/women.jpg";

const data = [
  {
    id: 1,
    image: men,
    title: "Men",
  },
  {
    id: 2,
    image: women,
    title: "Women",
  },
];

const ImageCardComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {data?.map((lists) => (
        <div className="rounded-md relative overflow-hidden " key={lists.id}>
          <Image
            src={lists.image}
            alt="home_card_"
            className="w-full object-contain"
          />
          <FooterWaterMarkForImage lists={lists} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardComponent;

const FooterWaterMarkForImage = ({ lists }) => {
  return (
    <div className="absolute left-0 bottom-2 w-full">
      <div className="flex items-center justify-between text-white  text-sm">
        <div>{lists.title}</div>
        <div className="flex items-center">
          {"DISCOVER"}
          <ChevronRightIcon className="size-4 text-black border rounded-full p-1/4 font-bold" />
        </div>
      </div>
    </div>
  );
};
