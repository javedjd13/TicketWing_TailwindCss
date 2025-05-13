import React from "react";
const { useState } = React;

// TicketSelector component - buttons and input aligned horizontally with correct spacing
function TicketSelector({ label, price, cover, description }) {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <section className="py-3  border-b border-b-[#2a1f3a]">
      <div className="flex justify-between items-center mb-2 text-white text-base sm:text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span>{label}</span>
        </div>
        <div className="flex items-center gap-3 ">
          <button
            aria-label={`Decrease ${label} ticket quantity`}
            onClick={decrement}
            className="bg-[#f9b700] text-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center font-bold"
            type="button"
          >
            −
          </button>
          <input
            aria-live="polite"
            aria-atomic="true"
            aria-relevant="additions removals"
            className="w-10 h-10 sm:w-12 sm:h-12 text-center rounded-lg text-black font-semibold bg-white"
            readOnly
            type="text"
            value={count}
          />
          <button
            aria-label={`Increase ${label} ticket quantity`}
            onClick={increment}
            className="bg-[#f9b700] text-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center font-bold"
            type="button"
          >
            +
          </button>
        </div>
      </div>
      <p className="text-[#f9b700] text-xs sm:text-sm font-semibold mb-1">
        ₹ {price.toLocaleString()}
      </p>
      {cover && (
        <p className="text-[#f9b700] text-xs sm:text-sm font-semibold mb-1">
          Cover - {cover}
        </p>
      )}
      {description && (
        <p className="text-white text-xs sm:text-sm font-normal">
          {description}
        </p>
      )}
    </section>
  );
}

export default TicketSelector;
