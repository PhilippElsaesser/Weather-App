import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MainHeading from './main-heading';
import SearchBar from './search-city-layout';
import FiveDays from '../containers/five-day-layout';


class App extends Component {

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

export default App;
