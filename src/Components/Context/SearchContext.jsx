import React, { createContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value);
        localStorage.setItem("search", search);
    }
    return (
        <SearchContext.Provider value={{ search, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
}
export { SearchContext, SearchProvider };