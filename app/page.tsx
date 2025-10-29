"use client";
import { useEffect, useState } from "react";
import { getProducts } from "./api/products";
import { ProductList } from "./components/ProductList";
import { useData } from "./context/DataContext";

export default function Home() {
  const { setBigData } = useData();
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getProducts();

        const result = Object.groupBy(data, ({ category }) => category);

        Object.keys(result).map((category, i) => {
          result[category] = {
            list: result[category],
            name: category,
            url: `/${category}`,
          };
        });

        setBigData(result);
        setListData(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getProductList();
  }, []);
  return (
    <div className="flex">
      {isLoading ? <div>loading...</div> : <ProductList list={listData} />}
    </div>
  );
}
