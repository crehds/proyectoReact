import React from 'react';
import './menu.css';

function Menu(props) {
  return (
    <nav
      className="menu"
    >
      <ul>
        {props.menu.map((item) =>
          <li key={item.id}>
            <a href={item.href}>{item.title}
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Menu;
