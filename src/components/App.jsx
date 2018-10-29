import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { geolocateUser } from '../actions/geolocate-user';
import { fetchNewWeatherData } from '../actions/fetch-new-weather-data';
import MainHeading from './main-heading';
import SearchBar from './search-city-layout';
import FiveDays from '../containers/five-day-layout';


class App extends Component {

  componentWillMount() {
   this.props.geolocateUser();
  }

  componentDidUpdate() {
    if(this.props.userData)
      this.props.fetchNewWeatherData(this.props.userData.city);
  }

  render() {
    return (
      <Container>
        <MainHeading />
        <SearchBar />
        <FiveDays />
      </Container>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return {
    geolocateUser: bindActionCreators(geolocateUser, dispatch),
    fetchNewWeatherData: bindActionCreators(fetchNewWeatherData, dispatch),
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
