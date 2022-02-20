import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from '../features/counter/counterSlice';
import prodReducer from '../features/counter/prodSlice';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    prodCart: prodReducer,
    cart: cartReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ingnoreActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ]
            },
        }),
})

export const persistor = persistStore(store);
export default store;