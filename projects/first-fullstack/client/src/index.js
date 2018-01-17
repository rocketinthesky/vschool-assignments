import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {createStore} from 'redux';
import {Provider} from "react-redux";
import rootReducers from './reducers';
import App from "./App";

// const API_KEY = `AIzaSyBFU669998QbX5O9FIFaeczqLz6oQgGxr4`;

const store = createStore(rootReducers);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById("root"));
