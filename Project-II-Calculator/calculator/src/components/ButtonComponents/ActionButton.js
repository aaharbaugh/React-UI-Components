import React from 'react';
import './Button.css';

function ActionButton(props) {
  return (
    <div className={[props.button.style + " button"]}>
        {props.button.text}
    </div>
  );
};

export default ActionButton;
