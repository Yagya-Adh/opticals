import Image, { StaticImageData } from "next/image";
// import HaveAnyQuestion from "../components/about/HaveAnyQuestion";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
// import ContactDashImage from "../components/image/ContactDashImage";
import NavBar from "../components/navbar/NavBar";
import SectionTag from "../components/sectionstag/SectionTag";
import ShopCart from "../components/shop/ShopCart";
import navRouts from "../router.json";
import smileeWomen from "../assets/images/about/smileLabAssistance.jpg";
import featuredWomen from "../assets/images/about/featuredGlassesWomen.jpg";

import innoviateGa from "../assets/images/about/whatdifferent/innovation.jpg";
import customerGa from "../assets/images/about/whatdifferent/customerservice.jpg";
import ecoFriendGa from "../assets/images/about/whatdifferent/ecofriendly.jpg";
import PillButton from "../components/button/PillButton";
import visionImage from "../assets/images/about/whatdifferent/vision&mission.jpg";
import HaveAnyQuestion from "../components/about/HaveAnyQuestion";
import ContactDashImage from "../components/image/ContactDashImage";

interface mainProps {
  id: number;
  title: string;
  description: string;
  image?: string | StaticImageData;
  order: string;
  padding: string;
  isSection: boolean;
  isButton: boolean;
}
const data: mainProps[] = [
  {
    id: 1,
    title: "Passion for precision, dedication to style.",
    image: smileeWomen,
    order: "order-3",
    padding: "scale-95",
    isSection: true,
    isButton: false,
    description:
      " Founded with a vision to redefine eyewear, we embarked on a journey to blend innovation with style, crafting frames that not only enhance   vision but also reflect individuality.",
  },
  {
    id: 2,
    title: "Founded in 2010",
    image: featuredWomen,
    order: "order-1",
    padding: "p-0",
    isSection: false,
    isButton: true,
    description:
      "Inspired by the fusion of fashion and function, we set out to create a brand that celebrates individuality and empowers self-expression. With a relentless focus on quality and innovation, we've cultivated a collection that embodies our values of style.",
  },
];
interface ImakeProp {
  id: number;
  title: string;
  image: StaticImageData;
  describe: string;
  contact: string | number;
}

const makeData: ImakeProp = [
  {
    id: 1,
    title: "Innovative Eyewear Technology",
    describe:
      "From advanced lens coatings to precision frame designs, our innovative solutions redefine clarity, comfort, and style for the modern wearer.",

    image: innoviateGa,
    contact: "(808) 555-0111",
  },
  {
    id: 2,
    title: "Customer Service",
    describe:
      "Excellence in service, tailored to you. Our dedicated team is here to ensure your experience is seamless from start to finish.",
    image: customerGa,
    contact: "(808) 555-0112",
  },
  {
    id: 3,
    title: "Eco Friendly Practices",
    describe:
      "Our eco-friendly practices prioritize the planet while offering you stylish and conscientious eyewear choices.",
    image: ecoFriendGa,
    contact: "(808) 555-0113",
  },
];

const About = () => {
  return (
    <>
      <NavBar nav={navRouts} />
      <div className="grid grid-cols-1 items-center max-w-screen-2xl mx-auto px-5 gap-y-20 py-10">
        <div className="grid  grid-cols-1 md:grid-cols-2 ">
          <AboutUsMain />
        </div>

        <SectionTag name="INNOVATION" head="What make us different" view="no" />
        <div>
          <WhatDifferent />
        </div>
        <VisionToServe />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0">
          <HaveAnyQuestion />
          <ContactDashImage />
        </div>
        <ShopCart />
      </div>
      <Footer />
    </>
  );
};

export default About;

const AboutUsMain = () => {
  return (
    <>
      {data?.map((list) => (
        <div
          className={`flex flex-col justify-center ${list.padding}`}
          key={list.id}
        >
          <div className="py-5 order-2">
            {list.isSection && (
              <SectionTag name="ABOUT US" head="Our Story" view="no" />
            )}

            <h1 className="text-xl py-2">{list.title}</h1>
            <p className="font-sans max-w-screen-sm">{list.description}</p>
            {list.isButton && (
              <div className="py-5">
                <Button text="EXPLORE CATEGORIES" variant="primary" />
              </div>
            )}
          </div>
          <div className={`flex flex-col ${list.order}`}>
            <Image src={list.image} alt="our_story" className="rounded-md" />
          </div>
        </div>
      ))}
    </>
  );
};

/* what makes us diffeeeremt */

const WhatDifferent = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-20 ">
        {makeData?.map((listing) => (
          <div
            className="grid grid-cols-1 items-center rounded-md relative overflow-hidden z-20"
            key={listing.id}
          >
            <Image
              src={listing.image}
              alt="different_"
              className="rounded-md group"
            />
            {/*   <h1 className="px-4 text-2xl bg-optixColor-optPrimaryBg absolute bottom-0 w-full hidden ">
            {listing.title}
          </h1> */}
            <div className="flex flex-col justify-center px-4 pb-20   rounded-md bg-optixColor-optPrimaryBg group-hover:-translate-y-full hover:py-32 items-start z-10 sticky bottom-0">
              <h1 className="text-2xl translate-y-0   ">{listing.title}</h1>
              <p className="py-5 border-b">{listing.describe}</p>
              <div className="py-4">
                <h2 className="text-xl">Mailbox</h2>
                <span className="text-gray-500 hover:underline text-sm">
                  hello@example.io
                </span>
              </div>
              <div>
                <h3 className="text-xl">Contact</h3>
                <span className="text-gray-500 hover:underline text-sm">
                  {listing.contact}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const VisionToServe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <Image
        src={visionImage}
        alt="vision_"
        className="object-cover rounded-md scale-90"
      />
      <Vision />
    </div>
  );
};

const Vision = () => {
  return (
    <div className="flex flex-col p-20">
      <h1 className="text-3xl">Our Vision & Mission</h1>
      <p className="font-sans py-4">
        We aim to create a world where everyone has access to exceptional
        eyewear that not only enhances their vision but also reflects their
        unique style and personality revolutionize eyewear.
      </p>
      <p className="font-sans py-4">
        Through relentless innovation and unwavering dedication, we&lsquo;re on
        a mission to make premium eyewear accessible to all.
      </p>
      <div className="flex w-full">
        <div className="me-1">
          <PillButton text="Innovation" varriant="primary-plus" />
        </div>

        <div className="me-1">
          <PillButton text="Empowerment" varriant="primary-plus" />
        </div>
      </div>
      <div className="py-10">
        <Button text="CONTACT US" variant="primary" />
      </div>{" "}
    </div>
  );
};
