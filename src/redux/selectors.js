export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.getIsloading;
export const getError = state => state.tasks.error;


export const getFilter = state => state.filter;


export const getFilteredContacts = state => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    if (contacts && filter) {
        return contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase().trim()))
    }
    return contacts;
};