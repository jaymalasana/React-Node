import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    console.log(name, price, category, company);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch("http://localhost:8080/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    console.log(result); // Optional: Log the result for debugging

    setName("");
    setPrice("");
    setCategory("");
    setCompany("");
  };

  return (
    <div className="bg-[#456990] min-h-[500px]">
      <h1 className="text-3xl text-center text-[#d6b880] py-8">Add Product</h1>
      <div className="max-w-screen-md mx-auto px-4 sm:px-8">
        <input
          type="email"
          className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-auto my-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880]"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && !name && (
          <span className="block text-red-700 font-medium text-center text-xl">
            Enter valid name
          </span>
        )}
        <input
          type="email"
          className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-auto my-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880]"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price && (
          <span className="block text-red-700 font-medium text-center text-xl">
            Enter valid price
          </span>
        )}
        <input
          type="email"
          className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-auto my-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880]"
          placeholder="Enter Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        {error && !category && (
          <span className="block text-red-700 font-medium text-center text-xl">
            Enter valid category
          </span>
        )}
        <input
          type="email"
          className="bg-[#516cbc] border border-gray-300 text-[#d6b880] text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-auto my-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880]"
          placeholder="Enter Product Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        {error && !company && (
          <span className="block text-red-700 font-medium text-center text-xl">
            Enter valid company
          </span>
        )}
        <button
          type="button"
          className="mx-auto my-5 bg-[#516cbc] border border-gray-300 text-[#d6b880] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#d6b880] hover:bg-[#132048]"
          onClick={addProduct}
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
