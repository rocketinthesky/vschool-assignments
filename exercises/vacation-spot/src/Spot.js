import React from "react";

function Spot(props){
  const styles = {
    border: "dotted black 2px",
    width: "33%",
    height: "300px",
    display: "inline-block",
    verticalAlign: "top",
    position: "relative",
    padding: "10px",
    backgroundColor: "light blue"
  }

  return(
    <div style={styles}>
      <h2>{props.place}</h2>
      <h4>{props.timeToGo}</h4>
      <h6>{props.price}</h6>
    </div>
  )
}

export default Spot;
