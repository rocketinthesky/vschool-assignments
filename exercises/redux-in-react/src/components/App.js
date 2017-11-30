import React from "react";
import {connect} from "react-redux";

import {increment, decrement} from "../redux/counter";

function App(props) {
  return (
    <div>
      <span>{props.counter}</span><br/>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </div>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {increment, decrement})(App);
