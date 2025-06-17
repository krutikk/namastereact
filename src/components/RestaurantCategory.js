import React, { use, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../utils/cartSlices"; // Adjust the import path as necessary
import ItemList from "./ItemList"; 

const RestaurantCategory = ({ title, children, showItems, setShowIndex }) => {

  const dispatch = useDispatch();
  const toggleAccordion = () => {
    setShowIndex();
  };

  

  const handleAddToCart = (item) => {
    
    dispatch(addItemToCart(item));
   
  };

  const handleRemoveFromCart = (item) => {
    const itemId = item?.card?.info?.id;
    dispatch(removeItemFromCart(itemId));
  
  };

  return (
    <div className="border border-gray-300 mb-2 rounded-lg px-4">
      <button
        onClick={toggleAccordion}
        className="w-full text-left py-3 bg-gray-100 border-none outline-none cursor-pointer font-bold rounded-t-lg"
      >
        {title} {showItems ? "▲" : "▼"}
      </button>
      {showItems && (
        <ItemList
          children={children}
        
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}
    </div>
  );
};

export default RestaurantCategory;
