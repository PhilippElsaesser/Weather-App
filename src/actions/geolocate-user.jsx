export const geolocateUser = () => {
    console.log("geolocate user");

    return (dispatch) => {
        return fetch("http://api.ipapi.com/api/check?access_key=182bf9d31ca77d82558ad4a2a2000dbf")
                .then(result => result.json())
                .then(data => {console.log("geolocation recieved:", data); 
                                dispatch({ type:"GEOLOCATE_USER", payload: data})})
    }
}