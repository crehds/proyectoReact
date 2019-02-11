import React from 'React';
import HistoryLayout from '../components/history-layout.jsx';
import Caja from '../components/Caja.jsx';

function History(props) {
  return (
    <HistoryLayout>
    {console.log(props.history.data)}
    {
      props.history.data.map((item) => (
      <Caja
        key = {item.id}
        title = {item.title}
      />)
      )
    }
    </HistoryLayout>
  );
}

export default History;
