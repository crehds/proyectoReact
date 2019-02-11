import React from 'react';
import './history-layout.css';

function HistoryLayout(props) {
  return (
    <section className="History">
      {props.children}
    </section>
  );
}

export default HistoryLayout;
