import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "./board";
// import { taskReducer } from "./task";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, boardReducer);

const store = configureStore({
    reducer: {
        board: persistedReducer,
        // task: taskReducer,
    },
    middleware: [thunk],
});

export const persistor = persistStore(store);
export default store;