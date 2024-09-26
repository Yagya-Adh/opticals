import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import optix from "../../assets/images/optix.svg";

interface INav {
  id: number;
  name: string;
}

const NavBar = ({ nav }: INav[]) => {
  return (
    <nav className=" bg-[#e0ebf4] border">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-10 py-5">
        <Image src={optix} height={80} width={160} alt="optix_logo" />
        <ul className="hidden lg:flex justify-between items-center">
          {nav.map((items) => (
            <li key={items.id} className="mx-1">
              {items.name}
            </li>
          ))}
        </ul>

        <div className="flex justify-between items-center ">
          <MagnifyingGlassIcon className="mx-1 size-6 text-black" />
          <UserIcon className="mx-1 size-6 text-black" />
          <ArchiveBoxIcon className="mx-1 size-6 text-black " />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
