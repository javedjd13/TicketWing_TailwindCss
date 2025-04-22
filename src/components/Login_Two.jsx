import React from "react";
import googleLogo from "../assets/images/google+.svg";
import faceBookLogo from "../assets/images/facebook.svg";
import mobileLogo from "../assets/images/phone.svg";

const Login_Two = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-[#EFF2F2]">
      <div className="bg-[#FFFFFF] p-8 rounded-[22px] shadow-lg text-center w-full max-w-md md:w-[600px] md:h-[390px]">
        <p className="text-[#0F0636] text-lg font-bold mb-4">
          Tell us your mobile number
        </p>
        <input
          type="text"
          placeholder="99999 99999"
          className="w-full p-3 mb-4 rounded-[30px] text-center text-gray-500 border-[#E8E8E862] border-2"
        />

        {/* Timer */}
        <p className="text-gray-500 text-xs mb-1 sm:mb-2">2:00 min</p>

        {/* Information text */}
        <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
          We sent the verification to your mobile number
        </p>

        {/* Resend link */}
        <a
          href="#"
          className="text-pink-500 text-sm sm:text-sm mb-4 sm:mb-6 block"
        >
          Send Again
        </a>

        <button className="w-full h-[79px] bg-[#0F0636] text-white py-2 px-4 rounded-[40px] mb-4 flex items-center justify-center">
          <span className="font-bold text-lg">Confirm</span>
        </button>
      </div>
    </div>
  );
};

export default Login_Two;
