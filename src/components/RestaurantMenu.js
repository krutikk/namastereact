
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestauratMenu = (props) => {
  
  const { resId } = useParams();

  const {restaurantMenu,restName} = useRestaurantMenu(resId);

  return (
    <div className="restaurant-menu">
     
      <h1>Restaurant Menu</h1>
      <h2>{restName}</h2>
      <p>
        This is the restaurant menu page for restaurant with id: {resId}
      </p>
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
