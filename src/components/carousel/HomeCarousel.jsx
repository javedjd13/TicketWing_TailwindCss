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
import { get_carousel_list } from "../../services/Api";
import Card from "../Card";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
// import { get_carousel_list } from "../../redux/features/EventService";

function HomeCarousel() {
  // const { user_token } = useSelector((state) => state.authentication);
  // const navigate = useNavigate();

  const {
    data: carouselList,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["carouselEventData"],
    queryFn: get_carousel_list,
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // const handleCardClick = (eventId) => {
  //   if (user_token) {
  //     navigate(`/events_details_login/${eventId}`);
  //   } else {
  //     navigate(`/eventsdetails/${eventId}`);
  //   }
  // };
  console.log("carouselList", carouselList);

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
      {carouselList.map((event) => (
        <SwiperSlide key={event.eventId || id}>
          <div className="flex justify-center items-center flex-wrap">
            <Card data={event} event={event.eventId} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeCarousel;
