import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Switch, Route} from "react-router-dom";
import QualityList from "./QualityList";
import AddQuality from "./AddQuality";

export default function App(props) {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={QualityList}/>
                <Route path="/add-quality" component={AddQuality}/>
            </Switch>
            <Footer/>
        </div>
    )
}
