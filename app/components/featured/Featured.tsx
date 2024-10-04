"use client";

import Image, { StaticImageData } from "next/image";
import Button from "../button/Button";
import SectionTag from "../sectionstag/SectionTag";
import ImageGlassess from "../ImageCard/ImageGlassess";
import clearVue from "../../assets/images/latestProducts/clearVue.jpg";
import slimFrame from "../../assets/images/latestProducts/SlimFrame.jpg";
import bronze from "../../assets/images/latestProducts/BronzePlated.jpg";
import rimSpectacle from "../../assets/images/latestProducts/RimSpectacle.jpg";
import homeFeatureCenterImage from "../../assets/images/home/homefeatured.jpg";
import featuredMain from "../../assets/images/featured/eyefeature.jpg";

interface PropsData {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
}
const data: PropsData[] = [
  { id: 1, image: clearVue, title: "ClearVue Vision", price: 110.0 },
  { id: 2, image: slimFrame, title: "ClearVue Vision", price: 126.0 },
  { id: 3, image: bronze, title: "ClearVue Vision", price: 165.0 },
  { id: 4, image: rimSpectacle, title: "ClearVue Vision", price: 220.0 },
];

const featuredData = [
  {
    id: 1,
    headings: "Clear vision in the digital age",
    slug: "In an era dominated by screens, it's imperative to safeguard our eyes from the harmful effects of digital devices.",
  },
  {
    id: 1,
    headings: "Screen savers for your eyes",
    slug: "Our curated eyewear collection serves as a shield against the harsh glare and harmful blue light emitted by devices.",
  },
  {
    id: 1,
    headings: "Anti-Glare Coating",
    slug: "Designed to reduce reflections and glare from digital screens, headlights, and other sources of bright light.",
  },
];

const Featured = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-5 py-10 ">
        <SectionTag name="SHOWCASE" head="Featured Glasses" />
        <div className="grid gird:cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center py-40 px-20">
          {data?.map((passProp) => (
            <ImageGlassess passProp={passProp} key={passProp.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;

export const FeaturedMainBanner = () => {
  return (
    <div className=" text-optixColor-optTextMain grid grid-cols-1 sm:grid-cols-2 items-center max-w-screen-2xl mx-auto relative h-full">
      <Image
        src={featuredMain}
        alt="featured_"
        className="h-full hidden sm:grid"
      />
      <FeatureSide />
      <div className="absolute top-[50%] left-[34%] scale-90">
        <Image
          src={homeFeatureCenterImage}
          alt="center_feature_"
          className="scale-50"
        />
      </div>
    </div>
  );
};

const FeatureSide = () => {
  return (
    <div className="flex flex-col justify-center items-center px-20 h-full bg-optixColor-optbg">
      <div className="flex w-full flex-col">
        <h1 className="text-3xl ">Smart Screen Solutions</h1>
        <p className="">Reducing eye strain and fatigue during extended use.</p>
      </div>
      <div>
        {featuredData?.map((featurePoints) => (
          <div
            className="border-b border-optixColor-optsecondary text-optixColor-optTextMain py-5"
            key={featurePoints.id}
          >
            <h2 className="text-xl font-extralight">
              {featurePoints.headings}
            </h2>
            <h3>{featurePoints.slug}</h3>
          </div>
        ))}
        <div className="flex justify-start w-full py-2">
          <Button text="EXPLORE PRODUCTS" variant="dark" />
        </div>
      </div>
    </div>
  );
};
