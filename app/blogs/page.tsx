"use client";
import React from "react";
import navRouts from "../router.json";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import HaveAnyQuestion from "../components/about/HaveAnyQuestion";
import SectionTag from "../components/sectionstag/SectionTag";
import ContactDashImage from "../components/image/ContactDashImage";
import BlogsMain from "../components/blogs/BlogsMain";
import Button from "../components/button/Button";

const Blog = () => {
  return (
    <>
      <NavBar nav={navRouts} />
      <div className="grid grid-cols-1 items-center max-w-screen-2xl mx-auto px-5 gap-y-20 py-10">
        <SectionTag name="BLOGS" head="News & Articles" view="no" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:lg:grid-cols-3 gap-10">
          <BlogsMain />
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
