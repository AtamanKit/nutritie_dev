//reducers to add product to the cart
//in the Cart component from cart.js we arrange the products in the cart

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },

    reducers: {
        incrementCart: (state, { payload }) => {
            state.items.push(payload);
        },
        decrementCart: (state, { payload }) => {
            const item = state.items.find(item => item.id === payload)
            if (item) {
                state.items.splice(state.items.indexOf(item), 1)
            }
        },
        emptyCart: (state) => {
            state.items.length = 0;
            // console.log('prbaSlice')
        },
    }
})

export const { incrementCart, decrementCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer