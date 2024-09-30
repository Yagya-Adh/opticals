"use client";
// import Image from "next/image";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import HomeComponent from "./components/home/HomeComponent";
import LatestProducts from "./components/latest/LatestProducts";
import Featured, { FeaturedMainBanner } from "./components/featured/Featured";
import CustomerReview from "./components/customer/CustomerReview";
import NewsBlogSection from "./components/blogs/NewsBlogSection";
import GridPostCard from "./components/home/GridPostCard";
import navRouts from "./router.json";

export default function Home() {
  return (
    <>
      <NavBar nav={navRouts} />
      <HomeComponent />
      <GridPostCard />
      <Featured />
      <FeaturedMainBanner />
      <LatestProducts />
      <CustomerReview />
      <NewsBlogSection />
      <Footer />
    </>
  );
}
