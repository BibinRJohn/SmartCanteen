import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice ({
    name : 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            //state.push(action.payload)
            const itemExists = state.find((item) => item.id === action.payload.id);
                if (!itemExists) {
                    state.push({ ...action.payload });
                } else {
                    toast.error('Item already in cart');
                }
            
        },
        deleteFromCart(state,action){
            return state.filter(item => item.id !== action.payload.id);
        },
        markAsDone(state,action){
            //return state.filter(allorder => allorder.id !== action.payload.id);
            const orderId = action.payload.id;
            const orderIndex = state.findIndex(order => order.id === orderId);
            if (orderIndex !== -1) {
              state[orderIndex].status = 'done'; // Assuming there's a status field in your order object
            }
        }
       
    }
})

export const{addToCart, deleteFromCart, markAsDone} = cartSlice.actions

export default cartSlice.reducer;