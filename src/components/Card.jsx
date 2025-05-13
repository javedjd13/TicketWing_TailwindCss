import "../index.css";
import placeholder from "../assets/images/img-placeholder.png"; // Importing a placeholder image
import { Link, useParams } from "react-router-dom";

const Card = ({ data }) => {
  const { id } = useParams();
  const {
    eventId,
    eventImageUrl,
    eventName,
    ticketPrice,
    formatedDuration,
    eventCategoryName,
    displayLocation,
    duration
  } = data || {}; // Destructure the event data

  if (!data) {
    return null; // Or you can return a placeholder or message here
  }
  return (
    <div
      className="bg-[#EFF0EF] rounded-lg  overflow-hidden card-main h-[28.75rem] w-[13.75rem] max-sm:w-[11rem] shadow-md 
      bg-[transparent] "
      key={eventId || id}
    >
      <Link
        to={`/products/${eventId}`} // Navigate to product page with event ID
        state={{
          eventName,
          eventImageUrl,
          eventCategoryName,
          formatedDuration,
          ticketPrice,
          displayLocation,
          duration
        }} // Pass event data to the product page
      >
        <div className="relative  rounded-lg  border-2 border-[#ffffff34] h-[21.8875rem]">
          <img
            src={eventImageUrl || `${placeholder}`} // Use placeholder if image URL is not available
            alt="Event poster"
            className="w-full object-cover h-full rounded opacity-[100%]"
          />
        </div>
        <div className=" h-[6rem] px-[.3125rem] pt-2">
          <h2 className="text-[#ffff] text-base font-bold mb-2 leading-[21px] text-left">
            {eventName || "Event Name Not Available"}
          </h2>
          <p className="text-[#ffb606] text-xs font-semibold leading-[13px] text-left mb-2">
            ₹ {ticketPrice || "0"} Onwards
          </p>
          <div
            className="text-[.625rem] text-[#ffff] font-semibold leading-[13px] text-left px-5 py-1
          bg-[#ffffff1a] bg-no-repeat border-2 border-[#ffffff25] rounded-[23px] p-[15px_24px] w-max max-h-[45px] flex items-center justify-center"
          >
            {formatedDuration}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
