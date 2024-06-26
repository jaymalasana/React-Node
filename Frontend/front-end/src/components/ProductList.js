import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8080/products", {
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8080/product/${id}`, {
      method: "Delete",
      headers: {
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const handleSearch = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:8080/search/${key}`, {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="bg-[#456990] min-h-screen p-4">
      <h1 className="text-3xl text-center text-[#d6b880] mb-6">Product List</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Products"
          onChange={handleSearch}
          className="p-2 rounded w-full sm:w-96 border-2 border-[#8a98c5] focus:outline-none focus:border-[#d6b880]"
        />
      </div>
      <div className="container mx-auto p-4 bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-[#456990] to-[#6787ab] text-white">
            <tr>
              <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Name
              </th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Price
              </th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Category
              </th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Company
              </th>
              <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium uppercase tracking-wider">
                Operations
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id}>
                  <td className="px-2 sm:px-6 py-4 whitespace-nowrap font-medium text-sm md:text-lg text-gray-700">
                    {product.name}
                  </td>
                  <td className="px-2 sm:px-6 py-4 whitespace-nowrap font-medium text-sm md:text-lg text-gray-700">
                    ${product.price}
                  </td>
                  <td className="px-2 sm:px-6 py-4 whitespace-nowrap font-medium text-sm md:text-lg text-gray-700">
                    {product.category}
                  </td>
                  <td className="px-2 sm:px-6 py-4 whitespace-nowrap font-medium text-sm md:text-lg text-gray-700">
                    {product.company}
                  </td>
                  <td className="px-2 sm:px-6 py-4 whitespace-nowrap font-medium text-sm md:text-lg text-gray-700">
                    <button
                      className="h-8 sm:h-10 w-16 sm:w-20 md:w-24 border-2 border-[#8a98c5] hover:bg-[#d6b880] hover:text-black hover:border-black rounded-3xl mr-2"
                      onClick={() => deleteProduct(product._id)}
                    >
                      Delete
                    </button>
                    <Link to={`/update/${product._id}`}>
                      <button className="h-8 sm:h-10 w-16 sm:w-20 md:w-24 border-2 border-[#8a98c5] hover:bg-[#d6b880] hover:text-black hover:border-black rounded-3xl">
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  <h1 className="text-lg sm:text-xl text-gray-700 font-semibold">
                    No Result Found
                  </h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
