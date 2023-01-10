import React, { useContext, useState } from "react";
import { clothing } from "./Clothing";
import assured from './Assets/assured.png'
import "./css/MainContent.css";
import { SearchContext } from "./Context/SearchContext";
import { FilterContext } from "./Context/FilterContext";
function MainContent() {
  const { search, handleSearch } = useContext(SearchContext);
  const { filterArr, handleAddFilter, handleFilterArr } =
    useContext(FilterContext);

  const filteredClothing = clothing.filter((item) => {
    if (filterArr.length >= 1) {
      for (let i = 0; i < filterArr.length; i++) {
        if (parseInt(item["Discount rates"]) >= parseInt(filterArr[i]))
          return item;
        else if (
          item["Product Name"].includes(filterArr[i]) ||
          item["Brand"].includes(filterArr[i]) ||
          item["Brand"].includes(filterArr[i])
        ) {
          return item;
        }
      }
    } else if (
      item["Product Name"]
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase())
    ) {
      return item;
    }
  });

  return (
    <div id="main-content">
      {filteredClothing.map((item, index) => {
        return (
          <>
            <div className="card" key={Date.now()}>
              <img
                className="item-image"
                src={item["Image URLS"]}
                alt="Cloth's Images"
              />
              <h5 className="brand-name">{item.Brand}</h5>
              {item["Product Name"].length > 8 ? (
                <h6 className="product-name">
                  {item["Product Name"].slice(0, 8) + "..."}
                  <img className="assured-img" src={assured} alt="" />
                </h6>
              ) : (
                <h6 className="product-name">{item["Product Name"]}</h6>
              )}
              <div key={Date.now()} className="prices">
                <p className="price">₹ {item.Price}</p>
                <p className="small orignal-price">
                  ₹ {item["Original Prices"]}
                </p>
                <p className="small discount-rate">{item["Discount rates"]}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default MainContent;
