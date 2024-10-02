import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import ArrowButton from "../button/ArrowButton";

import protect from "../../assets/images/latestNews/protect.jpg";
import eyewear from "../../assets/images/latestNews/eyewear.jpg";
import behind from "../../assets/images/latestNews/behind.jpg";
import history from "../../assets/images/latestNews/history.jpg";
import benifits from "../../assets/images/latestNews/benifits.jpg";
import diywear from "../../assets/images/latestNews/Diyeyewear.jpg";

interface InewsProps {
  id: number;
  title: string;
  description: string;
  image?: StaticImageData;
}

const data: InewsProps[] = [
  {
    id: 1,
    title: "Trendy Eyewear",
    description:
      "Protect your peepers: the importance of UV-blocking sunglasses",
    image: protect,
  },
  {
    id: 2,
    title: "Visionary Style",
    description:
      "Eyewear for every adventure: choosing the right frames for your lifestyle",
    image: eyewear,
  },
  {
    id: 3,
    title: "Spectacle Trends",
    description:
      "Behind the lens: exploring the technology behind modern eyewear",
    image: behind,
  },
  {
    id: 4,
    title: "Fashion Focus",
    description:
      "The history of sunglasses: from ancient times to modern trends",
    image: history,
  },
  {
    id: 5,
    title: "Fashion Frames",
    description:
      "Behind the lens: exploring the technology behind modern eyewear",
    image: benifits,
  },
  {
    id: 6,
    title: "Eye Elegance",
    description:
      "DIY eyewear accessories: creative ways to customize your frames",
    image: diywear,
  },
];
const BlogsMain = () => {
  return (
    <>
      {data?.map((listItem) => (
        <>
          <div
            className="rounded-xl overflow-hidden border object-cover pb-5"
            id={listItem.id}
          >
            <Image
              src={listItem.image}
              alt="news_image"
              className="scale-100 object-cover"
            />
            <div className="flex flex-col justify-center items-center p-2">
              <span className="font-bold mb-5 p-1">{listItem.description}</span>
              <div className="flex justify-between items-center w-full pt-20">
                <div className="text-sm">
                  <h3>5 min</h3>
                  <h2>{listItem.title}</h2>
                </div>
                <ArrowButton
                  variant="single-right"
                  ClickHandle={() => alert("You Clicked!")}
                />
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default BlogsMain;
