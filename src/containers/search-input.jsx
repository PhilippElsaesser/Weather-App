import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchInput extends Component {

    render() {
        return (
            <div>
                <Input type="text" name="citySearch" id="citySearch" placeholder="Search for a City" />
            </div>
            
        )
    }
}

export default SearchInput;
