import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(params);
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:8080/product/${params.id}`, {
      headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
    });
    result = await result.json();
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company);
  };

  const updateProduct = async () => {
    console.log(name, price, category, company);

    let result = await fetch(`http://localhost:8080/product/${params.id}`, {
      method:"Put", 
      body: JSON.stringify({name, price, category, company}),
      headers:{
        'Content-Type': 'application/json',
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      }
    });
    result = await result.json();

    // console.log(result)

    navigate('/')

    setName("");
    setPrice("");
    setCategory("");
    setCompany("");
  };
  return (
    <div className="bg-[#456990]">
      <h1 className="text-3xl text-center text-[#d6b880]">Update Product</h1>
      <input
        type="text"
        className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880] mx-auto my-5"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880] mx-auto my-5"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880] mx-auto my-5"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="text"
        className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880] mx-auto my-5"
        placeholder="Enter Product Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button
        type="button"
        className="mx-auto my-5 bg-[#516cbc] border border-gray-300 text-[#d6b880] text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:bg-[#132048]"
        onClick={updateProduct}
      >
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
