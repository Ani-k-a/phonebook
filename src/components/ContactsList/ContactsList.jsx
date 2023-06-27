import { deleteContact, fetchAllContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { Filter } from 'components/Filter/Filter';
import {
  ContactWrapper,
  Item,
  List,
  Section,
  Text,
} from './ContactsList.styled';
import { Button } from '@mui/material';

export function ContactsList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Section>
      <PhonebookForm />
      <Filter />
      <List>
        {filteredContacts.map(contact => {
          return (
            <Item key={contact.id} id={contact.id}>
              <ContactWrapper>
                <Text>{contact.name}</Text>
                <Text>{contact.number}</Text>
              </ContactWrapper>
              <Button
                style={{
                  backgroundColor: '#4b754b',
                  display: 'block',
                  padding: '5px 25px',
                  color: 'white',
                }}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </Button>
            </Item>
          );
        })}
      </List>
    </Section>
  );
}
