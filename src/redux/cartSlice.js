import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart'))??[];

const cartSlice = createSlice ({
    name : 'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.push(action.payload)
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