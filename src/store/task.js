import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./board";

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state[0].boards
                .find((board) => board.name === state[1])
                .columns.find((col) => col.name === action.payload.status)
                .tasks.push(action.payload);
        },
    },
});

export const { addTask } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;