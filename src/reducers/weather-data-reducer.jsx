import { FETCH_NEW_WEATHER } from '../actions/fetch-new-weather-data';

export default function(state={list: []}, action) {
    switch(action.type) {
        case FETCH_NEW_WEATHER:
            return action.payload;
        default:
            return state;
    }
}