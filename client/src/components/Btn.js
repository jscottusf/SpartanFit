import React from 'react';

function Btn(props) {
  return <button {...props}>{props.label}</button>;
}

export default Btn;
