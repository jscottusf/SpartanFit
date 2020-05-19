import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertMessage(props) {
  if (props.show) {
    return <Alert variant={props.variant}>{props.message}</Alert>;
  } else {
    return null;
  }
}

export default AlertMessage;
