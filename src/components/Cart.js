
import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../utils/cartSlices";

const Cart = () => {
  const cartItems = useSelector((store) => {
    const seen = new Set();
    return store.cart.items.filter((item) => {
      const itemId = item?.card?.info?.id;
      if (seen.has(itemId)) return false;
      seen.add(itemId);
      return true;
    });
  });

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    const itemId = item?.card?.info?.id;
    dispatch(removeItemFromCart(itemId));
  };
  const quantity = cartItems.length;
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h2 className="text-2xl font-bold mt-6 mb-6">Cart</h2>
      {quantity === 0 ? (
      <div className="text-gray-500 text-lg">Your cart is empty</div>
      ) : (
      <>
        <button
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => dispatch({ type: "cart/clearCart" })}
        >
        Clear Cart
        </button>
        <ItemList
        children={cartItems}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        />
      </>
      )}
    </div>
    );
};
export default Cart;
