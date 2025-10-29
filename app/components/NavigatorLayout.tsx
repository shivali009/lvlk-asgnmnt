"use client";
import { useData } from "../context/DataContext";

export function NavigatorLayout() {
  const { bigData } = useData();
  // const { bigData } = useContext(DataContext);

  console.log(bigData);
  return (
    <div className="w-[300px] h-screen bg-[#e0e0e0]">
      sdfgsdfsdkjhdjkdfjkfdkldf
    </div>
  );
}
