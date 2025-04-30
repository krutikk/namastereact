import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestauratMenu = (props) => {
  const [restaurantMenu, setRestaurantMenu] = useState();
  const [restName, setRestaurantName] = useState();
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    const restName = json?.data?.cards[0]?.card?.card?.text;
    setRestaurantName(restName);
    const dishesList =
      json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    const dishes = dishesList?.map((dish) => {
      const name = dish?.card?.info?.name || "";
      const price = dish?.card?.info?.price || "";
      const description = dish?.card?.info?.description || "";

      return { name, price, description };
    });

    setRestaurantMenu(dishes);
  };


  return (
    <div className="restaurant-menu">
      <h1>{restName}</h1>

      <h2>Menu</h2>
      <ul>
        {console.log(restaurantMenu)}
        {restaurantMenu?.map((dish) => {
          return (
            <li key={dish.name}>
              <h3>{dish.name}</h3>
              <p>{dish.description}</p>
              <p>Price: {dish.price / 100}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestauratMenu;
