import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalPrice: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItemToCart(state,action) {
            state.cartItems.push(action.payload)
            state.totalPrice = state.totalPrice + Number(action.payload.price)
        },
        deleteItemFromCart(state,action){
            state.cartItems.filter(obj=>obj.id!==action.payload.id)
            state.totalPrice = state.totalPrice - action.payload.price
        }
    }
})



export const {addItemToCart,deleteItemFromCart} = cartSlice.actions;

export default cartSlice.reducer;