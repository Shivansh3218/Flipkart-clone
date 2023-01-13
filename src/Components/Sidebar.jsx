import React, { useContext, useState } from "react";

import { FilterContext } from "./Context/FilterContext";
import { FilteredArrayContext } from "./Context/FilterArrayContext";
import assured from './Assets/assured.png'

import "./css/Sidebar.css";

function Sidebar() {
  //States for rendering
  const [gendershow, setGenderShow] = useState(0);
  const [brandShow, setBrandShow] = useState(0);
  const [sizeShow, setSizeShow] = useState(0)
  const [maxPrice, setMaxPrice] = useState(200);
  const [minPrice, setMinPrice] = useState(0);
  const [offer, setOffer] = useState(0)
  const [discountShow, setDiscountShow] = useState(0);

  //states from different contexts to add or remove filters
  const { filterArr, handleAddFilter, handleFilterArr } =
    useContext(FilterContext);
  const { filters, setFilters } = useContext(FilteredArrayContext)

//Filter array to be transfered
  let [array, addFilters] = useState({
    Brand: [],
    idealFor: [],
    Size: [],
  })

  //Adding filters to items 
  addFilters = (type, value) => {
    if (!array[type].includes(value)) {
      array[type].push(value)
    }
    setFilters({ ...array })
  }

  //Filters of sidebar stored in arrays
  const clothingGenderArr = ["Men", "Men & Women", "Women"];

  const offerArr= ['Buy More Save More', 'Special Price']

  const clothingBrandArr = ["ADIDAS", "Wildcraft", "Jockey", "APPALON", 'Louis Philippe Jeans', "Fort Collins", 'Darzi', "FastColors"];

  const clothingSizeArr = ['M', 'S', 'L', 'XL']
  
  const clothingDiscountArr = [
    "30% or more",
    "40% or more",
    "40% or more",
    "50% or more",
    "60% or more",
  ];

  //Conditonal rendering statements
  const handleGenderShow = () =>
    gendershow === 0 ? setGenderShow(1) : setGenderShow(0);
  const handleBrandShow = () =>
    brandShow === 0 ? setBrandShow(1) : setBrandShow(0);
  const handleSizeShow = () =>
    sizeShow === 0 ? setSizeShow(1) : setSizeShow(0);
    const handleDiscountShow = () =>
    discountShow === 0 ? setDiscountShow(1) : setDiscountShow(0);
    const handleOfferShow = () =>
    offer === 0 ? setOffer(1) : setOffer(0);

    //clearing filter array
  const clearArr = () => {
    setFilters({
      Brand: [],
      idealFor: [],
      Size: []
    }
    )
  }


  return (
    <>
      <section id="sidebar-section">
        <div className="filters">
          <div id="filters-heading">
            <h1 id="filter-heading">Filters</h1>
            <button
              id="btn-clearAll"
              onClick={(e) => {
                clearArr()
                handleFilterArr(e)
              }}
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

          <section className="filter-section no-top">
            <button onClick={handleGenderShow} className="noBorder gender-btn">
              IDEAL FOR
            </button>
            {gendershow === 1 ? (
              <div className="catogory">
                {clothingGenderArr.map((item) => {
                  return (
                    <button
                      onClick={(e) => {
                        addFilters('idealFor', e.target.value)
                        handleAddFilter(e)
                      }}
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
                      onClick={(e) => {
                        addFilters('Brand', e.target.value)
                        handleAddFilter(e)
                      }}

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
            <button onClick={handleSizeShow} className="noBorder discount-btn">
              SIZE
            </button>
            {sizeShow === 1 ? (
              <div className="catogory flex">
                {clothingSizeArr.map((item) => {
                  return (
                    <button
                      onClick={(e) => {
                        addFilters('Size', e.target.value)
                        handleAddFilter(e)
                      }}

                      value={item}
                      className="noBorder "
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </section>

          <section className="filter-section no-top">
            <button onClick={handleOfferShow} className="noBorder discount-btn">
              OFFERS
            </button>
            {offer === 1 ? (
              <div className="catogory ">
                {offerArr.map((item) => {
                  return (
                    <button
                      onClick={(e) => {
                        handleAddFilter(e)
                      }}

                      value={item}
                      className="noBorder "
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </section>

          <section className="filter-section align no-top">
            <input type="checkbox" />
            <img src={assured} id='image-assured' alt="assured logo" />
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
        </div>

        <div className="price-input">
          <div className="field">
            <span id="price-span">Min</span>
            <input type="number"
              onChange={(e) => {
                setMinPrice(e.target.value)
              }}
              value={minPrice} className="input-min" />
          </div>
          <div className="separator">To</div>
          <div className="field">
            <span id="price-span">Max</span>
            <input type="number" onChange={(e) => {
              setMaxPrice(e.target.value)
            }} value={maxPrice} className="input-max" />
          </div>
        </div>
        <div className="slider">
          <div className="progress"></div>
        </div>
        <div className="range-input">
          <input
            type="range"
            id="min-scroll"
            value={minPrice}
            onChange={(e) => {
              setMinPrice(e.target.value)
            }}
            className="range-min"
            min="0"
            max={maxPrice}
            step="1"
          />
          <input
            type="range"
            id="max-scroll"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value)
            }}
            className="range-max"
            min={minPrice}
            max="2000"
            step="1"
          />
        </div>

      </section>
    </>
  );
}
export default Sidebar;