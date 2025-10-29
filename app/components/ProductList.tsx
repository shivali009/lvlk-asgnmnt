import Image from "next/image";
import { useState } from "react";

export function ProductList({ list }) {
  const [priceFilter, setPriceFilter] = useState(10000);
  const [sortingOrder, setSortingOrder] = useState("");

  const [productList, setProductList] = useState(list);
  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
  };
  const handlePriceOrderChange = (e) => {
    console.log(e.target.value);

    if (e.target.value == "desc") {
      setProductList(productList.sort((a, b) => b.price - a.price));
    } else if (e.target.value == "asc") {
      setProductList(productList.sort((a, b) => a.price - b.price));
    }
    console.log(productList);
  };
  return (
    <div>
      <div className="m-4 bg-[#c3c3c3] p-4 text-[#262626] flex items-center">
        Price Range: 0 INR - {priceFilter} INR
        <input
          type="range"
          name="price-filter"
          min="0"
          max="10000"
          value={priceFilter}
          onChange={handlePriceFilterChange}
          className="mx-1"
        />
        Sort
        <select onChange={handlePriceOrderChange} value={sortingOrder}>
          <option value={""} disabled>
            Select
          </option>
          <option value={"asc"}>ASC</option>
          <option value={"desc"}>DESC</option>
        </select>
      </div>
      <div className="grid grid-cols-3 p-2.5">
        {productList
          .filter((product) => product.price <= priceFilter)
          .map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="m-2 bg-[#c3c3c3] p-3 text-[#262626]">
      <h4 className="">{product.title}</h4>
      <div className="flex justify-evenly my-6 items-center">
        <Image src={product.image} width="60" height={60} alt={product.title} />
        <div>
          <h2>{product.price} INR</h2>
          <span>
            Quantity:{" "}
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </span>
        </div>
      </div>
      <div className="text-xs">Description: {product.description}</div>
    </div>
  );
}
