import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import DigitButtons from './components/DigitButtons/DigitButtons.module';
import FunctionButtons from './components/FunctionButtons/FunctionButtons.module';

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue
}

class Calculator extends React.Component {
  /**
  * @property {number} value Input digit
  * @property {string} operator
  * @property {string} displayValue
  * @property {boolean} waitingForOperand
  */
  state = {
    value: null,
    operator: null,
    displayValue: 0,
    waitingForOperand: false,
  };

  handleClear = () => {
    this.setState({
      value: null,
      operator: null,
      displayValue: 0,
      waitingForOperand: false,
    })
  }

  /**
  * @property {string} nextOperator
  */
  performOperation = (nextOperator) => {
    const { value, displayValue, operator, waitingForOperand } = this.state;
    let inputValue = Number(displayValue);

    if (value === null) {
      this.setState({
        value: inputValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const newValue = CalculatorOperations[operator](currentValue, inputValue)

      this.setState({
        value: newValue,
        displayValue: String(newValue)
      })
    }

    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })

  }

  /**
  * @property {number} digit
  */
  handleInputDigit = (digit) => {
    const { displayValue, waitingForOperand } = this.state;

    if (!waitingForOperand) {
      this.setState({
        displayValue: (displayValue !== 0 ? displayValue : '') + '' + digit,
      })
    } else {
      this.setState({
        displayValue: digit,
        waitingForOperand: false,
      })
    }

  }

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.displayValue}</div>

        <div className="wrapper-keys">
          <div className="left-area">
            <button className="btn-clear" onClick={() => this.handleClear()}>clear</button>
            <DigitButtons func={this.handleInputDigit} />
          </div>
          <div className="right-area">
            <FunctionButtons func={this.performOperation} />
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);