import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import qualities from "./quality";

const rootReducer = combineReducers({
    qualities
})

export default createStore(rootReducer, applyMiddleware(thunk));
