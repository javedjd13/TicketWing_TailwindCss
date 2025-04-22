import React from "react";

const Loader = () => {
  return (
    <div className=" data-loader vh-80 d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary api-loader" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
