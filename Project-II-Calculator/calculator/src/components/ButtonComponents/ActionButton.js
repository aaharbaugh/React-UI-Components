import React from 'react';
import './Button.css';

function ActionButton(props) {

  if(props.button.symbol === 'clear'){
    return (
      <button onClick={props.clickHandler} className={[props.button.style + " button"]} value={props.button.symbol}>
      {props.button.symbol}
      </button>
      )
  } else {
      return (
        <button className={[props.button.style + " button"]} value={props.button.symbol}>
        {props.button.symbol}
        </button>
      )
  }
};

export default ActionButton;
