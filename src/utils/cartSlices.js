import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0,
        totalPrice: 0,
    },
    reducers: {
        addItemToCart: (state, action) => {
            const item = action.payload;
            state.items.push(item);
            console.log("Adding item with ID:", item?.card?.info?.id);
            state.totalItems += 1;
            state.totalPrice += item.price;
        },
        removeItemFromCart: (state, action) => {
            const itemId = action.payload;
            console.log("Removing item with ID:", itemId);
            const itemIndex = state.items.findIndex(item => item?.card?.info?.id === itemId);
            if (itemIndex !== -1) {
                const item = state.items[itemIndex];
                state.items.splice(itemIndex, 1);
                state.totalItems -= 1;
                state.totalPrice -= item.price;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        },
    },
});

export default cartSlices.reducer;
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlices.actions;