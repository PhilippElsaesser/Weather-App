import { combineReducers } from 'redux';
import userDataReducer from './user-information-reducer'; 
import inputReducer from './input-reducer';
import weatherDataReducer from './weather-data-reducer';

const allReducers = combineReducers({
    userData: userDataReducer,
    city: inputReducer,
    weatherData: weatherDataReducer,
});

export default allReducers;