import { configureStore } from "@reduxjs/toolkit";
import { boardReducer } from "./board";
import { taskReducer } from "./task";

const store = configureStore({
    reducer: {
        board: boardReducer,
        task: taskReducer,
    },
});

export default store;