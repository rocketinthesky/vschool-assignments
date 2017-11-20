import React, {Component} from "react";
import Name from "./Name";

class NameContainer extends Component{
  render(){
    const names = [];

    return names.map((name, index)=>{
      return <Name
        name={name}
        key={index+name}
      />
    })
  }
}

export default NameContainer;
