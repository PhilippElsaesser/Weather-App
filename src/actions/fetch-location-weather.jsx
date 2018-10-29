export const FETCH_LOCATION_WEATHER = "FETCH_LOCATION_WEATHER"

export const fetchLocationWeather = (lat,lon) => {
    return (dispatch) => {
        const url = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=fb1c454be88a26a704176c20fe3879d3"
        return fetch(url)
                .then( data => {
                    dispatch({ type: "FETCH_LOCATION_WEATHER", payload: data })
                });
    }
}