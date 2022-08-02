import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

let currentBoard = "Platform Launch";
export const initialState = [data, currentBoard];

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setBoard: (state, action) => {
            state[1] = action.payload;
        },
        addBoard: (state, action) => {
            state[0].boards.push(action.payload);
        },
        addTask: (state, action) => {
            state[0].boards
                .find((board) => board.name === state[1])
                .columns.find((col) => col.name === action.payload.status)
                .tasks.push(action.payload);
        },
    },
});

// export const fetchData = createAsyncThunk("boards/fetchData", async() => {
//     const response = await fetch("/data/data.json");
//     const data = await response.json();
//     return data;
// });

console.log(initialState);

export const { setBoard, addBoard, addTask } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;