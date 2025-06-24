import RestaurantCard, { withDiscountCard } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/useContext";

const Body = () => {
  const [restaurantList, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestaurantCardDiscount = withDiscountCard(RestaurantCard);
  useEffect(() => {
    if (onlineStatus === true) fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurantListData =
      json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(
      "Discount " + restaurantListData[0].info.aggregatedDiscountInfoV3.header
    );
    const dataToDisplay = restaurantListData.map((resto) => {
      const { id, name, cusine, stars, deliveryTime, image, discount } = {
        id: resto.info.id,
        name: resto.info.name,
        cusine: resto.info.cuisines,
        stars: resto.info.avgRating,
        deliveryTime: resto.info.sla.deliveryTime,
        image: resto.info.cloudinaryImageId,
        discount:
          resto.info.aggregatedDiscountInfoV3 &&
          resto.info.aggregatedDiscountInfoV3.header
            ? resto.info.aggregatedDiscountInfoV3.header +
              (resto.info.aggregatedDiscountInfoV3.subHeader || "")
            : "",
      };

      resto.info.cuisines;
      return {
        id,
        name,
        cusine,
        stars,
        deliveryTime,
        image,
        discount,
      };
    });
    console.log(dataToDisplay);
    setListOfRestaurant(dataToDisplay);
    setFilteredRestaurant(dataToDisplay);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter flex">
        <div className="search m-4 p-4 flex-1">
          <input
            type="text"
            data-testid="searchInput"
            placeholder="Search for restaurants and food"
            className="border border-solid border-green text-xl " // Added text-xl for bigger text
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg flex-1"
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
        <div className="username m-4 p-4 flex items-center">
          <input
            type="text"
            placeholder="Enter user name"
            className="border border-solid border-green text-xl " // Added text-xl for bigger text
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
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
      <div className="flex flex-wrap">
        {filteredRestaurant.map((resto) => {
          return (
            <Link key={resto.id} to={"/restaurant/" + resto.id}>
              {resto.discount != "" ? (
                <RestaurantCardDiscount key={resto.name} restData={resto} />
              ) : (
                <RestaurantCard key={resto.name} restData={resto} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
