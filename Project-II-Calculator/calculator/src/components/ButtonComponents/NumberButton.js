import React from 'react';
import './Button.css';

const NumberButton = props => {
  const { clickHandler, button} = props;
  return (
    <button onClick={clickHandler} className={[button.style + " button"] } value={button.text}>
        {button.text}
    </button>
  );
};

export default NumberButton;
