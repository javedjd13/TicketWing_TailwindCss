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
        class="fixed inset-0 flex items-center justify-center bg-black z-20 bg-opacity-75"
        onClick={handleCloseModal}
      >
        <div
          class="bg-white text-black p-8 rounded-lg relative  max-h-[21.9375rem] max-w-[24.125rem]"
          onClick={handleModalClick}
        >
          <button class="absolute top-2 right-2 text-gray-500">
            <FontAwesomeIcon icon={faTimes} onClick={toggleLocationSelect} />
          </button>
          <h3 class="text-xl mb-4">Select Location</h3>
          <input
            type="text"
            placeholder="Search your city"
            class="p-2 w-full mb-4 border rounded-full border-none"
          />
          <div class="mb-4 text-[#BC1EB5] cursor-pointer" >
            <FontAwesomeIcon
              className="mr-2"
              icon={faMapMarkerAlt}
            />
            <span class="ml-2 text-sm">User Current Location</span>
            <span class="ml-2 text-gray-500 text-xs">Nagpur</span>
          </div>
          <h1 class="mb-2 text-sm text-[#0F0636] ">Top Cities</h1>
          <div class="flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                className={`text-xs px-3 py-1 rounded-full border ${
                  selectedCity === city
                    ? "bg-[#0d0331] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCity(city)}
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
