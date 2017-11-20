import React, {Component} from "react";

class Name extends Component{
  constructor(){
    super();
    this.state = {
      userName: ``,
    }
    this.submitUserName = this.submitUserName.bind(this);
    submitUserName(){
      names.push(this.state.value)
    }
    render(){
      return(
        <input type="text" value={this.state.value}></input>
        <button onClick={this.submitUserName}>Submit</button>
        <h1>{this.props.name}</h1>
      )
    }
  }
}

export default Name;
