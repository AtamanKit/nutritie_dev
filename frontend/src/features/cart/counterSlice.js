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
        decrement: (state, {payload}) => {
            if (state.value > 0) {
                state.value -= payload;
            } else {
                state.value = 0;
            }
        },
        decrementAll: (state) => {
            state.value = 0
        }
    },
})

export const { increment, decrement, decrementAll } = counterSlice.actions

export default counterSlice.reducer