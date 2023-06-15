import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { getIsLoading, getError } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactsList />
      </Section>
    </>
  );
}
