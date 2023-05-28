import { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import toast, { Toaster } from 'react-hot-toast';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contact => {
    if (contacts.some(el => el.name === contact.name)) {
      toast.error(`${contact.name} is already in contacts.`);
      return true;
    }
    setContacts(prevState => [...prevState, contact]);
    return false;
  };

  const handleDeleteContact = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const handleChandgeFilter = ev => setFilter(ev.target.value);

  const handleFilterContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <Form addContact={handleAddContact}></Form>
      </Section>
      <Section title="Contacts">
        <Filter value={filter} handleChange={handleChandgeFilter}></Filter>
        <ContactsList
          contacts={handleFilterContacts()}
          deleteContact={handleDeleteContact}
        />
      </Section>
      <Toaster />
    </>
  );
}
