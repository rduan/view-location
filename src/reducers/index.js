import {combineReducers} from 'redux';
import location from './mapReducer';

const rootReducer = combineReducers({
  location,
});

export default rootReducer;