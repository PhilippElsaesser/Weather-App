import React, { Component } from 'react';
import { Button } from 'reactstrap';
import  { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchNewWeatherData } from '../actions/fetch-new-weather-data';

class SearchButton extends Component {

    render() {
        return (
            <div>
                <Button onClick={() => this.props.fetchNewWeatherData(this.props.city)} color="info">Search</Button>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        city: state.city,
    }
}

function matchDispatchToProps(dispatch) {
    return {
        fetchNewWeatherData: bindActionCreators(fetchNewWeatherData, dispatch)
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchButton);