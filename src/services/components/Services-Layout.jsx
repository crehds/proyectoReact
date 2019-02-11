import React from 'react';
import './services-layout.css';

function ServicesLayout(props) {
  return (
    <section className="Services">
      {props.children}
    </section>
  );
}

export default ServicesLayout;
