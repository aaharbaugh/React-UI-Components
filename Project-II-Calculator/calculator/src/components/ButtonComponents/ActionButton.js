import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <div className={[props.button.style + " button"]}>
        {props.button.symbol}
    </div>
  );
};

export default ActionButton;
