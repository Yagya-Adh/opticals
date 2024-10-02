"use client";
import {
  ArchiveBoxIcon,
  MagnifyingGlassIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import optix from "../../assets/images/optix.svg";
import { useState } from "react";
interface INavItem {
  id: number;
  name?: string;
  route?: string;
}

interface NavBarProps {
  nav: INavItem[];
}

const NavBar = ({ nav }: NavBarProps) => {
  const [searchPop, setSearchPop] = useState(false);
  const [pop, setPop] = useState(false);
  const handlePopUp = () => {
    setPop(!pop);
  };

  const handleSearch = () => {
    setSearchPop(!searchPop);
  };
  return (
    <>
      <nav className="border-b border-optixColor-optbackground ">
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto py-5 px-10 ">
          <Link href={"/"}>
            <Image src={optix} height={80} width={160} alt="optix_logo" />
          </Link>

          {/* Navigation items */}
          <ul className="hidden lg:flex justify-between items-center">
            {nav.map((item) => (
              <li key={item.id} className="mx-1 px-4 text-sm">
                <Link href={"/" + item.route}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Icons Section */}
          <div className="flex justify-around items-center relative">
            {searchPop && (
              <div className="absolute right-20">
                <div className="flex justify-between items-center relative rounded-full border border-black py-1">
                  <MagnifyingGlassIcon className="mx-2 h-6 w-6 text-stone-600 absolute" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="rounded-3xl focus:outline-none ms-10 p-1 text-black"
                  />
                  <h1
                    onClick={handleSearch}
                    className=" h-6 w-6 text-black absolute right-1"
                  >
                    X
                  </h1>
                </div>
              </div>
            )}
            <button onClick={handleSearch}>
              <MagnifyingGlassIcon className="mx-1 h-6 w-6 text-black" />
            </button>
            <Link href={"sign-up"}>
              <UserIcon className="h-6 w-6 text-black mx-4" />
            </Link>
            <button onClick={handlePopUp}>
              <ArchiveBoxIcon className="mx-1 h-6 w-6 text-black" />
            </button>
          </div>
        </div>
      </nav>
      {pop && (
        <div className="absolute top-0 left-0 inset-0 w-full z-20">
          <div
            className="h-full w-full bg-black opacity-70 p-20"
            onClick={handlePopUp}
          ></div>

          <div className="absolute top-[40%] left-[40%] rounded-xl overflow-hidden bg-white to-black w-1/3  h-1/3">
            <div className="flex justify-between border py-3 px-2 text-3xl">
              <h1>Your Cart</h1>
              <button onClick={handlePopUp}>
                <XMarkIcon className="size-5" />
              </button>
            </div>
            <div className="flex justify-center items-center h-full">
              <p className="font-bold font-sans">No items found.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
