import React, { useContext, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';

import { clothing } from "./Clothing";
import assured from './Assets/assured.png'
import { FilteredArrayContext } from "./Context/FilterArrayContext";
import { SearchContext } from "./Context/SearchContext";

import "./css/MainContent.css";

function MainContent() {
  //Search and filters to be applied on content
  const { search, handleSearch } = useContext(SearchContext);
  const { filters, setFilters } = useContext(FilteredArrayContext)

  //Sorting functions
  const [sort, setSort] = useState("highToLow")

  const handleSort = () => setSort('highToLow')

  const handleLowSort = () => setSort('lowToHigh')

  //Filterd clothes
  let filteredClothing;

  search!==""? 

     filteredClothing = clothing.filter((item)=>{
      if( item["Product Name"]
      .toLocaleLowerCase()
      .includes(search)){
        return item
      }
    })
  
:
//If filters applied filter using filters

   filteredClothing = clothing.filter((item) => {

    if(search!==""){
      if( item["Product Name"]
      .toLocaleLowerCase()
      .includes(search)){
        return item
      }
    }

    let shouldReturn = true

    if (filters['Brand'].length === 0 && filters['idealFor'].length === 0 && filters['Size'].length === 0) {
      shouldReturn = true
    } else {
      if (filters.Brand.length > 0) {
        if (filters['Brand'].includes(item['Brand'])) {
          shouldReturn = true
        } else {
          shouldReturn = false
        }
      }
      if (filters.idealFor.length > 0 && shouldReturn) {
        if (filters['idealFor'].includes(item['Gender'])) {
          shouldReturn = true
        } else {
          shouldReturn = false
        }
      }
      if (filters.Size.length > 0 && shouldReturn) {
        if (filters['Size'].includes(item['Size'])) {
          shouldReturn = true
        } else {
          shouldReturn = false
        }
      }
    }
    return shouldReturn
  }).sort((a, b) => {
    if (sort === 'highToLow') {
      return b.Price - a.Price
    }
    return a.Price - b.Price
  })


  return (
    <>
      <div id="main-content">
        <div className="sort-menu">
          <span>Sort By :</span>
          &nbsp;  &nbsp;  &nbsp;
          <span onClick={handleSort}>High to Low</span>
          &nbsp;  &nbsp;
          <span onClick={handleLowSort}>Low to High</span>
        </div>
        {filteredClothing.map((item) => {
          return (
            <>
              <div className="card" key={Date.now()}>
                <FavoriteIcon sx={{position:'absolute' , color:'rgb(172, 63, 63)'}}/>
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

    </>
  );
}

export default MainContent;