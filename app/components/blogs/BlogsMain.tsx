"use client";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import ArrowButton from "../button/ArrowButton";

interface InewsProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}
interface IBlogsMain {
  newslist: InewsProps[];
}
const BlogsMain = ({ newslist }: IBlogsMain) => {
  return (
    <>
      {newslist?.map((listItem) => (
        <>
          <div
            className="rounded-xl overflow-hidden border object-cover pb-5"
            key={listItem.id}
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
