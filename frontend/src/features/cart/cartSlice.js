import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: '',
    },

    reducers: {
        incrementCart: (state, action) => {
            // state.value += '%20'
            state.value += action.payload + '%20'
        },
        decrementCart: (state) => {
            state.value -= '%20'
        },
    }
})

export const { incrementCart, decrementCart } = cartSlice.actions

export default cartSlice.reducer