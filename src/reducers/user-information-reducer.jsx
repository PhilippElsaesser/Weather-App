import { GEOLOCATE_USER } from '../actions/geolocate-user';;

export default function(state=[], action) {
    switch (action.type) {
        case GEOLOCATE_USER:
            return action.payload;
        default:
            return state;
    }
}