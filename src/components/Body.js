import React, { use, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restList from "../utils/RestData";
import { useState } from "react";
const Body = () => {
  let [restaurantList, setListOfRestaurant] = useState(restList);
  return (
    <div className="body">
      <div className="search-bar">
        <button
          className="filter-button"
          onClick={() => {
            restaurantList = setListOfRestaurant(
              restaurantList.filter((resto) => resto.stars > 4.5)
            );
            console.log(restaurantList);
          }}
          ß
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resto-list">
        {restaurantList.map((resto) => {
          return <RestaurantCard key={resto.name} restData={resto} />;
        })}
      </div>
    </div>
  );
};

export default Body;
