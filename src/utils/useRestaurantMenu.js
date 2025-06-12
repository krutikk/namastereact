import { useEffect, useState } from "react";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantMenu, setRestaurantMenu] = useState();
  const [restName, setRestName] = useState();
  const [categories, setCategories] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        restaurantId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    const restName = json?.data?.cards[0]?.card?.card?.text;

    const dishesList =
      json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;
    const categories =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    
    const dishes = dishesList?.map((dish) => {
      const name = dish?.card?.info?.name || "";
      const price = dish?.card?.info?.price || "";
      const description = dish?.card?.info?.description || "";
      return { name, price, description };
    });

    setRestaurantMenu(dishes);
    setRestName(restName);
    setCategories(categories);
  };
  return { restaurantMenu, restName, categories };
};
export default useRestaurantMenu;
