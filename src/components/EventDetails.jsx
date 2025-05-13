// EventDetails component
import redirect from "../assets/images/redirect.svg"; // Importing a placeholder image
function EventDetails({ formatedDuration }) {
  return (
    <section aria-label="Event details" className="mb-8">
      <div className="flex flex-wrap gap-3 mb-4 justify-between">
        <div
          dateTime="2024-05-09T20:00"
          className="bg-[#2a1f3a]  rounded-full px-3 py-2 text-xs sm:text-sm font-normal cursor-default select-none h-10"
        >
          {formatedDuration}
        </div>
        <div className="  text-xs sm:text-sm font-normal cursor-default select-none">
          <button>
            <img src={redirect} alt="redirect" className=" m-auto " />

            <span className="text-xs select-none">Share Event</span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 h-10">
        <span className="bg-[#2a1f3a] rounded-full px-3 py-2 text-xs sm:text-sm font-normal cursor-default select-none">
          05hrs 30min
          {/* {duration} */}
        </span>
        <span className="bg-[#2a1f3a] rounded-full px-3 py-2 text-xs sm:text-sm font-normal cursor-default select-none">
          Bollywood
        </span>
        <span className="bg-[#2a1f3a] rounded-full px-3 py-2 text-xs sm:text-sm font-normal cursor-default select-none">
          Bollywood
        </span>
        <span className="bg-[#2a1f3a] rounded-full px-3 py-2 text-xs sm:text-sm font-normal cursor-default select-none">
          21+ Years
        </span>
      </div>
    </section>
  );
}

export default EventDetails;
