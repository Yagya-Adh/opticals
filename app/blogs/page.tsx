"use client";
import React from "react";
import { StaticImageData } from "next/image";
import navRouts from "../router.json";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import HaveAnyQuestion from "../components/about/HaveAnyQuestion";
import SectionTag from "../components/sectionstag/SectionTag";
import ContactDashImage from "../components/image/ContactDashImage";
import BlogsMain from "../components/blogs/BlogsMain";

import protect from "../assets/images/latestNews/protect.jpg";
import eyewear from "../assets/images/latestNews/eyewear.jpg";
import behind from "../assets/images/latestNews/behind.jpg";
import history from "../assets/images/latestNews/history.jpg";
import benifits from "../assets/images/latestNews/benifits.jpg";
import diywear from "../assets/images/latestNews/Diyeyewear.jpg";
import Button from "../components/button/Button";

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

const Blog = () => {
  return (
    <>
      <NavBar nav={navRouts} />
      <div className="grid grid-cols-1 items-center max-w-screen-2xl mx-auto px-5 gap-y-20 py-10">
        <SectionTag name="BLOGS" head="News & Articles" view="no" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-3 gap-10">
          {data.map((newsItem) => (
            <BlogsMain newslist={newsItem} />
          ))}
        </div>
        <div className="flex justify-end">
          <Button text="NEXT" variant="next" />
        </div>

        <SectionTag name="FAQ'S" head="Have Any Questions?" view="no" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0">
          <HaveAnyQuestion />
          <ContactDashImage />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
