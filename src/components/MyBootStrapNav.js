import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyBootStrapNav extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">My company</a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link">Menu item 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Menu item 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Menu item 3</a>
                </li>
            </ul>
        </nav>
);
    }
}

MyBootStrapNav.propTypes = {

};

export default MyBootStrapNav;