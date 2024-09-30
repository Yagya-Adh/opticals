"use client";
import Image from "next/image";
import aboutContact from "../../assets/images/about/about.jpg";

const ContactDashImage = () => {
  return (
    <Image src={aboutContact} alt="contact_image" className="rounded-md" />
  );
};

export default ContactDashImage;
