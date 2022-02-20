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
        decrementProd: (state) => {
            state.value -= 1
        }
    }
})

export const { incrementProd, decrementProd } = prodSlice.actions

export default prodSlice.reducer