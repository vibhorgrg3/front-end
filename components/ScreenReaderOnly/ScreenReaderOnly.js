import { node } from 'prop-types';
import React from 'react';
import styles from './ScreenReaderOnly.css';

ScreenReaderOnly.propTypes = {
  children: node.isRequired,
};

export default function ScreenReaderOnly({ children }) {
  return <span className={styles.ScreenReaderOnly}>{children}</span>;
}
