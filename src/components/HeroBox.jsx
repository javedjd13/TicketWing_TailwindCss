import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/Api";
import HomeCarousel from "./carousel/HomeCarousel";
import { eventsData } from "../lib/Constant"; // Update the path to where the eventsData is stored

const HeroBox = () => {
  const [activeTab, setActiveTab] = useState("Any");

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["EventsList"],
  //   queryFn: fetchProducts,
  // });

  // if (isLoading) return "Loading...";
  // if (error) return "An error has occurred: " + error.message;

  const tabs = ["Any", "Today", "This Week", "This Month"];

  return (
    <section className=" h-[90vh]">
      <div>
        <div className="relative text-center py-10 max-sm:py-0">
          <div className="relative z-10 top-10">
            <div className="flex justify-between items-center max-sm:items-start mb-8 max-sm:mb-4 px-4 max-sm:flex-col">
              <div className="flex flex-row gap-8 max-sm:mb-4">
                <h2
                  className="text-2xl font-bold
                text-[#ffffff30]"
                >
                  Newly Added
                </h2>
                <button
                  className={`rounded-full px-4 py-2 max-sm:text-xs bg-[#ffffff10] text-[#fff]
                        `}
                >
                  View All
                </button>
              </div>
              <div className="flex justify-between space-x-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`rounded-full md:px-4 px-2 py-2 max-sm:text-xs ${
                      activeTab === tab
                        ? "bg-[#ffffff10] text-white"
                        : "text-[#ffffff75]"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <HomeCarousel data={eventsData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBox;
