import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {status: 0},
    reducers: {
        setActiveFilter(state, action){
            state.status = action.payload.status
        }
    }
})

export const {setActiveFilter} = filterSlice.actions
export default filterSlice.reducer