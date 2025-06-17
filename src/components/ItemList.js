import { useSelector } from "react-redux";

const ItemList = ({ children, handleAddToCart, handleRemoveFromCart }) => {
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="py-3 bg-white">
      {children?.map((item) => {
        const itemId = item?.card?.info?.id;
        const cartids = cart.filter((cartItem) => cartItem.card?.info?.id === itemId);
        
        const quantity = cartids.length;
        return (
          <div
            key={item?.card?.info?.id}
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
              <div className="mt-2 flex items-center gap-2">
                {quantity > 0 ? (
                  <>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      -
                    </button>
                    <span className="font-bold">{quantity}</span>
                    <button
                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                      onClick={() => handleAddToCart(item)}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
