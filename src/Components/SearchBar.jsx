import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <section className="mt-10 mb-8">
      <div className="containerr">
        <form className="flex gap-x-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="running shoes"
              className="w-full h-14 bg-col-3 rounded pl-5 font-normal text-xl text-col-1 placeholder:text-col-1"
              id="searchBarIcon"
            />
            <label
              htmlFor="searchBarIcon"
              className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-5"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="xl"
                className="text-col-1"
              />
            </label>
          </div>
          <div className="w-fit max-sm:hidden">
            <button className="flex items-center gap-x-3 bg-col-2 rounded font-normal text-xl h-14 text-col-1 hover-1 tracking-[1.25px] px-4 whitespace-nowrap">
              <FontAwesomeIcon icon={faCartShopping} />
              View Cart
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
