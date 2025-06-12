import { CDN_URL } from "../utils/Constant";
import { useContext } from "react";
const RestaurantCard = (props) => {
    
    const { restData } = props;
    const { name, cusine, stars, deliveryTime, image } = restData;
    
    
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg">
        
          <img  className="rounded-lg"
            src={CDN_URL + image}
            alt="Logo"
          />
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cusine.join(", ")}</h4>
          <h4>{stars}</h4>
          <h4>{deliveryTime} mins</h4>
          
        
      </div>
    );
  };

  export default RestaurantCard;

  const withDiscountCard = (RestaurantCard) => {

    return (props) => {
      const { restData } = props;
     const { name, cusine, stars, deliveryTime, image,discount } = restData;
    
      return (
        <div className="p-2 m-2 relative">
          <RestaurantCard {...props} />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-black bg-opacity-70 px-2 py-1 rounded z-10">
          <h4 className="text-white font-semibold">{discount}</h4>
        </div>
          </div>
        </div>
      );
    };
  }
  export { withDiscountCard };