import { combineReducers } from 'redux';
import inputReducer from './input-reducer';
import weatherDataReducer from './weather-data-reducer';

const allReducers = combineReducers({
    city: inputReducer,
    weatherData: weatherDataReducer,
});

export default allReducers;