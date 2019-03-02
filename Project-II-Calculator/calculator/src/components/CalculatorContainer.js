import React from 'react';
import './ButtonComponents/Button.css';

import NumberButton from './ButtonComponents/NumberButton';
import ActionButton from './ButtonComponents/ActionButton';
import CalculatorDisplay from './DisplayComponents/CalculatorDisplay';

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

const actionButton = [
    {
        style: "redsingle",
        symbol: "÷"
    },{
        symbol: "X",
        style: "redsingle"
    },{
        symbol: "-",
        style: "redsingle"
    },{
        symbol: "+",
        style: "redsingle"
    },{
        symbol: "=",
        style: "redsingle"
    }
]

const ClearButton =
    {
        symbol: "clear",
        style: "whitetriple"
    }

const CalculatorContainer = () => {
  return (
    <div className="fullcontainer">
        <CalculatorDisplay />
        <div className="leftside">
            <ActionButton button={ClearButton} />
            <div className="numberbuttons">
                {
                    numButton.map(number => (
                        <NumberButton button={number} key={number.text}/>
                    ))
                }
            </div>
        </div>
        <div className="rightside">
            <div className="actionbuttons">
                {
                    actionButton.map(action => (
                        <ActionButton button={action} key={action.symbol}/>
                    ))
                }
            </div>
        </div>
    </div>
  );
};

export default CalculatorContainer;
