import React, { Component } from 'react';
import MyBootStrapNav from "./MyBootStrapNav"
import MyBootStrapDemo  from "./MyBootStrapDemo"

class MyBootStrapLayout extends Component {
    render() {
        return (
            <div>
                <MyBootStrapNav></MyBootStrapNav>
                <MyBootStrapDemo></MyBootStrapDemo>
            </div>
        );
    }
}

export default MyBootStrapLayout;