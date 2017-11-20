import React, {Component} from "react";
import Name from "./Name";

class NameContainer extends Component{
  render(){
    const names = ["Bobby", "Derek", "Frank", "Lanie", "Neil", "Andrew", "Brandon", "Josh", "Kyle", "Jeremy", "Luke", "Adam", "Calvin", "Dan"];

    return names.map((name, index)=>{
      return <Name
        name={name}
        key={index+name}
      />
    })
  }
}

export default NameContainer;
