import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const fetchEventData = async () => {
  const options = {
    method: "GET",
    url: "https://concerts-artists-events-tracker.p.rapidapi.com/festival/infos",
    params: {
      festival_id: "157318",
    },
    headers: {
      "x-rapidapi-key": "170610589emsh8680418db611776p13053djsn15705f5f5cfb",
      "x-rapidapi-host": "concerts-artists-events-tracker.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data; // 👈 check what structure it returns!
};

const DummyData = () => {
  const searchQuery = useSelector((state) => state.search?.query || "");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["eventData"], // 👈 Only fetch based on ID for now
    queryFn: fetchEventData,
  });

  console.log(data); // 👈 Use this to inspect the API response structure

  if (isLoading) return <p>Loading events...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  // 🛠 Adjust according to actual structure of `data`
  const festivals = data?.data ? [data.data] : []; // safe array for map

  return (
    <div>
      <h2 className="text-center">Festival Info</h2>
      <ul className="flex flex-wrap gap-4 justify-center items-center mt-4">
        {festivals.map((festival) => (
          <div
            className="bg-[#EFF0EF] rounded-lg overflow-hidden card-main w-[13.75rem] h-[24.6875rem] shadow-md border-2 border-white"
            key={festival.id || festival.name}
          >
            <a to="#" className="w-full h-full">
              <div className="relative">
                <img
                  src={festival.banner_image}
                  alt="Festival Banner"
                  className="w-full object-cover h-80 rounded-lg"
                />
                <div className="absolute bottom-0 right-0 mb-2 bg-white text-center p-2 card-date-box">
                  <div className="date-text">{"29"}</div>
                  <div className="month-text">{"Aug"}</div>
                  <div className="time-text">{"8 pm"}</div>
                </div>
              </div>
              <div className="h-[74px]">
                <h2 className="text-[#0F0636] text-base font-bold mb-2 leading-[21px] text-left">
                  {festival.name}
                </h2>
                <p className="text-[#BC1EB5] text-xs font-semibold leading-[13px] text-left">
                  {festival.location || "Location Not Available"}
                </p>
              </div>
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DummyData;
