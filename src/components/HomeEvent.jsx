import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchProducts } from "../services/Api";
import Card from "./Card";
import iconOne from "../assets/images/filter_img_one.png";
import iconTwo from "../assets/images/filter_img_two.png";
import iconThree from "../assets/images/filter_img_three.png";
import iconFour from "../assets/images/filter_img_four.png";
import Loader from "./Loader";
import { eventsData } from "../lib/Constant";
import { width } from "@fortawesome/free-solid-svg-icons/faZap";

const HomeEvent = () => {
  const [selected, setSelected] = React.useState("all");
  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["EventsList"],
  //   queryFn: fetchProducts,
  // });
  // iconOne;
  // if (isLoading) return <Loader />;

  // if (error) return "An error has occurred: " + error.message;

  const categories = [
    { id: "all", label: "All", width: 50, paddingX: 0, icon: null },
    {
      id: "club",
      label: "Club",
      icon: iconOne,
      alt: "Icon of a DJ mixer with knobs and sliders representing Club",
    },
    {
      id: "concert",
      label: "Concert",
      icon: iconTwo,
      alt: "Icon of a stage with curtains representing Concert",
    },
    {
      id: "festival",
      label: "Festival",
      icon: iconThree,
      alt: "Icon of party flags representing Festival",
    },
    {
      id: "others",
      label: "Others",
      icon: iconFour,
      alt: "Icon of lightning bolts representing Others",
    },
  ];
  return (
    <>
      <div className="md:p-4 sm:p-2   mx-auto">
        <div className="flex items-center justify-between mb-7 max-sm:mb-0 text-xl font-extrabold text-[#ffffff30] text-center mx-2">
          Nearby Events
        </div>
        {/* <div className="flex flex-wrap justify-start gap-4 py-6 max-w-full">
          {categories.map(({ id, label, width, icon, alt, paddingX }) => {
            const isSelected = selected === id;
            return (
              <button
                key={id}
                onClick={() => setSelected(id)}
                style={{ width: `${width}px`, padding: `${(0, paddingX)}px` }}
                className={`flex justify-center items-center space-x-2 rounded-full h-12 pl-1 py-1 pr-6 text-sm font-medium flex-shrink-0 ${
                  isSelected ? "selected" : "unselected"
                }`}
                aria-pressed={isSelected}
                aria-label={label}
              >
                {icon && <img src={icon} alt={alt} className="w-10 h-10" />}
                <span>{label}</span>
              </button>
            );
          })}
        </div> */}
        <div className="flex overflow-x-auto whitespace-nowrap md:gap-3 gap-2 py-6 px-2 max-w-full">
          {categories.map(({ id, label, width, icon, alt, paddingX }) => {
            const isSelected = selected === id;
            return (
              <button
                key={id}
                onClick={() => setSelected(id)}
                style={{ width: `${width}px`, padding: `${(0, paddingX)}px` }}
                className={`flex justify-center items-center space-x-2 rounded-full h-12 pl-1 py-1 pr-6 text-sm font-medium flex-shrink-0 ${
                  isSelected ? "selected" : "unselected"
                }`}
                aria-pressed={isSelected}
                aria-label={label}
              >
                {icon && <img src={icon} alt={alt} className="w-10 h-10" />}
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <div className=" grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3  gap-5  flex-wrap justify-center px-2">
          {eventsData?.map((event, id) => (
            <Card key={event.eventId || id} data={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeEvent;
