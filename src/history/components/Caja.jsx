import React from  'react';
import './caja.css';

function Caja(props) {
  return (
    <div className="caja">
      <h2>{props.title}</h2>
    </div>
  );
}

export default Caja;
