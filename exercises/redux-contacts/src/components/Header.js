import React from "react";

const styles = {
  textAlign: "center",
  color: "white",
  background: "#2c3e50",  /* fallback for old browsers */
  background: "-webkit-linear-gradient(to right, #3498db, #2c3e50)",  /* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to right, #3498db, #2c3e50)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

export default function Header(props) {
  return (
    <header style={styles}>
      <h1>Contacts</h1>
    </header>
  )
}
