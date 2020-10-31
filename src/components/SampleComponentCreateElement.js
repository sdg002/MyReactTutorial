import React, { Component } from 'react'

class SampleComponentCreateElement extends Component
{
    render()
    {
        return React.createElement(
            "div",
            {"id":"id001"}, 
            React.createElement(
                "h1",
                null,
                "This is a h1 and was injected using CreateElement"
            )
            );        
    }
}

export default  SampleComponentCreateElement


