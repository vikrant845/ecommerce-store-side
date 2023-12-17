import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "@/store/slices/previewSlice";
import cartReducer from '@/store/slices/cartSlice';
// import { persistReducer, persistStore } from "redux-persist";
// import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//   previewReducer,
//   cartReducer
// });

// const persistConfig = {
//   key: 'root',
//   storage
// };

// export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    preview: previewReducer,
    cart: cartReducer,
  }
});
// export const store = configureStore({
//   reducer: {
//     root: rootReducer
//   },
//   middleware: getDefaultMiddleware => getDefaultMiddleware({
//     serializableCheck: false
//   })
// });

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
