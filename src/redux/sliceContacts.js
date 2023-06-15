import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchContacts.rejected](state) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
}
);

export const contactsReducer = contactsSlice.reducer;

