import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { changeInputValue } from '../actions/change-input-value';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchInput extends Component {


    render() {
        return (
            <div>
                <Input onChange={(event) => this.props.changeInputValue(event.target.value)} value={this.props.city} type="text" name="citySearch" id="citySearch" placeholder="Search for a City" />
            </div>
            
        )
    }
}

function matchDispatchToProps(dispatch) {
    return {
        changeInputValue: bindActionCreators(changeInputValue, dispatch),
    };
}

function mapStateToProps(state) {
    return {
        city: state.city,
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchInput);
