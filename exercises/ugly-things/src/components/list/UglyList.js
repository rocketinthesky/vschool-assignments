import React from "react";
import {connect} from "react-redux";

const styles = {
  height: "800px",
  margin: "auto",
  background: "#40E0D0",  /* fallback for old browsers */
  background: "-webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0)",  /* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to right, #FF0080, #FF8C00, #40E0D0)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

const liStyles = {
  textAlign: "center",
  listStyle: "none",
  width: "25%",
  height: "200px",
  float: "left",
  margin: "10px",
  border: "1px solid black"
}

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
  margin: "0",
  padding: "0"
}

function UglyList(props) {
  const items = props.items.map((item, i) =>
  <li key={item.title + i} style={liStyles}>
    <h2>{item.title}</h2>
    <img src={item.image} style={imageStyle}/>
    <p>{item.desc}</p>
  </li>)
  return (
    <ul style={styles}>
      {items}
    </ul>
  )
}

function mapStateToProps(state){
  return state;
}

// export default UglyList;
export default connect(mapStateToProps, null)(UglyList);
