

// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/Auth/authSlice'; // Import your auth slice here  
// import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist'; import storage from 'redux-persist/lib/storage';

// const persistConfig = { key: 'auth', storage, };

// const persistedReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({ reducer: { auth: persistedReducer, }, middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], } }), });

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage use hoga
import { combineReducers } from "redux";
import searchReducer from "../features/searchSlice"; // Import your search slice here

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  search: searchReducer,
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
