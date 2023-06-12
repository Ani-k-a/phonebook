import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filer',
    initialState: '',
    reducers: {
        setFilter(state, action) { return action.payload }
    }
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;