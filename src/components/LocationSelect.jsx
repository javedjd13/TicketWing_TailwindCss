import { faMapMarkerAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LocationSelect = ({ toggleLocationSelect }) => {
  const [selectedCity, setSelectedCity] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    toggleLocationSelect(); // Close modal
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const cities = [
    "Mumbai",
    "Delhi",
    "Jaipur",
    "Pune",
    "Gujrat",
    "Thane",
    "Ahmedabad",
  ];
  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-[#00000080] z-20 bg-opacity-100 bg-blur fade"
        onClick={handleCloseModal}
      >
        <div
          className="bg-[#000] text-white  p-8 rounded-lg relative  max-h-[21.9375rem] max-w-[24.125rem]"
          onClick={handleModalClick}
        >
          <button className="absolute top-2 right-2 text-gray-500">
            <FontAwesomeIcon icon={faTimes} onClick={toggleLocationSelect} />
          </button>
          <h3 className="text-xl mb-4 ">Select Location</h3>
          <input
            type="text"
            placeholder="Search your city"
            className="p-2 w-full mb-4 border rounded-full border-none bg-[#fafafa20] border-[#ffffff25]"
          />
          <div className="mb-4 text-[#BC1EB5] cursor-pointer" >
            <FontAwesomeIcon
              className="mr-2"
              icon={faMapMarkerAlt}
            />
            <span className="ml-2 text-sm">User Current Location</span>
            <span className="ml-2 text-[#ffb606] text-xs">Nagpur</span>
          </div>
          <h1 className="mb-2 text-sm text-[white] ">Top Cities</h1>
          <div className="flex flex-wrap gap-2">
            {cities.map((city,id) => (
              <button
                className={`text-xs px-3 py-2  border 10px 20px rounded-3xl ${selectedCity === city
                    ? "bg-[#ffb606] text-white"
                    : " text-white"
                  }`}
                onClick={() => setSelectedCity(city)}
                key={id}
              >
                {city}
              </button>
            ))}
            {/* ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationSelect;
