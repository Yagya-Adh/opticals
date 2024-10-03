"use client";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import optixTwoLogo from "../../assets/images/optixTwo.svg";
import footerDATA from "../../../footer.json";
interface Iheading2 {
  id: number;
  heads: string;
}

interface IfootergridData {
  id: number;
  heading1: string;
  heading2: Iheading2[];
}

const footergridData: IfootergridData[] = footerDATA;
const Footer = () => {
  return (
    <footer className=" bg-optixColor-optprimary text-optixColor-optTextPrimary">
      <div className="mx-auto px-10 py-5 flex flex-col max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FooterTopSection />
          <FooterMidSection />
        </div>
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
              <h2 className="text-sm leading-7 hover:text-white">
                {footerTwo.heads}
              </h2>
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
        <h1 className="mx-1 text-sm  hover:text-white">Instagram</h1>
        <h2 className="mx-1 text-sm  hover:text-white">Youtube</h2>
        <h3 className="mx-1 text-sm  hover:text-white">Twitter</h3>
        <h4 className="mx-1 text-sm  hover:text-white">LinkedIn</h4>
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
      <Link href={"/"}>
        <h3 className="py-2 hover:text-white text-sm flex items-center">
          <ArrowUpIcon className="size-4 animate-bounce" />
          BackTo Top&#46;
        </h3>
      </Link>
    </div>
  );
};
