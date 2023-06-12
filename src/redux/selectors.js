export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
    const contacts = getContacts(state);
    const filter = getFilter(state);
    if (contacts && filter) {
        return contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase().trim()))
    }
    return contacts;
};