import { combineReducers } from 'redux';
import inputReducer from './input-reducer';

const allReducers = combineReducers({
    city: inputReducer,
});

export default allReducers;