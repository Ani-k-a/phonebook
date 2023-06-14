import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: []
    },
    reducers: {
        addContact: {
            reducer(state, action) { state.items.push(action.payload) },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid()
                    }
                }
            }
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(item => item.id !== action.payload);
            state.items.splice(index, 1)
        }
    }

}
);

export const contactsReducer = contactsSlice.reducer

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}

export const persistedReducer = persistReducer(
    persistConfig,
    contactsReducer
)

export const { addContact, deleteContact } = contactsSlice.actions;

