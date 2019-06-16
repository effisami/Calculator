import React, {Component} from 'react';
import './App.css';



class Plus extends Component {
    handleClick() {
        console.log('this is:', this);
      }
      deleteRow(){
          console.log('this is:', this);
      }
      onClick(){
          console.log('this is:', this);
      }
    render() {
        return (
            <div className="button">
                  <label>
                  <input type="text" name="sifror" />
                  </label><br/>
                <button name="+" onClick={(e) => this.handleClick(e)}>+</button>
                <button name="+" onClick={e => this.onClick(e.target.name)}>+</button>
                <button name="-" onClick={e => this.onClick(e.target.name)}>-</button>
                <button name="=" onClick={e => this.onClick(e.target.name)}>=</button>
                <button name="CE" onClick={e => this.onClick(e.target.name)}>CE</button>
                <button name="-m" onClick={e => this.onClick(e.target.name)}>-m</button>
                <button name="+m" onClick={e => this.onClick(e.target.name)}>+m</button>
                <button onClick={(e) => this.deleteRow(e)}>CE</button>
            </div>
            
        );
    }
}


export default Plus;

