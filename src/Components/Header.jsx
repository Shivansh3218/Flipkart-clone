import React, { useContext } from "react";
import logo from "../Components/Assets/flipkartlogo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./css/Header.css";
import { SearchContext } from "./Context/SearchContext";
export default function Header() {
  const { search, handleSearch } = useContext(SearchContext);

  return (
    <>
      <section className="main">
        <img src={logo} id="main-logo" alt="flipkart logo " />
        <div className="search-container">
          <input
            value={search}
            onChange={handleSearch}
            id="search-input"
            type="text"
            placeholder="Search for products, brand or more"
          />
          <SearchIcon sx={{ color: "blue" }} />
        </div>

        <ul id="nav-links">
          <li>
            Shivansh <KeyboardArrowDownIcon />
          </li>
          <li>
            Become a Seller <KeyboardArrowDownIcon />
          </li>
          <li>
            More <KeyboardArrowDownIcon />
          </li>
          <li>
            Cart <ShoppingCartIcon />
          </li>
        </ul>
      </section>
    </>
  );
}
