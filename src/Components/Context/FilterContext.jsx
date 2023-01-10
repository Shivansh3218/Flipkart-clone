import React, { createContext, useState } from "react";

const FilterContext = createContext();

function FilterProvider({ children }) {
  console.log("Child", children);
  const [filterArr, setFilterArr] = useState([]);
  const handleFilterArr = () => setFilterArr([]);
  const handleAddFilter = (e) => {
    if(!filterArr.includes(e.target.value))
    setFilterArr([...filterArr, e.target.value]);
  };
  return (
    <FilterContext.Provider
      value={{ filterArr, handleAddFilter, handleFilterArr }}
    >
      {children}
    </FilterContext.Provider>
  );
}
export { FilterContext, FilterProvider };
