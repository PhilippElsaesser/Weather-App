import React from 'react';
import { Row, Col } from 'reactstrap';
import SearchInput from '../containers/search-input';
import SearchButton from '../containers/search-button';

const SearchBar = () => {
    return (
            <Row>
                <Col xs={{ size: 7, offset: 1}}>
                    <SearchInput />
                </Col>
                <Col xs={{ size: 4}}>
                    <SearchButton />
                </Col>
            </Row>
    )  
}


export default SearchBar;