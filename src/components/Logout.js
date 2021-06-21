import React, {Component} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleLogoutUser} from '../actions/authedUser';

class Logout extends Component {
    componentDidMount() {
        this.props.dispatch(handleLogoutUser());
    }

    render() {
        return (
            <Redirect to="/login" />
        );
    }
}

export default withRouter(connect()(Logout));