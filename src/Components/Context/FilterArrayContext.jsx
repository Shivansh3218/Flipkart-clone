import React, { createContext, useState } from "react";

const FilteredArrayContext = createContext();

function FilteredArrayProvider({ children }) {
    const [filters, setFilters] = useState({
        Brand: [],
        idealFor: [],
        Size: [],

    })
    const [minimumPrice, setMinimumPrice] = useState(0)
    const [maximumPrice, setMaximumPrice] = useState(0)
    return (
        <FilteredArrayContext.Provider value={{ filters, setFilters, minimumPrice, setMinimumPrice, maximumPrice, setMaximumPrice }}>
            {children}
        </FilteredArrayContext.Provider>
    );
}
export { FilteredArrayContext, FilteredArrayProvider };