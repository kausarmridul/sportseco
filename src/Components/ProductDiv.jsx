import {
  faAngleUp,
  faArrowDownWideShort,
  faChevronLeft,
  faChevronRight,
  faFilter,
  faRightLong,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductItem from "./ProductItem";

function ProductDiv() {
  return (
    <section>
      <div className="containerr grid lg:grid-cols-12 gap-x-6 mb-20">
        <div className="lg:col-span-3 max-lg:hidden border-r border-col-4 pr-12">
          <div className="pb-6 border-b border-col-4">
            <h3 className="font-montserrat font-normal text-2xl leading-6 text-col-1">
              <span>
                <FontAwesomeIcon
                  icon={faFilter}
                  className="mr-2 inline-block"
                />
              </span>
              Filters
            </h3>
          </div>
          <div className="pt-4 pb-6 border-b border-col-4">
            <div className="flex justify-between mb-4 items-center">
              <h4
                className="font-montserrat
               font-normal leading-6 text-base tracking-[0.15px] text-col-1"
              >
                Applied Filters
              </h4>
              <a
                href="#"
                className="font-medium text-xs tracking-[0.4px] text-col-1 underline"
              >
                clear all
              </a>
            </div>
            <ul className="flex items-center flex-wrap gap-2">
              <li>
                <a
                  href="#"
                  className="bg-col-3 font-normal text-[13px] leading-6 tracking-[0.25px] text-col-1 px-1 rounded-sm flex items-center gap-x-1 w-fit"
                >
                  All{" "}
                  <span>
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-col-3 font-normal text-[13px] leading-6 tracking-[0.25px] text-col-1 px-1 rounded-sm flex items-center gap-x-1 w-fit"
                >
                  Running Shoes{" "}
                  <span>
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-col-3 font-normal text-[13px] leading-6 tracking-[0.25px] text-col-1 px-1 rounded-sm flex items-center gap-x-1 w-fit"
                >
                  Red{" "}
                  <span>
                    <FontAwesomeIcon icon={faXmark} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-4 pb-4 border-b border-col-4">
            <div className="flex justify-between items-center mb-2">
              <h4
                className="font-montserrat
               font-normal leading-6 text-base tracking-[0.15px] text-col-1"
              >
                Category
              </h4>
              <a href="#">
                <FontAwesomeIcon icon={faAngleUp} />
              </a>
            </div>
            <div>
              <ul className="grid gap-y-2">
                <li className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    id="category-1"
                    className="product-input"
                  />
                  <label
                    htmlFor="category-1"
                    className="font-normal text-[15px] leading-6 tracking-[0.5px] text-col-1"
                  >
                    All
                  </label>
                </li>
                <li className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    id="category-2"
                    className="product-input"
                  />
                  <label
                    htmlFor="category-2"
                    className="font-normal text-[15px] leading-6 tracking-[0.5px] text-col-1"
                  >
                    Running Shoes
                  </label>
                </li>
                <li className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    id="category-3"
                    className="product-input"
                  />
                  <label
                    htmlFor="category-3"
                    className="font-normal text-[15px] leading-6 tracking-[0.5px] text-col-1"
                  >
                    Category 3
                  </label>
                </li>
                <li className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    id="category-4"
                    className="product-input"
                  />
                  <label
                    htmlFor="category-4"
                    className="font-normal text-[15px] leading-6 tracking-[0.5px] text-col-1"
                  >
                    Category 4
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-4 pb-4 border-b border-col-4">
            <div className="flex justify-between items-center mb-2">
              <h4
                className="font-montserrat
               font-normal leading-6 text-base tracking-[0.15px] text-col-1"
              >
                Stock Status
              </h4>
              <a href="#">
                <FontAwesomeIcon icon={faAngleUp} />
              </a>
            </div>
            <div className="">
              <ul className="grid gap-y-2">
                <li className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    id="stock-1"
                    className="product-input"
                  />
                  <label
                    htmlFor="stock-1"
                    className="font-normal text-[15px] leading-6 tracking-[0.5px] text-col-1"
                  >
                    In Stock
                  </label>
                </li>
                <li className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    id="stock-2"
                    className="product-input"
                  />
                  <label
                    htmlFor="stock-2"
                    className="font-normal text-[15px] leading-6 tracking-[0.5px] text-col-1"
                  >
                    Out of Stock
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:col-span-9">
          <div>
            <ul className="flex items-center gap-x-1">
              <li>
                <a
                  href="#"
                  className="text-col-1 font-normal text-[13px] leading-5 tracking-[0.25px] underline"
                >
                  Home
                </a>
              </li>
              <li>
                <p className="text-col-1 font-normal text-[13px] leading-5 tracking-[0.25px]">
                  /
                </p>
              </li>
              <li>
                <a
                  href="#"
                  className="text-col-1 font-normal text-[13px] leading-5 tracking-[0.25px] underline"
                >
                  Search
                </a>
              </li>
              <li>
                <p className="text-col-1 font-normal text-[13px] leading-5 tracking-[0.25px]">
                  /
                </p>
              </li>
              <li>
                <a
                  href="#"
                  className="text-col-1 font-normal text-[13px] leading-5 tracking-[0.25px]"
                >
                  Running Shoes
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 flex justify-between items-center mb-8">
            <div className="flex max-lg:flex-col gap-x-2 lg:items-end gap-y-2">
              <h3 className="font-montserrat font-normal text-[34px] leading-9 text-col-1 italic tracking-[0.25px]">
                “Running Shoes”
              </h3>
              <span className="inline-block max-lg:hidden w-14 border-b border-col-1"></span>
              <p>288 Results</p>
            </div>
            <div className="max-lg:hidden">
              <a
                href="#"
                className="flex items-center gap-x-2 font-normal text-xl tracking-[1.25px] text-col-1 border-2 border-col-1 rounded leading-[48px] px-3"
              >
                <span>
                  <FontAwesomeIcon icon={faArrowDownWideShort} />
                </span>{" "}
                Sort by
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 md:grid-cols-3 pb-14">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <div className="grid lg:grid-cols-3 max-lg:gap-y-6 items-center">
            <div className="lg:col-start-2">
              <a
                href="#"
                className="flex items-center w-fit gap-x-2 font-normal text-xl hover-1 tracking-[1.25px] text-col-1 border-2 border-col-1 mx-auto rounded leading-[48px] px-4"
              >
                Next Page
                <span>
                  <FontAwesomeIcon icon={faRightLong} />
                </span>{" "}
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-x-1 justify-center lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-col-1 font-normal text-xl tracking-[1.25px] bg-col-3 inline-flex w-12 h-12 rounded justify-center items-center"
                  >
                    01
                  </a>
                </li>
                <li>
                  <p className="text-col-1 font-normal text-sm tracking-[0.5px] inline-flex justify-center items-center mx-2">
                    of 55
                  </p>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-col-1 font-normal text-xl tracking-[1.25px] bg-col-3 inline-flex w-12 h-12 rounded justify-center items-center"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-col-1 font-normal text-xl tracking-[1.25px] bg-col-3 inline-flex w-12 h-12 rounded justify-center items-center"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDiv;
