import React from "react";

const NavButtons = function(props) {
  return(
    <div className="btn-group">
      <button type="button" className="btn btn-primary" id="al-jazeera" onClick={()=>props.liveFeed("Al Jazeera Live")}>Al Jazeera</button>
      <button type="button" className="btn btn-primary" id="bbc">BBC</button>
      <button type="button" className="btn btn-primary" id="sky">Sky</button>
      <button type="button" className="btn btn-primary" id="bloomberg">Bloomberg</button>
    </div>
  )
}

export default NavButtons;
