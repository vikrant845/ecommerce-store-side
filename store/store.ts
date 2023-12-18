import { configureStore } from "@reduxjs/toolkit";
import previewReducer from "@/store/slices/previewSlice";
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
