import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./redux";

import {getQualityList} from "./redux/quality";

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
store.dispatch(getQualityList());
registerServiceWorker();
