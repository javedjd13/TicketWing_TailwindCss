import { useLocation, useParams } from "react-router-dom";
import React from "react";
import TicketSelector from "../components/TicketSelector";
import Artists from "../components/Artists";
import EventDetails from "../components/EventDetails";
import nodataFound from "../assets/images/eventimage.jpg"; // Importing a placeholder image

const ProductDetail = ({ data }) => {
  const location = useLocation();
  const { eventName, eventImageUrl,eventCategoryName,formatedDuration,ticketPrice,displayLocation,duration  } = location.state || {}
  ;
  const { id } = useParams();
  const [showMore, setShowMore] = React.useState(false);
  return (
    <>
      <main
        className="flex flex-col md:flex-row w-full gap-8 md:gap-12 text-white min-h-screen p-4 md:p-8"
        key={id}
      >
        <section
          aria-label="Event poster"
          className="flex-shrink-0 rounded-lg overflow-hidden w-full md:max-w-[50%] md:flex-1 pr-0 lg:pr-12 md:border-r border-[#2a1f3a] "
        >
          <div>
            <img
              alt="Event poster with man in denim shirt standing in front of purple background with large yellow text and smaller white text "
              className="w-full h-auto object-cover rounded-lg"
              height="720"
              src={eventImageUrl || `${nodataFound}`}
              width="480"
            />
          </div>
          <div className=" mx-auto space-y-6 py-10">
            {/* About the event */}
            <section className="bg-[#ffffff05] rounded-xl p-4 sm:p-6 text-[#b3a9b9] text-sm sm:text-base leading-relaxed">
              <h2 className="font-semibold text-[#9a8fb3] mb-2 text-base sm:text-lg">
                About the event
              </h2>
              <p className="break-words">
                The Spin Doctor Live Raodshow 3.0 at Brillo Club &amp; Kitchen{" "}
                <span role="img" aria-label="location pin">
                  📍
                </span>
              </p>
            </section>

            {/* Offline Tickets */}
            <section className="bg-[#ffffff05] rounded-xl p-4 sm:p-6 text-[#b3a9b9] text-sm sm:text-base leading-relaxed  flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="font-semibold text-[#9a8fb3] mb-1 text-base sm:text-lg">
                  Offline Tickets
                </h2>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>8668318087</p>
                </div>
                <div className=" mt-3 sm:mt-0">
                  <button
                    type="button"
                    className="text-[#ffb600] font-semibold text-sm sm:text-base focus:outline-none"
                  >
                    Call
                  </button>
                </div>
              </div>
            </section>

            {/* Terms & Conditions */}
            <section className="bg-[#ffffff05] rounded-xl p-4 sm:p-6 text-[#b3a9b9] text-sm sm:text-base leading-relaxed">
              <h2 className="font-semibold text-[#9a8fb3] mb-2 text-base sm:text-lg">
                Terms &amp; Conditions
              </h2>
              <p className="mb-2">
                <strong>1. General</strong>
              </p>
              <p className="mb-4">
                {showMore
                  ? "These Terms and Conditions (full text) apply to the event and all participants. Please read carefully before attending."
                  : "These Terms and Conditions (..."}
              </p>
              <button
                type="button"
                className="text-[#ffb600] font-semibold text-sm sm:text-base focus:outline-none"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Less" : "More"}
              </button>
            </section>

            {/* Event Presented By */}
            <section className="bg-[#ffffff05] flex-col rounded-xl p-4 sm:p-6 text-[#b3a9b9] text-sm sm:text-base leading-relaxed">
              <h2 className="font-semibold text-[#9a8fb3] mb-4 text-base sm:text-lg">
                Event Presented By
              </h2>
              <div className=" flex-row items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#3a3a3a] flex items-center justify-center"
                  role="img"
                  aria-label="User avatar icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-7 sm:w-7 text-[#b3a9b9]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="text-[#b3a9b9] flex-row text-xs sm:text-sm leading-tight">
                  <p>MK Entertainment</p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <article className="flex-1 flex flex-col justify-start relative lg:w-[50%] sm:w-">
          <header>
            <span className="inline-block bg-white text-[#13031f] text-xs font-semibold rounded-full px-4 py-1 mb-3 w-max">
              {/* Club */}{eventCategoryName || "Category Not Available"}
            </span>
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 leading-tight">
              {/* Savi Kahlon - Bombay High */}
              {eventName || "Event Name Not Available"}
            </h1>
            <div className="flex items-center gap-2 mb-6 text-[#b63ea2] text-xs sm:text-sm not-italic">
              <i
                className="fas fa-map-marker-alt text-sm sm:text-base"
                aria-hidden="true"
              ></i>
              <span>
                {/* Bombay High Club, Pune */}
                {displayLocation || "Location Not Available"}
                </span>
            </div>
          </header>
          <EventDetails formatedDuration={formatedDuration} />
          <Artists />
          <hr className="border-t border-[#2a1f3a] mb-8" />
          <section aria-label="Ticket selection">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-6">
              Select Your Tickets
            </h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <TicketSelector
                label="EB Male Stag"
                price={2000}
                cover="2000"
                description="Entry to male with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
              <TicketSelector
                label="EB Couple"
                price={1500}
                cover="1500"
                description="Entry to couple with full cover"
              />
            </form>
          </section>
        </article>
      </main>
    </>
  );
};

export default ProductDetail;
