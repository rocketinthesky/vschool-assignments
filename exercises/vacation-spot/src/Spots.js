import React from "react";
import Spot from "./Spot";

function Spots(){
  let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: "$40",
    timeToGo: "Spring"
  },{
    place: "Cancun",
    price: "$900",
    timeToGo: "Winter"
  },{
    place: "China",
    price: "$1200",
    timeToGo: "Fall"
  },{
    place: "Russia",
    price: "$1100",
    timeToGo: "Summer"
  },{
    place: "Lebanon",
    price: "$400",
    timeToGo: "Spring"
  }
]

  return vacationSpots.map((spot) => {
    return(
    <Spot
      place={spot.place}
      price={spot.price}
      timeToGo={spot.timeToGo}
    />
  )
 })
}

export default Spots;
