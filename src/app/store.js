import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
import filterReducer from "../features/filters/filterSlice";

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        filters: filterReducer
    }
})