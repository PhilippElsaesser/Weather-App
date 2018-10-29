import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import WeatherCard from '../components/weather-card';
import { connect } from 'react-redux';

class FiveDays extends Component {

    createWeatherCards() {
            return this.props.fiveDays.map((day, index) => {
                return (
                    <Col xs="2" key={index}>
                        <WeatherCard data={day} />
                    </Col>
                )
        }) 
    }

    render() {
        return (
            <Row className="justify-content-around mt-4">
                {this.createWeatherCards()}
            </Row>
        )
    }
}


function mapStateToProps(state) {
    return {
        fiveDays: state.weatherData.list.filter((data,index) => index%8 === 0),
    }
}

export default connect(mapStateToProps)(FiveDays);




/*

Array.prototype.arrsplit = (chunk) => {
    const result = []
    for (let i =0; i< this.length; i =+ chunk) {
        result.push(this.slice(i, i+chunk));
    }
    return result;
}

*/