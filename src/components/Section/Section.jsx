import React from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export function Section({ title}) {
  return (
    <div className={css.section}>
      <h2 className={css.title}>{title}</h2>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
