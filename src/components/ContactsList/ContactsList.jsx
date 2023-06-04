import React from 'react';
import css from './ContactsList.module.css';
import { useSelector } from 'react-redux';

export function ContactsList() {
  const contacts = useSelector(state => state.contacts);
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <div className={css.name}>{name}</div>
          <div>{number}</div>
          <button className={css.button} onClick={() => {}}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
