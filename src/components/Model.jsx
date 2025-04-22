import {
  faArrowRight,
  faBookmark,
  faCircleQuestion,
  faCircleUser,
  faCircleXmark,
  faQuestionCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import modelLogo from "../assets/images/modelLogo.png";
import { NavLink } from "react-router-dom";

const Modal = ({ toggleModal }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(true);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {isModalOpen && (
          <div
            id="modal-overlay"
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-end items-start p-4 md:p-8"
            onClick={handleOutsideClick}
          >
            <div
              className="bg-black text-white rounded-[34px] mt-8 max-sm:mt-[88px] p-6 w-full max-w-[31.5rem]  h-auto max:h-[16.1875rem] max-md:h-[14.1875rem] max-md:w-[25.5rem] shadow-lg 
            max-sm:h-[27.1875rem]
            relative"
            >
              <div className="flex justify-between items-center mb-4 mt-3">
                {/* Responsive User Icon and Text */}
                <div className="flex items-center">
                  <div className="bg-black rounded-full flex justify-center items-center border-2 border-white">
                    <FontAwesomeIcon
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                      icon={faCircleUser}
                    />
                  </div>
                  <span className="ml-4 text-left text-[18px] sm:text-[20px] md:text-[32px] lg:text-[32px] leading-[24px] sm:leading-[30px] md:leading-[42px] lg:leading-[50px] font-bold">
                    Guest
                    <p className="text-[#5D5F61] text-xs leading-3">
                      9975637190
                    </p>
                  </span>
                </div>
                {/* Responsive Login Text */}
                <NavLink 
                to="/login"
                  className="text-[#FFB606] text-right text-[14px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-medium">
                  Login
                  </NavLink>
              </div>
              {/* My Tickets section */}
              <div
                className="bg-[#17171A] rounded-lg p-4 mb-4"
                style={{ borderRadius: "23px" }}
              >
                <div
                  className="flex items-center justify-between mb-4 bg-[#313133] p-2"
                  style={{
                    borderRadius: "16px",
                    width: "90px",
                    height: "35px",
                  }}
                >
                  <span className="text-gray-400" style={{ fontSize: "15px" }}>
                    My Tickets
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={modelLogo}
                    alt="No Tickets Found"
                    className="mb-2"
                  />
                  <p className="text-lg font-bold">No Tickets Found</p>
                  <p className="text-gray-400 text-center text-xs">
                    It appears that you haven't bought any tickets yet.
                  </p>
                </div>
              </div>

              {/* Wishlist Item with Responsive Icon and Text */}
              <div className="mb-4">
                <a href="#" className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      className="text-[#FFB606] mr-2 h-[22px] w-[22px] sm:h-[18px] sm:w-[18px] md:h-[22px] md:w-[22px] lg:h-[25px] lg:w-[25px]"
                      icon={faBookmark}
                    />
                    <span className="text-left text-[16px] sm:text-[20px] md:text-[18px] lg:text-[18px] leading-[21px] sm:leading-[28px] md:leading-[34px] lg:leading-[40px]">
                      Wishlist
                    </span>
                  </div>
                  <FontAwesomeIcon
                    className="text-base sm:text-lg md:text-xl lg:text-xl"
                    icon={faArrowRight}
                  />
                </a>
              </div>

              {/* Help & Support Item with Responsive Icon and Text */}
              <div className="">
                <a href="#" className="flex justify-between items-center">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      className="text-[#FFB606] mr-2 h-[22px] w-[22px] sm:h-[18px] sm:w-[18px] md:h-[22px] md:w-[22px] lg:h-[25px] lg:w-[25px]
                      "
                      icon={faQuestionCircle}
                    />
                    <span className="text-left text-[16px] sm:text-[16px] md:text-[18px] lg:text-[18px] leading-[21px] sm:leading-[28px] md:leading-[34px] lg:leading-[40px]">
                      Help & Support
                    </span>
                  </div>
                  <FontAwesomeIcon
                    className="text-base sm:text-lg md:text-xl lg:text-xl"
                    icon={faArrowRight}
                  />
                </a>
              </div>

              {/* Close Button with Responsive Icon */}
              <button
                className="focus:outline-none focus:ring-0 absolute top-6 right-6 text-white text-sm sm:text-base md:text-lg lg:text-xl border-2 rounded-full w-[25px] h-[25px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] flex justify-center items-center border-3 border-white shadow-[0px_0px_6px_#00000029]"
                onClick={() => setIsModalOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
