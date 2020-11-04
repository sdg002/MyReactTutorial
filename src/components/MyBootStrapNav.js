import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MyBootStrapNav extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" to="/">My company</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="tasklist">Task list</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link"  to="modaldemo">Demo of modal</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="datagriddemo">Demo of data grid</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="bootstrapmodal">Demo of Bootstrap modal</Link>
                </li>
            </ul>
        </nav>
);
    }
}

MyBootStrapNav.propTypes = {

};

export default MyBootStrapNav;