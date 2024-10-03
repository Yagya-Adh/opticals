"use client";
import PillButton from "../button/PillButton";
import Button from "../button/Button";
import ImageCardComponent from "../ImageCard/ImageCardComponent";

const HomeComponent = () => {
  return (
    <>
      <div className="bg-optixColor-optbg text-optixColor-optTextMain py-20">
        <div className="grid grid-cols-1  items-center max-w-screen-2xl mx-auto px-5 gap-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-screen-2xl mx-auto py-10">
            <BannerText />
            <ImageCardComponent />
          </div>
          <FollowerComponent />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;

const BannerText = () => {
  return (
    <div className="grid grid-cols-1 text-optixColor-optTextMain">
      <div className=" ">
        <PillButton
          text="Frames of distinction"
          uppercase="uppercase"
          varriant="primary"
        />
      </div>
      <h1 className="md:text-6xl text-3xl max-w-screen-sm mt-5">
        Frame your world with eyewear fashion
      </h1>
      <p className="mt-5 max-w-screen-60 mb-4">
        From sophisticated frames to cutting-edge goggles, we&lsquo;ve got
        everything you need to elevate your look and enhance your vision.
        Discover a world of eyewear excellence curated just for you.
      </p>
      <div>
        <Button text="SHOP NOW" variant="dark" />
      </div>
    </div>
  );
};

const FollowerComponent = () => {
  return (
    <div className="flex justify-between  items-center w-full ">
      <div className="flex items-center">
        {/*  <div class="mt-3 flex -space-x-2 overflow-hidden">
          <img
            class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src={womenNonRing}
            alt="{user.handle}"
          />
        </div> */}

        <PillButton text="2.6M+ Followers" varriant="primary" />
      </div>
      <p className="text-optixColor-optTextMain border-l border-black ps-4 max-w-60 ">
        Over 3,500 reviews validate our quality with 4.5 stars
      </p>
    </div>
  );
};
