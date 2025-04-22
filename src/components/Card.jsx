import React from "react";
import "../index.css";

const Card = ({ data }) => {
  const {
    eventId,
    eventImageUrl,
    formateStartEventDate,
    formateStartEventMonth,
    formateStartEventTime,
    eventName,
    ticketPrice,
  } = data || {}; // Destructure the event data

  if (!data) {
    return null; // Or you can return a placeholder or message here
  }

  return (
    <div className="bg-[#EFF0EF] rounded-lg  overflow-hidden card-main w-[13.75rem] h-[24.6875rem] shadow-md border-2 border-white"
    key={eventId}
    >
      <div className="relative">
        <img
          src={eventImageUrl}
          alt="Event poster"
          className="w-full object-cover h-80 rounded-lg opacity-[100%]"
        />
        <div className="absolute bottom-0 right-0 mb-2 bg-white text-center p-2 card-date-box">
          <div className="date-text text-[Ageo-Bold] ">
            {formateStartEventDate}
          </div>
          <div className="month-text text-[Ageo-bold]">
            {formateStartEventMonth}
          </div>
          <div className="time-text text-[Ageo-Semibold]">
            {formateStartEventTime}
          </div>
        </div>
      </div>
      <div className=" h-[74px]">
        <h2 className="text-[#0F0636] text-base font-bold text-[Ageo-Bold] mb-2 leading-[21px] text-left">
          {eventName}
        </h2>
        <p className="text-[#BC1EB5] text-xs font-semibold leading-[13px] text-left">
          ₹ {ticketPrice} Onwards
        </p>
      </div>
    </div>
  );
};

export default Card;
