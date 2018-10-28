import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardTitle, CardText } from 'reactstrap';



class WeatherCard extends Component {

    transformDate(string) {
        return string.split(" ")[0].split("-").reverse().join(".")
    }

    translateWeatherIcon(string) {
        switch (string) {
            case ('01d' || '01n'):
                return "http://openweathermap.org/img/w/01d.png";
            case ('02d' || '02n'):
                return "http://openweathermap.org/img/w/02d.png";
            case ('03d' || '03n'):
                return "http://openweathermap.org/img/w/03d.png";
            case ('04d' || '04n'):
                return "http://openweathermap.org/img/w/04d.png";
            case ('09d' || '09n'):
                return "http://openweathermap.org/img/w/09d.png";
            case ('10d' || '10n'):
                return "http://openweathermap.org/img/w/10d.png";
            case ('11d' || '11n'):
                return "http://openweathermap.org/img/w/11d.png";
            case ('13d' || '13n'):
                return "http://openweathermap.org/img/w/13d.png";
            case ('50d' || '50n'):
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