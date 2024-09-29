"use client";
// import Image from "next/image";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import HomeComponent from "./components/home/HomeComponent";
import LatestProducts from "./components/latest/LatestProducts";
import Featured, { FeaturedMainBanner } from "./components/featured/Featured";
import CustomerReview from "./components/customer/CustomerReview";
import Blogs from "./components/blogs/Blogs";
import GridPostCard from "./components/home/GridPostCard";

interface InavBar {
  id: number;
  name: string;
}

const navBar: InavBar[] = [
  { id: 1, name: "SHOP" },
  { id: 2, name: "OUR STORY" },
  { id: 3, name: "COLLECTION" },
  { id: 4, name: "REVIEW" },
  { id: 5, name: "BLOGS" },
  { id: 6, name: "CONTACT" },
];

export default function Home() {
  return (
    <>
      <NavBar nav={navBar} />
      <HomeComponent />
      <GridPostCard />
      <Featured />
      <FeaturedMainBanner />
      <LatestProducts />
      <CustomerReview />
      <Blogs />
      <Footer />
    </>
  );
}
