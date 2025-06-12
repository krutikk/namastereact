import React, { useState } from "react";

const RestaurantCategory = ({ title, children, showItems, setShowIndex }) => {
  const toggleAccordion = () => {
    setShowIndex();
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
        <div className="py-3 bg-white">
          {children?.map((item) => (
            <div
              key={item?.card?.info?.name}
              className="flex items-start gap-4 p-4 mb-4 bg-white rounded-lg shadow border"
            >
              <img
                src={
                  item?.card?.info?.imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`
                    : "https://placehold.co/300x300"
                }
                alt={item?.card?.info?.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {item?.card?.info?.name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {item?.card?.info?.description}
                </p>
                <p className="text-green-700 font-bold">
                  Price: ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
