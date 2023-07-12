import { useState } from 'react';
import Notiflix from 'notiflix';
import { addContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { ButtonForm, Form, Input, Label } from './PhonebookForm.styled';

export function PhonebookForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.some(item => item.name === name)) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Phone
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <ButtonForm
        variant="contained"
        type="submit"
        style={{
          borderRadius: '12px',
          background: '#0B4FFF',
          display: 'block',
          padding: '5px 25px',
          color: 'white',
          margin: '20px auto',
        }}
      >
        Add contact
      </ButtonForm>
    </Form>
  );
}
