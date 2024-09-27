"use client";
import React from "react";
import PillButton from "../button/PillButton";
import Button from "../button/Button";
import ImageCardComponent from "../ImageCard/ImageCardComponent";

// import followerOne from "../../assets/images/home/followe_one.jpg";
// import followerTwo from "../../assets/images/home/followe_two.jpg";
// import followerThree from "../../assets/images/home/followe_three.jpg";

// const followerData = [
//   { id: 1, images: followerOne },
//   { id: 2, images: followerTwo },
//   { id: 3, images: followerThree },
// ];

const HomeComponent = () => {
  return (
    <div className="bg-optixColor-optbg">
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center max-w-screen-2xl mx-auto ps-10">
        <div className="grid grid-cols-1 ">
          <div className=" ">
            <PillButton text="Frames of distinction" uppercase="uppercase" />
          </div>
          <h1 className="md:text-6xl text-3xl max-w-screen-sm mt-5">
            Frame your world with eyewear fashion
          </h1>
          <p className="mt-5 max-w-screen-60">
            From sophisticated frames to cutting-edge goggles, we've got
            everything you need to elevate your look and enhance your vision.
            Discover a world of eyewear excellence curated just for you.
          </p>
          <div className="mt-2">
            <Button />
          </div>
        </div>
        <ImageCardComponent />
        <div className="">
          <PillButton text="2.6M+ Followers" />
        </div>
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
};

export default HomeComponent;
