"use client";
import Image, { StaticImageData } from "next/image";
import stayJPG from "../../assets/images/about/stay/stay.jpg";
import virtualJPG from "../../assets/images/about/stay/virtual.jpg";
import Button from "../button/Button";
interface IDataStay {
  id: number;
  title: string;
  describe: string;
  image: StaticImageData;
  size: string;
  spanCol: string;
  isButtonAvailable: Boolean;
}
const data: IDataStay[] = [
  {
    id: 1,
    title: "Stay ahead of eye health",
    describe:
      "Experience the future of eyewear shopping with our innovative Virtual Try-On feature.",
    image: stayJPG,
    size: "md:scale-110",
    spanCol: "md:col-span-3",
    isButtonAvailable: true,
  },
  {
    id: 2,
    title: "Try on glasses virtually",
    describe:
      "Experience the future of eyewear shopping with our innovative Virtual Try-On feature.",

    image: virtualJPG,
    size: "md:scale-90",
    spanCol: "md:col-span-2",
    isButtonAvailable: false,
  },
];

const StayAheadSection = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center ">
          {data?.map((stay) => (
            <div className={` relative ${stay.spanCol}`} key={stay.id}>
              <Image
                src={stay.image}
                alt="stay_"
                className={`${stay.size} rounded-md `}
              />
              <div className="absolute top-0 text-white p-10 flex flex-col">
                <div>
                  <h1 className="text-4xl">{stay.title}</h1>
                  <p className="font-sans max-w-96 py-2">{stay.describe}</p>
                  {stay.isButtonAvailable && (
                    <Button text="SCHEDUL NOW" variant="primay-white" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StayAheadSection;
