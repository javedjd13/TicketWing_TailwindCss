import { useQuery } from "@tanstack/react-query";
import React from "react";
import { get_carousel_list } from "../services/Api";
import Card from "./Card";
import iconOne from "../assets/images/all-events/icon1.png";
import iconTwo from "../assets/images/all-events/icon2.png";
import iconThree from "../assets/images/all-events/icon3.png";
import Loader from "./Loader";

const HomeEvent = () => {
  const [activeTab, setActiveTab] = React.useState("All");
  const tabs = [
    { name: "All", img: "All" },
    { name: "Club", img: iconOne },
    { name: "Concert", img: iconTwo },
    { name: "Others", img: iconThree },
  ];
  const { isLoading, error, data } = useQuery({
    queryKey: ["EventsList"],
    queryFn: get_carousel_list,
  });
  iconOne;
  if (isLoading) return <Loader />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="container mx-auto p-4 my-4">
        <div className="flex justify-start space-x-4 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <div key={tab.name} className="flex flex-col items-center">
              <button
                onClick={() => setActiveTab(tab.name)}
                className={`w-12 h-12 rounded-full ${
                  activeTab === tab.name
                    ? "bg-[#0f0636] text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                <img
                  src={tab.img}
                  alt={`${tab.name} icon`}
                  className="w-6 h-6 mx-auto"
                />
              </button>
              <span
                className={`mt-2 text-xs ${
                  activeTab === tab.name ? "text-purple-900" : "text-gray-700"
                }`}
              >
                {tab.name}
              </span>
            </div>
          ))}
        </div>
        <div className="container grid-cols-1 gap-5 flex flex-wrap max-sm:justify-center">
          {data?.map((event) => (
            <Card key={event.eventId} data={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeEvent;
