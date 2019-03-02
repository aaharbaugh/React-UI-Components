import React from 'react';
import './ButtonComponents/Button.css';

import NumberButton from './ButtonComponents/NumberButton';
import ActionButton from './ButtonComponents/ActionButton';

const numButton = [
    {
        text: "7",
        style: "whitesingle"
    },{
        text: "8",
        style: "whitesingle"
    },{
        text: "9",
        style: "whitesingle"
    },{
        text: "4",
        style: "whitesingle"
    },{
        text: "5",
        style: "whitesingle"
    },{
        text: "6",
        style: "whitesingle"
    },{
        text: "1",
        style: "whitesingle"
    },{
        text: "2",
        style: "whitesingle"
    },{
        text: "3",
        style: "whitesingle"
    },{
        text: "0",
        style: "whitetriple"
    }
  ]

const CalculatorContainer = () => {
  return (
    <div className="numberbuttons">
        {
            numButton.map(number => (
                <NumberButton button={number} />
            ))
        }
    </div>
  );
};

export default CalculatorContainer;
