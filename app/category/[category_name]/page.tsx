"use client";

import { getCategoryProducts } from "@/app/api/products";
import { ProductList } from "@/app/components/ProductList";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage() {
  const { category_name } = useParams();
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("cat dicm ount", category_name);

    const getProductList = async () => {
      try {
        const data = await getCategoryProducts(category_name);
        console.log(data);
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
