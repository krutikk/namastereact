import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestauratMenu = (props) => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  
  const { restaurantMenu, restName, categories } = useRestaurantMenu(resId);

  return (
    <div className="restaurant-menu">
      <h1 className="font-bold my-6 text-2xl text-center">{restName}</h1>
     

      {categories?.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card.title}
            title={category?.card?.card.title}
            children={category?.card?.card.itemCards}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          ></RestaurantCategory>
        );
      })}
    </div>
  );
};

export default RestauratMenu;
