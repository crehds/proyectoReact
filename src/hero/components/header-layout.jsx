import React from 'react';
import './header-layout.css';

function HeaderLayout(props) {
  return (
    <section className="header-layout">
      {props.children}
    </section>
  );
}

export default HeaderLayout;
