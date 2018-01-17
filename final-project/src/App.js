import React, {Component} from "react";
import './style/style.css';
import Cart from "./Cart";

class App extends Component {
  render() {
    return(
      <div className="content">
        <header>Header</header>
        <Cart />
        <main>Main - Merch Goes Here</main>
        <aside>Aside</aside>
        <nav>Nav</nav>
        <footer>Footer</footer>
      </div>
    )
  }
}

export default App;
