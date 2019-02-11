import React from 'react';
import './hero-layout.css';

function HeroLayout(props) {
  return (
    <section className="Hero">
      {props.children}
    </section>
  );
}

export default HeroLayout;
