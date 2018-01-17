import React, {Component} from "react";
import Navbar from "./Navbar";
import Map from "./Map";
import Entries from "./Entries";

const ReactRouter = require("react-router-dom");
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Map} />
          <Route path="/entries" component={Entries} />
        </div>
      </Router>
    )
  }
}

export default App;
