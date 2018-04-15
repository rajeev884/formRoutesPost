import { combineReducers } from 'redux';
import { reducer as form } from "redux-form";
import ReducerPost from './reducer_post';
const rootReducer = combineReducers({
  ReducerPost,form
});

export default rootReducer;
