export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.getIsloading;
export const selectError = state => state.contacts.error;


export const selectFilter = state => state.filter;


export const selectFilteredContacts = state => {
    const contacts = selectContacts(state);
    const filter = selectFilter(state);
    if (contacts && filter) {
        return contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase().trim()))
    }
    return contacts;
};