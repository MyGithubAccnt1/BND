import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { getAssetPath } from "../utils/pathUtils";

const ProductsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const products = [
    { path: "/products/pharmaceutical", label: "Pharmaceutical Drugs" },
    { path: "/products/supplements", label: "Food Supplement" },
    { path: "/products/devices", label: "Medical Devices" },
  ];

  return (
    <div
      className="relative h-full flex items-center"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="font-bold cursor-pointer relative">
        Products
      </div>

      {isOpen && (
        <>
          <div className="absolute top-[100%] w-full pt-2!">
            <div className="absolute left-[25%] content-[''] w-[25px] h-[25px] bg-gray-300 dark:bg-gray-800 rotate-45"></div>
            <div className="absolute left-0 mt-1! bg-gray-300 dark:bg-gray-800 py-2! rounded-md shadow-lg min-w-[200px] z-50">
              {products.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="block w-full"
                >
                  <div className="flex items-center gap-2 px-4! py-2! hover:bg-[rgb(5,109,173)] group">
                    <span className="w-2 h-2 rounded-full bg-[rgb(5,109,173)] group-hover:bg-white" />
                    <span className="text-[rgb(5,109,173)] group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function Navbar() {
  const [button, setButton] = useState(false);
  const mobileNav = (isActive) =>
    `ps-5! font-bold py-3! mx-[15px]! w-[calc(100%-30px)] border border-x-0 ${
      isActive
        ? "border-[rgba(0,0,0,0.4)] dark:border-[rgba(255,255,255,0.4)]"
        : "border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]"
    }`;
  const pcNav = (isActive) =>
    `font-bold py-5! relative after:content-[''] after:absolute after:h-[1px] after:bg-[rgb(5,109,173)] after:left-0 after:bottom-0 ${
      isActive
        ? "text-[rgb(5,109,173)] after:w-[50%]"
        : "hover:text-[rgb(5,109,173)] after:w-0 after:transition-all after:duration-300 hover:after:w-[50%]"
    }`;
  return (
    <>
      <div className="z-1 sticky top-0">
        <nav className="text-gray-500 h-[15dvh] flex justify-center items-center shadow-sm bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(0,0,0,0.9)] [box-shadow:0_2px_4px_rgba(0,0,0,0.05)]">
          <div className="flex justify-between items-center w-full md:w-[80dvw] lg:w-[75dvw] mx-5! md:mx-0!">
            <div className="flex-shrink-0">
              <NavLink
                to="/"
              >
                <img
                  src={getAssetPath("icon.png")}
                  alt="BND"
                  className="w-[85px] h-[85px]"
                />
              </NavLink>
            </div>
            <div className="hidden md:flex justify-center items-center gap-[30px] lg:gap-[50px]">
              <NavLink
                to="/"
                className={({ isActive }) => pcNav(isActive)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about-bnd"
                className={({ isActive }) => pcNav(isActive)}
              >
                About BND
              </NavLink>
              <ProductsDropdown />
              <NavLink
                to="/careers"
                className={({ isActive }) => pcNav(isActive)}
              >
                Careers
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => pcNav(isActive)}
              >
                Contact Us
              </NavLink>
            </div>
            <button
              type="button"
              onClick={() => setButton(!button)}
              className="w-[35px] h-[35px] md:hidden"
            >
              <div
                className={`
                    flex flex-col md:hidden transistion-all
                    ${button ? "-rotate-135 duration-1000" : "duration-300"}
                  `}
              >
                <span
                  className={`
                    content-[''] h-[2px] w-[35px] bg-gray-500 transition-all
                    ${button ? "rotate-45 duration-800" : "duration-1000"}
                  `}
                ></span>
                <span
                  className={`
                    content-[''] h-[2px] w-[35px] bg-gray-500 mx-auto! my-2!
                    ${button ? "hidden" : ""}
                  `}
                ></span>
                <span
                  className={`
                    content-[''] h-[2px] w-[35px] bg-gray-500 transition-all
                    ${button ? "-rotate-45 duration-300" : "duration-800"}
                  `}
                ></span>
              </div>
            </button>
          </div>
        </nav>
        <nav
          className={`
            absolute h-[85dvh] text-gray-500 flex transition-all duration-500 w-full md:-left-100!
            ${button ? "left-0" : "-left-100"}
          `}
        >
          <div
            className={`
              bg-[rgba(255,255,255,0.9)] dark:bg-[rgba(0,0,0,0.9)] min-w-[300px] transition-all duration-500 flex flex-col items-start pt-[75px]!
              ${button ? "[box-shadow:2px_-2px_3px_rgba(0,0,0,0.05)]" : ""}
            `}
          >
            <NavLink to="/" className={({ isActive }) => mobileNav(isActive)}>
              Home
            </NavLink>
            <NavLink
              to="/about-bnd"
              className={({ isActive }) => mobileNav(isActive)}
            >
              About BND
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => mobileNav(isActive)}
            >
              Products
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) => mobileNav(isActive)}
            >
              Careers
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => mobileNav(isActive)}
            >
              Contact Us
            </NavLink>
          </div>
          <button
            type="button"
            className="w-full h-full"
            onClick={() => setButton(false)}
          ></button>
        </nav>
      </div>
    </>
  );
}
