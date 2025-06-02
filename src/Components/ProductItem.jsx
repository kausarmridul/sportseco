import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function ProductItem() {
  return (
    <div>
      <div>
        <img
          src="images/product-item-1.png"
          alt="Product Item"
          className="img-fluid w-full"
        />
      </div>
      <div className="mt-3 px-2">
        <h3 className="font-medium text-[15px] leading-6 tracking-[.5px] text-col-1 mb-1">
          Ultraboost Light Running Shoes
        </h3>
        <h5 className="font-light text-[15px] leading-6 tracking-[.5px] text-col-1 italic mb-1">
          Running Shoes
        </h5>
        <div className="flex justify-between items-center">
          <h5 className="font-light text-xs tracking-[.4px] text-col-1 flex items-center gap-2">
            <span>
              <FontAwesomeIcon icon={faStar} className="text-col-2" />
            </span>
            5.0 (10 Reviews)
          </h5>
          <span className="font-medium text-xs tracking-[.4px] text-col-6">
            In Stock
          </span>
        </div>
        <div>
          <h3 className="font-montserrat font-semibold text-2xl leading-6 tracking-[1px] text-col-1 my-4">
            $200
          </h3>
        </div>
        <div className="flex gap-x-2">
          <a
            href="#"
            className="flex gap-x-2 items-center w-full bg-col-1 rounded justify-center h-10 text-white font-medium text-base tracking-[1.25px] hover-1"
          >
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>{" "}
            Add to Cart
          </a>
          <a
            href="#"
            className="min-w-10 flex items-center justify-center bg-col-3 rounded text-col-1 hover-1"
          >
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
