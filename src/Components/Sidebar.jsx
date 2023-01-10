import React, { useContext, useState } from "react";
import { FilterContext } from "./Context/FilterContext";
import brandArr from "./Brand";

import "./css/Sidebar.css";

function Sidebar() {
  const [clothingshow, setClothingShow] = useState(0);
  const [gendershow, setGenderShow] = useState(0);
  const [discountShow, setDiscountShow] = useState(0);
  const [brandShow, setBrandShow] = useState(0);
  const [popup, setPopUp] = useState(0);
  const { filterArr, handleAddFilter, handleFilterArr } =
    useContext(FilterContext);

  const clothingCategoryArr = ["Shirt", "Pants", "Shorts", "Jeans"];

  const clothingGenderArr = ["Men", "Men & Women", "Women", "Boys", "Girls"];

  const clothingDiscountArr = [
    "30% or more",
    "40% or more",
    "40% or more",
    "50% or more",
    "60% or more",
  ];

  const clothingBrandArr = ["ADIDAS", "Wildcraft", "Jockey", "Puma"];

  const handleClothingShow = () =>
    clothingshow === 0 ? setClothingShow(1) : setClothingShow(0);
  const handleGenderShow = () =>
    gendershow === 0 ? setGenderShow(1) : setGenderShow(0);
  const handleDiscountShow = () =>
    discountShow === 0 ? setDiscountShow(1) : setDiscountShow(0);
  const handleBrandShow = () =>
    brandShow === 0 ? setBrandShow(1) : setBrandShow(0);

  const openPopUp = () => {
    popup === 0 ? setPopUp(1) : setPopUp(0);
  };

  return (
    <>
      <section id="sidebar-section">
        <div className="filters">
          <div id="filters-heading">
            <h1 id="filter-heading">Filters</h1>
            <button
              id="btn-clearAll"
              onClick={handleFilterArr}
              className="noBorder"
            >
              CLEAR ALL
            </button>
          </div>
          {filterArr.length >= 1 ? (
            <div className="filterItems">
              {filterArr.map((item) => {
                return <button className="filterArr-items">{item}</button>;
              })}
            </div>
          ) : null}
        </div>



        <div id="categories">

           
          <h2 id="categories-heading">CATEGORIES</h2>
          
          <section className="filter-section">
          <button
            onClick={handleClothingShow}
            className="noBorder clothing-btn tooltip"
          >
            Clothing and Acce...
            <span className="tooltiptext">Clothing and Accessories</span>
          </button>
          {clothingshow === 1 ? (
            <div className="catogory">
              {clothingCategoryArr.map((item) => {
                return (
                  <button
                    onClick={handleAddFilter}
                    value={item}
                    className="noBorder"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          ) : null}
           </section>

           <section className="filter-section no-top">
          <button onClick={handleGenderShow} className="noBorder gender-btn">
            GENDER
          </button>
          {gendershow === 1 ? (
            <div className="catogory">
              {clothingGenderArr.map((item) => {
                return (
                  <button
                    onClick={handleAddFilter}
                    value={item}
                    className="noBorder"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          ) : null}
          </section>

<section className="filter-section no-top">
          <button
            onClick={handleDiscountShow}
            className="noBorder discount-btn"
          >
            DISCOUNT
          </button>
          {discountShow === 1 ? (
            <div className="catogory">
              {clothingDiscountArr.map((item) => {
                return (
                  <button
                    onClick={handleAddFilter}
                    value={item}
                    className="noBorder"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          ) : null}
          </section>
          
          <section className="filter-section no-top">
          <button onClick={handleBrandShow} className="noBorder discount-btn">
            BRANDS
          </button>
          {brandShow === 1 ? (
            <div className="catogory">
              {clothingBrandArr.map((item) => {
                return (
                  <button
                    onClick={handleAddFilter}
                    value={item}
                    className="noBorder"
                  >
                    {item}
                  </button>
                );
              })}
              <button onClick={openPopUp} className="show-all-btn noBorder">
                Show All...
              </button>
              {popup == 1 ? (
                <section id="allBrands">
                  <h5>All brands</h5>
                  <button onClick={openPopUp} id="closePopup">
                    X
                  </button>
                  {brandArr.map((item) => {
                    return (
                      <button
                        onClick={handleAddFilter}
                        value={item}
                        className="brands-btn"
                      >
                        {item}
                      </button>
                    );
                  })}
                </section>
              ) : null}
            </div>
          ) : null}
          </section>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
