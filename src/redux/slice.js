import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        add(state, action) { state.push(action.payload) },
        remove(state, action) { return state.filter(item => item.id !== action.payload) }
    }
});

export const filterSlice = createSlice({
    name: 'filer',
    initialState: '',
    reducers: {
        setFilter(state, action) { return action.payload }
    }
})