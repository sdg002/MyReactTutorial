import React, { Component } from 'react';

class MyBootStrapLayout extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

export default MyBootStrapLayout;