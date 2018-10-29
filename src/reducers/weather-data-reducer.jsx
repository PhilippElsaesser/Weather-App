import { FETCH_NEW_WEATHER } from '../actions/fetch-new-weather-data';
import { FETCH_LOCATION_WEATHER } from '../actions/fetch-location-weather';

export default function(state={list: []}, action) {
    switch(action.type) {
        case FETCH_NEW_WEATHER:
            return action.payload;
        case FETCH_LOCATION_WEATHER:
            return action.payload;
        default:
            return state;
    }
}