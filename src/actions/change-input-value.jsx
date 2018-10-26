export const changeInputValue = (inputValue) => {
    console.log("Inputvalue changed", inputValue)
    return {
        type: "INPUTVALUE_CHANGED",
        payload: inputValue
    }
};