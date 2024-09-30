"use client";
import Image from "next/image";
import Link from "next/link";
import optixTwoLogo from "../../assets/images/optixTwo.svg";

interface Iheading2 {
  id: number;
  heads: string;
}

interface IfootergridData {
  id: number;
  heading1: string;
  heading2: Iheading2[];
}

const footergridData: IfootergridData[] = [
  {
    id: 1,
    heading1: "CATEGORIES",
    heading2: [
      { id: 1, heads: "Men’s Eyewear" },
      { id: 2, heads: "Women’s Eyewear" },
      { id: 3, heads: "Kid’s Glasses" },
      { id: 4, heads: "Computer Glasses" },
      { id: 5, heads: "Contact Lenses" },
      { id: 6, heads: "Sunglasses" },
    ],
  },

  {
    id: 2,
    heading1: "PAGES",
    heading2: [
      { id: 1, heads: "About" },
      { id: 2, heads: "Men’s Eyewear" },
      { id: 3, heads: "Blogs" },
      { id: 4, heads: "Reviews" },
      { id: 5, heads: "FAQs" },
      { id: 6, heads: " Stories" },
    ],
  },
  {
    id: 3,
    heading1: "RESOURCES",
    heading2: [
      { id: 1, heads: "PrivacyPolicy" },
      { id: 2, heads: "Terms & Customizs" },
      { id: 3, heads: "Return Policy" },
      { id: 4, heads: "License" },
    ],
  },
  {
    id: 4,
    heading1: "CONTACTS",
    heading2: [
      { id: 1, heads: "2972 Westheimer Rd. Santa Ana, Illinois 85486" },
      { id: 2, heads: "support@example.com" },
      { id: 3, heads: "(239) 555-0108" },
    ],
  },
];
const Footer = () => {
  return (
    <footer className=" bg-optixColor-optprimary text-optixColor-optTextPrimary">
      <div className="mx-auto px-10 py-5 flex flex-col max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* foot1 */}
          <FooterTopSection />
          {/* foot2 */}
          <FooterMidSection />
        </div>
        {/* foot3 */}
        <FooterEndSection />
        <FooterLast />
      </div>
    </footer>
  );
};

export default Footer;

const FooterTopSection = () => {
  return (
    <div className="flex flex-col text-sm">
      <h1 className="text-sm text-optixColor-optText">
        Optix Eyewear Pvt&#46; Ltd
      </h1>
      <p className="min-w-72 max-w-screen-2xl my-4">
        With a commitment to quality&#44; innovation&#44; and customer
        satisfaction&#44; we offer a curated collection of eyewear&#46;
      </p>
      <h2>info@example&#46;com</h2>
    </div>
  );
};
const FooterMidSection = () => {
  return (
    <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
      {footergridData.map((lists) => (
        <div className="" key={lists.id}>
          <h1 className="font-bold text-optixColor-optText leading-10">
            {lists.heading1}
          </h1>
          {lists.heading2.map((footerTwo) => (
            <div className=" " key={footerTwo.id}>
              <h2 className="text-sm leading-7"> {footerTwo.heads}</h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const FooterEndSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-10 mb-1">
      <Link href={"/"}>
        <Image src={optixTwoLogo} alt="optix_logo" width={160} height={160} />
      </Link>
      <div className="flex justify-between items-center p-2">
        <h1>Instagram</h1>
        <h2>Youtube</h2>
        <h3>Twitter</h3>
        <h4>LinkedIn</h4>
      </div>
    </div>
  );
};

const FooterLast = () => {
  return (
    <div className="flex flex-col justify-center sm:flex-row sm:justify-between border-t border-[#e5e7eb] text-center">
      <h2 className="py-2 max-w-96 text-sm">
        &copy; 2024 Optix&#46; Designed by Nixar&#46; Powered by Webflow&#46;
      </h2>
      <h3 className="py-2">Back To Top&#46;</h3>
    </div>
  );
};
