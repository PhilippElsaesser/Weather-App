import React from 'react';
import { Row, Col } from 'reactstrap';
import SearchInput from '../containers/search-input';
import SearchButton from '../containers/search-button';

const SearchBar = () => {
    return (
            <Row className="mt-5">
                <Col xs={{ size: 5, offset: 3}}>
                    <SearchInput />
                </Col>
                <Col xs={{ size: 4}}>
                    <SearchButton />
                </Col>
            </Row>
    )  
}

export default SearchBar;