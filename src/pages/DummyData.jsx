// import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // <-- Redux se search query lane ke liye

const url = import.meta.env.VITE_DUMMY_API_URL;

// API call function
const fetchProducts = async (query) => {
  const endpoint = query
    ? `${url}/products/search?q=${query}`
    : `${url}/products`;
  const res = await axios.get(endpoint);
  console.log(res.data, "products data");
  return res.data.products;
};

const DummyData = () => {
  const searchQuery = useSelector((state) => state.search.query); // <-- Redux se query mil rahi

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products", searchQuery], // <-- queryKey me query bhi daala
    queryFn: () => fetchProducts(searchQuery), // <-- query ke according fetch
  });

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-center">Products</h2>
      <ul className="flex flex-wrap gap-4 justify-center items-center mt-4">
        {data.map((products) => (
          <div
            className="bg-[#EFF0EF] rounded-lg overflow-hidden card-main w-[13.75rem] h-[24.6875rem] shadow-md border-2 border-white"
            key={products.id}
          >
            <Link to={`/products/${products.id}`} className="w-full h-full">
              <div className="relative">
                <img
                  src={products.thumbnail}
                  alt="Event poster"
                  className="w-full object-cover h-80 rounded-lg opacity-[100%]"
                />
                <div className="absolute bottom-0 right-0 mb-2 bg-white text-center p-2 card-date-box">
                  <div className="date-text text-[Ageo-Bold] ">{"29"}</div>
                  <div className="month-text text-[Ageo-bold]">{"Aug"}</div>
                  <div className="time-text text-[Ageo-Semibold]">{"8 pm"}</div>
                </div>
              </div>
              <div className="h-[74px]">
                <h2 className="text-[#0F0636] text-base font-bold text-[Ageo-Bold] mb-2 leading-[21px] text-left">
                  {products.title}
                </h2>
                <p className="text-[#BC1EB5] text-xs font-semibold leading-[13px] text-left">
                  ₹ {products.price} Onwards
                </p>
              </div>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DummyData;
