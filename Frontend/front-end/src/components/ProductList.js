import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8080/products");
    result = await result.json();
    setProducts(result);
  };

  return (
    <div className="bg-[#456990]">
      <h1 className="text-3xl text-center text-[#d6b880]">Product List</h1>
      {products.map((product) => (
        <div key={product.id} className="container mx-auto p-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-40 h-12 px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="w-32 h-12 px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="w-40 h-12 px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="w-40 h-12 px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="w-40 h-12 px-6 py-4 whitespace-nowrap font-medium text-lg bg-[#516cbc] text-[#d6b880]">
                  {product.name}
                </td>
                <td className="w-32 h-12 px-6 py-4 whitespace-nowrap font-medium text-lg bg-[#516cbc] text-[#d6b880]">
                  $ {product.price}
                </td>
                <td className="w-40 h-12 px-6 py-4 whitespace-nowrap font-medium text-lg bg-[#516cbc] text-[#d6b880]">
                  {product.category}
                </td>
                <td className="w-40 h-12 px-6 py-4 whitespace-nowrap font-medium text-lg bg-[#516cbc] text-[#d6b880]">
                  {product.company}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
