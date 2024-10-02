"use client";
import { StaticImageData } from "next/image";
import SectionTag from "../sectionstag/SectionTag";
// import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import MarqueeSlide from "./MarqueeSlide";
import protect from "../../assets/images/latestNews/protect.jpg";
import eyewear from "../../assets/images/latestNews/eyewear.jpg";
import behind from "../../assets/images/latestNews/behind.jpg";
import history from "../../assets/images/latestNews/history.jpg";
import benifits from "../../assets/images/latestNews/benifits.jpg";
import diywear from "../../assets/images/latestNews/Diyeyewear.jpg";
import ShareText from "../share/ShareText";
import BlogsMain from "./BlogsMain";

interface InewsProps {
  id: number;
  title: string;
  description: string;
  image?: StaticImageData;
}

// interface IPropLatest {
//   newslist: InewsProps;
// }

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

const NewsBlogSection = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-5 py-10">
        <SectionTag name="Blogs" head="Latest News" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {data.slice(0, 3).map((news) => (
            <BlogsMain newslist={news} key={news.id} />
          ))}
        </div>
        <ShareText />
      </div>
      <MarqueeSlide />
    </>
  );
};

export default NewsBlogSection;
