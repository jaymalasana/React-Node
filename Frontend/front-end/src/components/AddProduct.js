import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const addProduct = () => {
    console.log(name, price, category, company);
  };
  return (
    <div>
      <h1>Add Product Page</h1>
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
        className="mx-auto my-5 bg-[#516cbc] border border-gray-300 text-[#d6b880] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:bg-[#132048]"
        onClick={addProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
