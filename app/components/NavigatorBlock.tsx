"use client";
import Link from "next/link";
import { useData } from "../context/DataContext";

export function NavigatorBlock() {
  const { bigData } = useData();

  return (
    <div className="min-w-[300px] h-screen bg-[#e0e0e0] text-[#262626] flex flex-col p-8">
      <Link key={"home"} href={`/`}>
        {"All Category"}
      </Link>
      {Object.keys(bigData).map((category) => (
        <Link
          key={bigData[category].name}
          href={`/category/${bigData[category].url}`}
        >
          {bigData[category].name}
        </Link>
      ))}
    </div>
  );
}
