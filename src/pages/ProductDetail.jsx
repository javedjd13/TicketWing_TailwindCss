// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = import.meta.env.VITE_DUMMY_API_URL;

const fetchProductById = async (id) => {
  const res = await axios.get(`${url}/products/${id}`);
  return res.data;
};

const ProductDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
  });

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
      <img src={data.thumbnail} alt={data.title} className="w-full h-64 object-cover rounded" />
      <p className="text-lg mt-4">{data.description}</p>
      <p className="text-purple-700 mt-2 font-semibold">₹ {data.price}</p>
      <p className="text-sm text-gray-600 mt-1">Brand: {data.brand}</p>
      <p className="text-sm text-gray-600">Category: {data.category}</p>
    </div>
  );
};

export default ProductDetail;
