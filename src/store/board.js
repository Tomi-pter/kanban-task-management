import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/data.json";

let currentBoard = data.boards[0].name;
let sidebar = true;
let dark = false;
let disabled = false;
export const initialState = [data, currentBoard, sidebar, dark, disabled];

const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setBrightness: (state, action) => {
            state[3] = action.payload;
        },
        setSideBar: (state, action) => {
            state[2] = action.payload;
        },
        setDisabled: (state, action) => {
            state[4] = action.payload;
        },
        setBoard: (state, action) => {
            state[1] = action.payload;
        },
        addBoard: (state, action) => {
            state[0].boards.push(action.payload);
        },
        editBoard: (state, action) => {
            const boardIndex = state[0].boards.findIndex(
                (brd) => brd.name === action.payload.name
            );

            state[0].boards.splice(boardIndex, 1, action.payload);
            state[1] = action.payload.newName;
        },
        deleteBoard: (state, action) => {
            const boardIndex = state[0].boards.findIndex(
                (brd) => brd.name === action.payload.name
            );

            state[0].boards.splice(boardIndex, 1);
            state[1] = state[0].boards.length > 0 ? state[0].boards[0].name : "";
        },
        addTask: (state, action) => {
            state[0].boards
                .find((board) => board.name === state[1])
                .columns.find((col) => col.name === action.payload.status)
                .tasks.push(action.payload);
        },
        editTask: (state, action) => {
            const taskIndex = state[0].boards
                .find((board) => board.name === state[1])
                .columns.find(
                    (col) =>
                    col.name === action.payload.status ||
                    col.name === action.payload.colName
                )
                .tasks.findIndex((task) => task.title === action.payload.title);

            state[0].boards
                .find((board) => board.name === state[1])
                .columns.find(
                    (col) =>
                    col.name === action.payload.status ||
                    col.name === action.payload.colName
                )
                .tasks.splice(taskIndex, 1, action.payload);
        },
        deleteTask: (state, action) => {
            const taskIndex = state[0].boards
                .find((board) => board.name === state[1])
                .columns.find(
                    (col) =>
                    col.name === action.payload.status ||
                    col.name === action.payload.colName
                )
                .tasks.findIndex((task) => task.title === action.payload.title);

            state[0].boards
                .find((board) => board.name === state[1])
                .columns.find(
                    (col) =>
                    col.name === action.payload.status ||
                    col.name === action.payload.colName
                )
                .tasks.splice(taskIndex, 1);
        },
        editSub: (state, action) => {
            const subIndex = state[0].boards
                .find((board) => board.name === state[1])
                .columns.find(
                    (col) =>
                    col.name === action.payload.status ||
                    col.name === action.payload.colName
                )
                .tasks.find((task) => task.title === action.payload.title)
                .subtasks.findIndex(
                    (sub) => sub.title === action.payload.subTitle.title
                );

            state[0].boards
                .find((board) => board.name === state[1])
                .columns.find(
                    (col) =>
                    col.name === action.payload.status ||
                    col.name === action.payload.colName
                )
                .tasks.find((task) => task.title === action.payload.title).subtasks[
                    subIndex
                ].isCompleted = action.payload.subTitle.isCompleted;

            console.log(subIndex);
        },
    },
});

// export const fetchData = createAsyncThunk("boards/fetchData", async() => {
//     const response = await fetch("/data/data.json");
//     const data = await response.json();
//     return data;
// });

console.log(initialState);

export const {
    setBrightness,
    setSideBar,
    setDisabled,
    setBoard,
    addBoard,
    editBoard,
    deleteBoard,
    addTask,
    editTask,
    deleteTask,
    editSub,
} = boardSlice.actions;
export const boardReducer = boardSlice.reducer;