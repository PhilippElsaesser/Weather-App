import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText } from 'reactstrap';



class WeatherCard extends Component {

    transformDate(string) {
        return string.split(" ")[0].split("-").reverse().join(".")
    }

    translateWeatherIcon(string) {
        switch (string) {
            case '01d':
                return "http://openweathermap.org/img/w/01d.png";
            case '02d':
                return "http://openweathermap.org/img/w/02d.png";
            case '03d':
                return "http://openweathermap.org/img/w/03d.png";
            case '04d':
                return "http://openweathermap.org/img/w/04d.png";
            case '09d':
                return "http://openweathermap.org/img/w/09d.png";
            case '10d':
                return "http://openweathermap.org/img/w/10d.png";
            case '11d':
                return "http://openweathermap.org/img/w/11d.png";
            case '13d':
                return "http://openweathermap.org/img/w/13d.png";
            case '50d':
                return "http://openweathermap.org/img/w/50d.png";
            case '01n':
                return "http://openweathermap.org/img/w/01d.png";
            case '02n':
                return "http://openweathermap.org/img/w/02d.png";
            case '03n':
                return "http://openweathermap.org/img/w/03d.png";
            case '04n':
                return "http://openweathermap.org/img/w/04d.png";
            case '09n':
                return "http://openweathermap.org/img/w/09d.png";
            case '10n':
                return "http://openweathermap.org/img/w/10d.png";
            case '11n':
                return "http://openweathermap.org/img/w/11d.png";
            case '13n':
                return "http://openweathermap.org/img/w/13d.png";
            case '50n':
                return "http://openweathermap.org/img/w/50d.png";
            default:
                return "";
        }
    }
    
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>{this.transformDate(this.props.data.dt_txt)}</CardTitle>
                    </CardHeader>
                    <CardBody className="text-center">
                        <img src={this.translateWeatherIcon(this.props.data.weather[0].icon)} alt="" />
                    </CardBody>
                    <CardFooter>
                        <CardText >{this.props.data.main.temp.toFixed(1)}°C</CardText>
                    </CardFooter>
                </Card>
            </div>
        )
    }
}

export default WeatherCard;