import React from "react";
import googleLogo from "../assets/images/google+.svg";
import faceBookLogo from "../assets/images/facebook.svg";
import mobileLogo from "../assets/images/phone.svg";
import { NavLink } from "react-router-dom";

const Login_One = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-[#EFF2F2]">
      <div className="bg-[#FFFFFF] p-8 rounded-[22px] shadow-lg text-center w-full max-w-md md:w-[600px] md:h-[360px]">
        <p className="text-[#0F0636] mb-4">By Login in you are agreeing to</p>
        <div className="flex justify-center space-x-2 mb-6 text-[#FFB606]">
          <a href="#" className="">
            Terms of Service
          </a>
          <span className="text-gray-600">|</span>
          <a href="#" className="">
            Privacy Policy
          </a>
        </div>
        <p className="text-[#0F0636] text-lg font-bold mb-4">
          Tell us your mobile number
        </p>
        <input
          type="text"
          placeholder="99999 99999"
          className="w-full p-3 mb-4 rounded-[30px] text-center text-gray-500 border-[#E8E8E862] border-2"
        />
        <NavLink  to="/login_two">

          <button className="w-full h-[79px] bg-[#0F0636] text-white py-2 px-4 rounded-[40px] mb-4 flex items-center justify-center">
            <span className="font-bold text-lg">Confirm</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Login_One;
