import {combineReducers} from "redux";
import EntriesReducer from './reducer_entries';
import ActiveEntry from './reducer_active_entry';

const rootReducer = combineReducers({
  entries: EntriesReducer
});

export default rootReducer;
