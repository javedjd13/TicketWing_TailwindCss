import React from "react";
import googleLogo from "../assets/images/google+.svg";
import faceBookLogo from "../assets/images/facebook.svg";
import mobileLogo from "../assets/images/phone.svg";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 ">
      <div className="bg-[#FFFFFF] p-8 rounded-[22px] shadow-lg text-center w-full max-w-md md:w-[600px] md:h-[425px]">
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
        <NavLink to="/login_one">
          <button className="w-full h-[79px] bg-custom-gradient text-white py-2 px-4 rounded-[40px] mb-4 flex items-center justify-center">
            <img src={mobileLogo} alt="mobile" className="mr-2" />
            Login with
            <span className="font-bold ml-1">Mobile Number</span>
          </button>
        </NavLink>
        <button className="w-full h-[79px] bg-custom-gradient text-white py-2 px-4 rounded-[40px] mb-4 flex items-center justify-center">
          <img src={googleLogo} alt="google" className="mr-2" />
          Login with
          <span className="font-bold ml-1">Google</span>
        </button>
        <button className="w-full h-[79px] text-white py-2 px-4 rounded-[40px] flex items-center justify-center bg-custom-gradient">
          <img src={faceBookLogo} alt="facebook" className="mr-2" />
          Login with
          <span className="font-bold ml-1">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
