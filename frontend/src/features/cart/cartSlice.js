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
            console.log(state.items.indexOf(payload))
        },
    }
})

export const { incrementCart, decrementCart } = cartSlice.actions

export default cartSlice.reducer