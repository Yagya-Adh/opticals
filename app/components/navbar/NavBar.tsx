"use client";
import {
  ArchiveBoxIcon,
  MagnifyingGlassIcon,
  UserIcon,
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
        <div className="absolute h-screen w-screen z-20 max-w-screen-2xl top-0">
          <div className="max-w-screen-2xl h-full w-full flex justify-center items-center">
            <div className="h-full w-full  max-w-screen-2xl bg-black opacity-70 p-20 "></div>
            <div className="absolute z-20 bg-white w-1/3 h-1/3  flex flex-col">
              <div className="p-5 text-black flex justify-between items-center border bottom-2">
                <h1 className=" text-2xl">Your Cart</h1>
                <button onClick={() => setPop(!pop)} className="text-2xl">
                  X{" "}
                </button>
              </div>
              <div className="items-center  justify-center flex flex-col h-full">
                <p className="text-xl font-bold ">Not items found.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
