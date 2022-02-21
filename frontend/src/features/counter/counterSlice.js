//reducers for number increment on the cart icon in the navbar

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
    },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer