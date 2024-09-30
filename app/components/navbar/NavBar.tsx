import {
  ArchiveBoxIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import optix from "../../assets/images/optix.svg";

interface INavItem {
  id: number;
  name?: string;
  route?: string;
}

interface NavBarProps {
  nav: INavItem[];
}

const NavBar = ({ nav }: NavBarProps) => {
  return (
    <nav className="bg-[#e0ebf4] border-b border-optixColor-optbackground ">
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
        <div className="flex justify-between items-center">
          <MagnifyingGlassIcon className="mx-1 h-6 w-6 text-black" />
          <UserIcon className="mx-1 h-6 w-6 text-black" />
          <ArchiveBoxIcon className="mx-1 h-6 w-6 text-black" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
