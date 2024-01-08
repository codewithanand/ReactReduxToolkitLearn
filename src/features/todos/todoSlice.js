import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo(state, action){
            state.push({id: action.payload.id, text: action.payload.text, completed: false})
        },
        toggleTodo(state, action){
            state.filter(todo => todo.id === action.payload.id ? todo.completed=!todo.completed : todo)
        },
        deleteTodo(state, action){
            return state.filter(item => item.id !== action.payload.id)
        }
    },
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer