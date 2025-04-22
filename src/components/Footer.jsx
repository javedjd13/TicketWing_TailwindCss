import React from "react";
import FooterLogo  from "../assets/images/TicketWings-Dark.svg";

const Footer = () => {
  return (
    <footer className="py-20 px-8 text-sm text-gray-600">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex items-center w-full md:w-auto">
          <img
            alt="TicketWings logo with a purple and yellow ticket icon and the text 'ticketwings'"
            className="h-8 md:h-8 w-full md:w-auto"
            src={FooterLogo}
          />
        </div>
        <nav className="flex space-x-8 text-lg max-sm:text-base text-[#0f0636] mt-4 md:mt-0 md:ml-8 font-[Ageo-Bold]">
          <a className="hover:text-[#0f0636]" href="#">
            Partners
          </a>
          <a className="hover:text-[#0f0636]" href="#">
            Contact Us
          </a>
          <a className="hover:text-[#0f0636]" href="#">
            Media Kit
          </a>
        </nav>
      </div>
      <hr className="border-gray-300 my-4" />
      <div className="flex flex-col md:flex-row justify-between items-center max-sm:text-xs font-[Ageo-Normal]">
        <span>© 2024 TicketWings.</span>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a className="hover:text-gray-800" href="#">
            Privacy Policy
          </a>
          <span>|</span>
          <a className="hover:text-gray-800" href="#">
            Terms & Conditions
          </a>
          <span>|</span>
          <a className="hover:text-gray-800" href="#">
            Refund and Cancellation
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
