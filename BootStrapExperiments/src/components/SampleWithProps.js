import React, { Component } from 'react'

class SampleWithProps extends Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return <div>
            This is my <strong>sample</strong>  component with 
            props.FirstName:<strong>{this.props.firstName}</strong>  and LastName:<strong>{this.props.lastName}</strong> </div>
    }
}

export default  SampleWithProps


