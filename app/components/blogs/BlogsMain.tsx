import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

interface InewsProps {
  id: string | undefined;
  title: ReactNode | string;
  description: string;
  image?: any;
}

interface IPropLatest {
  newslist: InewsProps;
  key: string;
}

const BlogsMain = ({ newslist, key }: IPropLatest) => {
  return (
    <div
      className="rounded-xl overflow-hidden border object-cover pb-5"
      id={key}
    >
      <Image
        src={newslist.image}
        alt="news_image"
        className="scale-100 object-cover"
      />
      <div className="flex flex-col justify-center items-center p-2">
        <span className="font-bold mb-5 p-1">{newslist.description}</span>
        <div className="flex justify-between items-center w-full pt-20">
          <div className="text-sm">
            <h3>5 min</h3>
            <h2>{newslist.title}</h2>
          </div>
          <button>
            <ArrowRightCircleIcon className="size-10 hover:bg-optixColor-optbody rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsMain;
