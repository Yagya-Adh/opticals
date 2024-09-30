import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";

interface InewsProps {
  id: number;
  title: string;
  description: string;
  image?: StaticImageData | string | StaticImport;
}

interface IPropLatest {
  newslist: InewsProps;
}

const BlogsMain = ({ newslist }: IPropLatest) => {
  return (
    <div
      className="rounded-xl overflow-hidden border object-cover pb-5"
      id={newslist.id}
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
