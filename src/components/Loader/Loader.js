import React from 'react';
import './Loader.css';

const Loader = ({ show }) => (
  <div className={`loader ${show ? "visible" : "hidden"}`}>
    <div className="loader-content">
      <div className="spinner"></div>
      <span>Завантаження...</span>
    </div>
  </div>
);

export default Loader;