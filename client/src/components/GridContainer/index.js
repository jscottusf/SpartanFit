import React from 'react';
import './style.css';

//must include grid template cols in style example: style={{ 'grid-template-columns': '1fr 1fr' }} ; (1fr is auto)
function GridContainer(props) {
  return <div className="grid-container" {...props} />;
}

export default GridContainer;
