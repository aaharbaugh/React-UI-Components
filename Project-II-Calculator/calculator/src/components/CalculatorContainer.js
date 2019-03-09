import React, {Component} from 'react';
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

class CalculatorContainer extends Component {
    state = { count: '', previousCount: '' }

    addToString = e => {
        e.persist();
        this.setState(prevState =>  ({ count: prevState.count + e.target.value}));
    }

    clearPress = e => {
        e.persist();
        this.setState({count: ''})
    }

    symbolPress = e => {

    }
  
    render(){
        const { count } = this.state;
        return (
            <div className="fullcontainer">
                <CalculatorDisplay count={count}/>
                <div className="leftside">
                    <ActionButton clickHandler={this.clearPress} button={ClearButton} />
                    <div className="numberbuttons">
                        {
                            numButton.map(number => (
                                <NumberButton clickHandler={this.addToString} button={number} key={number.text}/>
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
    )
    }
}

export default CalculatorContainer;
