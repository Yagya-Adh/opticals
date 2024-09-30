"use client";
import React from "react";
import navRouts from "../router.json";
import NavBar from "../components/navbar/NavBar";
import SectionTag from "../components/sectionstag/SectionTag";
import SubmitForm from "../components/form/SubmitForm";
import HaveAnyQuestion from "../components/about/HaveAnyQuestion";
import Footer from "../components/footer/Footer";
import Marquee from "../components/blogs/Marquee";
import ShareText from "../components/share/ShareText";
import ContactDashImage from "../components/image/ContactDashImage";

const ContactUs = () => {
  return (
    <>
      <NavBar nav={navRouts} />
      <div className="grid grid-cols-1 items-center max-w-screen-2xl mx-auto px-5 gap-y-20 py-10">
        <SectionTag name="GET IN TOUCH" head="Contact us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <SubmitForm
            onSubmitHand={(e) => {
              e.preventDefault();
              alert("form submitted");
            }}
          />
          <RightSideContact />
        </div>
        <SectionTag name="FAQ'S" head="Have Any Questions?" view="no" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0">
          <HaveAnyQuestion />
          <ContactDashImage />
        </div>
        <ShareText />
        <Marquee />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

const RightSideContact = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      <div className=" grid grid-cols-1">
        <h1 className="text-3xl">Let’s Connect</h1>
        <p className="text-gray-700 py-4">
          Feel free to reach out to us via phone, email, or the contact form
          below. Our friendly and knowledgeable representatives are available
          during business hours to provide personalized assistance.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 py-10">
        <div className="flex flex-col">
          <h2 className="text-xl">Location</h2>
          4517 Washington Ave. Manchester, Kentucky 39495
        </div>
        <div className="flex flex-col">
          <h4 className="text-xl">Connect with us</h4>
          info@example.com (480) 555-0108
        </div>
      </div>
      <div className="flex justify-between w-full items-center">
        <h5 className="text-xl">Follow on us:</h5>
        <div>LOGO HERE*******</div>
      </div>
    </div>
  );
};
