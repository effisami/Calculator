import React from 'react';
import './App.css';
//import Plus from './plus';
import './App.css';



class App extends React.Component {
state={
  inputValue: '',
  storedValue:'',
  result : null,
  operator : '+',
  selectedButton :''
}


changeInputValue = (event) => {
  this.setState({inputValue: event.target.value})
}
deleteRow = (event) => {
  this.setState({result: event.target.value})
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
  if(this.state.result === null) {
    newResult = Number(this.state.inputValue)
  }
  else{
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
  let latestOperator = this.state.operator
  if(latestOperator === '+'){
  newResult = this.state.result + Number(this.state.inputValue)
  }
  else if( latestOperator === '-'){
    newResult = this.state.result - Number(this.state.inputValue)
  }
  this.setState({
    storedValue: newResult,
    operator: '+',
    result: newResult,
    inputValue: ''
    
  })
}












equalsTo = () => {
  
}
 
  render(){
    console.log(`this is: operator=${this.state.operator}, inputValue=${this.state.inputValue}`);
    console.log('state', this.state);
    return (
      <div className="App">
      <input type="text" onChange={ event => this.changeInputValue(event)} value={this.state.inputValue} /><br/>
      <button onClick={this.plus}>+</button>
      <button onClick={this.minus}>-</button>
      <button onClick={this.likamed}>=</button>
      <button onClick={(e) => this.deleteRow(e)}>CE</button><br/>
      <button onClick={this.plus}>m-</button><br/>
      
      <span>result:
      result {this.state.result}
      </span><br/>

      <span> operator:
      result{this.state.operator}
      </span><br/>

      <span> inputvalue:
      result{this.state.inputValue} 
      </span>
     
      
       
    
      </div>
    );
  }

}



export default App;


//<Plus />

