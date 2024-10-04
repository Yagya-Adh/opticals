"use clinet";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface ISearchProp {
  handleSearchSubmit: () => void;
  handleSearchPop: () => void;
}
const SearchBox = ({ handleSearchSubmit, handleSearchPop }: ISearchProp) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="flex justify-between items-center relative rounded-full border border-black py-1">
        <MagnifyingGlassIcon className="mx-2 h-6 w-6 text-stone-600 absolute" />
        <input
          type="text"
          placeholder="Search..."
          className="rounded-3xl focus:outline-none ms-10 p-1 text-black"
          required
        />
        <h1
          onClick={handleSearchPop}
          className=" h-6 w-6 text-black absolute right-1"
        >
          X
        </h1>
      </div>
    </form>
  );
};

export default SearchBox;
