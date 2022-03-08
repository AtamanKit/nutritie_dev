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

import counterReducer from '../features/cart/counterSlice';
import prodReducer from '../features/cart/prodSlice';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/auth/userSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    prodCart: prodReducer,
    cart: cartReducer,
    user: userReducer,
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