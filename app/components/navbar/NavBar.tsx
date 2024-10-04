"use client";
import { useState } from "react";
import {
  ArchiveBoxIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import optix from "../../assets/images/optix.svg";
import Modal from "../modal/Modal";
import SearchBox from "../search/SearchBox";
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

  const handleSearchPop = () => {
    setSearchPop(!searchPop);
  };

  const handleSearchSubmit = () => {
    alert("Searching....");
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
                <SearchBox
                  handleSearchSubmit={handleSearchSubmit}
                  handleSearchPop={handleSearchPop}
                />
              </div>
            )}
            <button onClick={handleSearchPop}>
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
          <Modal handlePopUp={handlePopUp} />
        </div>
      )}
    </>
  );
};

export default NavBar;
