import css from './ContactsList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectors, operations } from 'redux/index';
import { useEffect } from 'react';

export function ContactsList() {
  const contacts = useSelector(selectors.selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <div className={css.name}>{name}</div>
          <div>{number}</div>
          <button
            className={css.button}
            onClick={() => dispatch(operations.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
