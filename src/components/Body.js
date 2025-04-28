import React, { use, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurantListData =
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const dataToDisplay = restaurantListData.map((resto) => {
      const { name, cusine, stars, deliveryTime, image } = {
        name: resto.info.name,
        cusine: resto.info.cuisines,
        stars: resto.info.avgRating,
        deliveryTime: resto.info.sla.deliveryTime,
        image:  resto.info.cloudinaryImageId
      };
  
      resto.info.cuisines;
      return {
        name,
        cusine,
        stars,
        deliveryTime,
        image,
      };
    });
    console.log(dataToDisplay);
    setListOfRestaurant(dataToDisplay);
    setFilteredRestaurant(dataToDisplay);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
          
              setFilteredRestaurant(
                restaurantList.filter((resto) =>
                  resto.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-bar">
          <button
            className="filter-button"
            onClick={() => {
              setFilteredRestaurant(
                restaurantList.filter((resto) => resto.stars > 4.5)
              );
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="resto-list">
        {filteredRestaurant.map((resto) => {
          return <RestaurantCard key={resto.name} restData={resto} />;
        })}
      </div>
    </div>
  );
};

export default Body;
