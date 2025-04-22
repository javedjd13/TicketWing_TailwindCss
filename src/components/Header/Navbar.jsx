import {
  faCircleUser,
  faLocationDot,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../../assets/images/TicketWings-Light.svg";
import MobLogo from "../../assets/images/mob-logo.png";
import Model from "../Model";
import LocationSelect from "../LocationSelect";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setQuery } from "../../redux/features/searchSlice";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = React.useState(false); // State for Model modal
  const [isLocationSelectOpen, setIsLocationSelectOpen] = React.useState(false); // State for LocationSelect modal

  // Function to toggle Model modal visibility
  const toggleModel = () => {
    setIsModelOpen((prev) => !prev);
  };

  // Function to toggle LocationSelect modal visibility
  const toggleLocationSelect = () => {
    setIsLocationSelectOpen((prev) => !prev);
  };

  // Function to Search products
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <>
      <header className="bg-[#0F0636] text-white p-3">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            {/* Desktop Logo */}
            <NavLink to={"/"}>
              <img
                className="hidden md:block h-auto max-h-6 lg:max-h-[1.5rem]" // Logo responsive height
                src={Logo}
                alt="TicketWings Logo"
              />
              {/* Mobile Logo */}
              <img
                className="md:hidden h-auto max-h-6" // Responsive mobile logo
                src={MobLogo}
                alt="Mobile TicketWings Logo"
              />
            </NavLink>
            <div
              className="flex items-center space-x-1 border-r-2 border-gray-400 pr-3 cursor-pointer"
              onClick={toggleLocationSelect}
            >
              <FontAwesomeIcon
                className="text-[#BC1EB5]"
                icon={faLocationDot}
                aria-label="Location"
              />
              <span className="text-xs md:text-sm">Houston, Texas</span>{" "}
              {/* Responsive text */}
              <FontAwesomeIcon
                className="text-white"
                icon={faPen}
                aria-label="Edit location"
              />
            </div>
            <div className="flex md:hidden items-center space-x-4 ml-4">
              <a href="#" className="hover:underline text-xs md:text-sm">
                Login / Signup
              </a>
              <FontAwesomeIcon
                className="text-xl md:text-2xl cursor-pointer"
                icon={faCircleUser}
                onClick={toggleModel} // Toggle Model modal on click
                aria-label="User menu"
              />
            </div>
          </div>
          <div className="flex-grow mx-4 mb-2 md:mb-0 w-full md:w-auto">
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search event name, artist or location"
              className="w-full p-2 rounded-full text-black xl:w-[21.5625rem] lg:w-[20rem]"
              onChange={handleSearch}
            />
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-base lg:text-lg">
              About Us
            </a>
            <a href="#" className="text-base lg:text-lg">
              Partners
            </a>
            <NavLink to={"login"} className={"text-base lg:text-lg"}>
              Login / Signup
            </NavLink>
            <FontAwesomeIcon
              className="text-2xl lg:text-3xl cursor-pointer"
              icon={faCircleUser}
              onClick={toggleModel} // Toggle Model modal on click
              aria-label="User menu"
            />
          </nav>
        </div>
        {/* Render Model modal if isModelOpen is true */}
        {isModelOpen && <Model toggleModal={toggleModel} />}
        {/* Render LocationSelect modal if isLocationSelectOpen is true */}
        {isLocationSelectOpen && (
          <LocationSelect toggleLocationSelect={toggleLocationSelect} />
        )}
      </header>
    </>
  );
};

export default Navbar;
