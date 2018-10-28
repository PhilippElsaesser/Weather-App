export const changeInputValue = (inputValue) => {
    return {
        type: "INPUTVALUE_CHANGED",
        payload: inputValue
    }
};