import React, {Component} from "react";
import Navbar from "./Navbar";
import MyMapComponent from "./Map";
// import StyledMapWithAnInfoBox from "./TestMap";

export default function App(props) {
  return (
    <div>
      <Navbar />
      <MyMapComponent />
    </div>
  )
}
