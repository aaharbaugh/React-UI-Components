import React from 'react';
import './Button.css';

function NumberButton(props) {
  return (
    <div className={[props.button.style + " button"]}>
        {props.button.text}
    </div>
  );
};

export default NumberButton;
