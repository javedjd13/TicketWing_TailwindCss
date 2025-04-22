import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { get_carousel_list } from "../services/Api";
import Card from "./Card";
import BgVideo from "../assets/images/video/Video-party.mp4";
import GooglePlay from "../assets/images/Google-Play.svg";
import AppStore from "../assets/images/App-Store.svg";
import HomeCarousel from "./carousel/HomeCarousel";

const HeroBox = () => {
  const [activeTab, setActiveTab] = useState("Any");

  const { isLoading, error, data } = useQuery({
    queryKey: ["EventsList"],
    queryFn: get_carousel_list,
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  const tabs = ["Any", "Today", "This Week", "This Month"];

  return (
    <section className="">
      <div>
        <div className="relative text-center py-10 mb-64">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-x-0 top-0 w-full h-[34.75rem] object-cover z-0"
          >
            <source src={BgVideo} type="video/mp4" />
          </video>
          <div className="relative z-10 top-52">
            <div className="flex justify-start space-x-4 max-sm:space-x-2 max-sm:px-2 mb-6 px-4">
              <img
                src={GooglePlay}
                alt="App Store"
                className="h-12 rounded-lg"
              />
              <img src={AppStore} alt="Google Play" className="h-12" />
            </div>
            <div className="flex justify-between items-center max-sm:items-start mb-6 px-4 max-sm:flex-col">
              <h2
                className="text-2xl 
           text-white"
              >
                Discover
              </h2>
              <div className="flex space-x-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`rounded-full px-4 py-2 max-sm:text-xs ${
                      activeTab === tab ? "bg-white text-black" : "text-white"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <HomeCarousel data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBox;
