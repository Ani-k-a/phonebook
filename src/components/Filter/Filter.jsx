import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from 'redux/index';

export function Filter() {
  const filter = useSelector(selectors.selectFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        onChange={ev => dispatch(selectors.selectFilter(ev.target.value))}
        value={filter}
        type="text"
        name="filter"
      />
    </label>
  );
}
