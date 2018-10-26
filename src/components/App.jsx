import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SearchBar from './search-city-layout';


class App extends Component {
  render() {
    return (
      <Container>
        <SearchBar />
      </Container>
    );
  }
}

export default App;
