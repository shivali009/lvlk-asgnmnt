"use client";
import { createContext, useContext, useState } from "react";

const DataContext = createContext({});

export function DataProvider({ children }) {
  let [bigData, setBigData] = useState({});
  return (
    <DataContext.Provider value={{ bigData, setBigData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
