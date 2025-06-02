import React from "react";

const Navbar = () => {
  return (
    <section className="bg-col-1 py-5">
      <div className="containerr flex items-center justify-between">
        <div className="max-lg:mx-auto">
          <a href="#">
            <img src="images/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="max-lg:hidden">
          <ul className="flex items-center gap-10">
            <li>
              <a href="#" className="nav-link nav-active font-semibold hover-1">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link hover-1">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="nav-link hover-1">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="nav-link hover-1">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
