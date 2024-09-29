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
    <div className="grid grid-cols-2 gap-x-5 w-full">
      {data?.map((lists) => (
        <div
          className="flex bg-rose-600 rounded-md relative overflow-hidden w-full"
          key={lists.id}
        >
          <Image
            src={lists.image}
            alt="home_card_"
            className="w-full object-cover"
          />
          <FooterWaterMarkForImage lists={lists.title} />
        </div>
      ))}
    </div>
  );
};

export default ImageCardComponent;

const FooterWaterMarkForImage = ({ lists }: string | object) => {
  return (
    <div className="absolute left-0 bottom-0 w-full p-4">
      <div className="flex items-center justify-between text-white font-bold">
        <h1 className="text-xl">{lists}</h1>
        <div className="flex items-center">
          <span className="me-2">{"DISCOVER"}</span>
          <ChevronRightIcon className="size-5 text-optixColor-optTextMain font-bold border rounded-full " />
        </div>
      </div>
    </div>
  );
};
