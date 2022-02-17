import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // },
    },
})

export const productInCartSlice = createSlice({
    name: 'productInCart',
    initialState: {
        value: '',
    },

    reducers: {
        incrementProductInCart: (state) => {
            state.value += '%20'
        },
        decrementProductInCart: (state) => {
            state.value += '%20'
        },
    }
})

export const { increment, decrement } = counterSlice.actions
export const { incrementProductInCart, decrementProductInCart } = productInCartSlice

export default counterSlice.reducer
export default productInCartSlice.reducer