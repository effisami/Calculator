import React from 'react';
import './App.css';
class App extends React.Component {
  state = {
    inputValue: '',
    storedValue: '',
    result: null,
    operator: '+',
    selectedButton: ''
  }

  changeInputValue = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  deleteRow = (event) => {
    this.setState({
      result: null,
      storedValue: '',
      operator: '+',
      inputValue: ''
    })
  }

  plus = () => {
    let newResult = this.state.result + Number(this.state.inputValue)
    this.setState({
      result: newResult,
      operator: '+',
      inputValue: ''
    })
  }

  minus = () => {
    let newResult
    if (this.state.result === null) {
      newResult = Number(this.state.inputValue)
    }
    else {
      newResult = this.state.result - Number(this.state.inputValue)
    }
    this.setState({
      result: newResult,
      operator: '-',
      inputValue: ''
    })
  }
  
  likamed = () => {
    let newResult;
    let input = Number(this.state.inputValue);
    let latestOperator = this.state.operator
    if (latestOperator === '+') {
      newResult = this.state.result + input;
    }
    else if (latestOperator === '-') {
      newResult = this.state.result - input;
    }
    this.setState({
      storedValue: newResult,
      result: newResult,
      inputValue: ''
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={event => this.changeInputValue(event)} value={this.state.inputValue} /><br />
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.likamed}>=</button>
        <button onClick={(e) => this.deleteRow(e)}>CE</button><br />

        <span>result: {this.state.result}
        </span><br />

        <span> operator: {this.state.operator}
        </span><br />

        <span> inputvalue: {this.state.inputValue}
        </span>
      </div>
    );
  }

}

export default App;
