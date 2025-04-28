import { CDN_URL } from "../utils/Constant";
const RestaurantCard = (props) => {
    
  const { restData } = props;
    const { name, cusine, stars, deliveryTime, image } = restData;
    
    return (
      <div className="resto-card">
        <div className="card">
          <img className="resto-img"
            src={CDN_URL + image}
            alt="Logo"
          />
          <h3>{name}</h3>
          <h4>{cusine.join(", ")}</h4>
          <h4>{stars}</h4>
          <h4>{deliveryTime} mins</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard;