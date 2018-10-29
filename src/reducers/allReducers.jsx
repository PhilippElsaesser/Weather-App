import { combineReducers } from 'redux';
import userInfoReducer from './user-information-reducer'; 
import inputReducer from './input-reducer';
import weatherDataReducer from './weather-data-reducer';

const allReducers = combineReducers({
    userData: userInfoReducer,
    city: inputReducer,
    weatherData: weatherDataReducer,
});

export default allReducers;