import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
  const listofdata=props.data.map((d,i)=>
      <li>
        <span>{d.name}</span>
        <span style={{marginLeft:"5px"}}>{d.age}</span>
      </li>
  );

  return (
    <ul>
    {listofdata}
    </ul>
  );
}

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

ReactDOM.render(
  <DataList data={ data } />,
  document.getElementById('root')
);
