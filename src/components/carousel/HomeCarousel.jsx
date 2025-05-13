import React from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./HomeCarousel.css";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Loader from "../Loader";
import { fetchProducts } from "../../services/Api";
import Card from "../Card";
import { eventsData } from "../../lib/Constant";

function HomeCarousel() {
  // const {
  //   data: carouselList,
  //   error,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryKey: ["carouselEventData"],
  //   queryFn: fetchProducts,
  //   placeholderData: keepPreviousData,
  // });

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }

  // console.log("carouselList", carouselList);

  return (
    <Swiper
      loop={true}
      spaceBetween={20}
      navigation={true}
      breakpoints={{
        425: {
          slidesPerView: 1.5,
        },
        767: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 5,
        },
      }}
      modules={[Navigation]}
      className="events"
    >
      {eventsData.map((event, id) => (
        <SwiperSlide key={id}>
          <div className="flex justify-center items-center flex-wrap ">
            <Card data={event} event={id} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeCarousel;
