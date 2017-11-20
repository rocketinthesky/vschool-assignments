import React, {Component} from "react";

class ColorChange extends Component{
  constructor(){
    super();
    this.state = {
      bgColor: "red"
    }
    this.handleColorChange = this.handleColorChange.bind(this)
  }
  handleColorChange(){
    this.setState(prevState=>{
      if(prevState.bgColor === "red"){
        return {bgColor: "blue"}
      } else {
        return {bgColor: "red"}
      }
    })
  }
  render(){
    const styles = {
      height: "100px",
      width: "100px",
      border: "5px solid blue",
      backgroundColor: this.state.bgColor
    }
    return(
      <div style={styles} onClick={this.handleColorChange}></div>
    )
  }
}

export default ColorChange;
