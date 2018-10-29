export const FETCH_NEW_WEATHER = "FETCH_NEW_WEATHER"

export const fetchNewWeatherData = (city) => {
    console.log("New Weather Data Please");

    return (dispatch) => {
        const url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&APPID=fb1c454be88a26a704176c20fe3879d3";
        return fetch(url)    
                .then(results => results.json())
                .then(data => {console.log("New five Day forecast :", data); dispatch({ type:"FETCH_NEW_WEATHER", payload: data})})
    }
}
