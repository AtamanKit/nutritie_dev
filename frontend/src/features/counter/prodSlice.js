import { createSlice } from '@reduxjs/toolkit';

export const prodSlice = createSlice({
    name: 'prodCart',
    initialState: {
        items: []
    },

    reducers: {
        incrementProd: (state, { payload }) => {
            const item = state.items.find((item) => item.id === payload);
             if (item) {
                 item.value += 1;
             } else {
                state.items.push({id: payload, value: 2})
             }
        },
        decrementProd: (state, { payload }) => {
            const item = state.items.find((item) => item.id === payload);
            if (item) {
                if (item.value > 0) {
                    item.value -= 1;
                } else {
                    item.value = 0;
                }
            } else {
                state.items.push({id: payload, value: 0})
            }
        }
    }
})

export const { incrementProd, decrementProd } = prodSlice.actions

export default prodSlice.reducer