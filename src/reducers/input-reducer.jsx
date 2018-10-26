export default function(state="" , action) {
    switch(action.type) {
        case "INPUTVALUE_CHANGED":
            return action.payload;
        default:
            return state;
    }
}