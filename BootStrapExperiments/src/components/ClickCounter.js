import react from 'react'
import {Component} from 'react'

class ClickCounter extends Component
{
    constructor(props)
    {
        super(props)
        this.state={counter:0};
        this.onIncrementClickHandler=this.onIncrementClickHandler.bind(this);
        this.onDecrementClickHandler=this.onDecrementClickHandler.bind(this);
    }
    onIncrementClickHandler()
    {
        console.log("got a click event- increment");
        let newCounter=this.state.counter+1;
        this.setState({counter:newCounter});
    }
    onDecrementClickHandler()
    {
        console.log("got a click event - decrement");
        let newCounter=this.state.counter-1;
        this.setState({counter:newCounter});
    }
    render()
    {
    const outerBoder={
        'border-color':'blue', 
        'color':'red', 'border-width':'1', 
        'border-style':'solid', 
        'background-color':'yellow'
    };
    return <div style={outerBoder}>
        You have clicked <strong>{this.state.counter}</strong> times
        <button onClick={this.onIncrementClickHandler}>Increment. </button>;
        <button onClick={this.onDecrementClickHandler}>Decrement. </button>;
    </div>
    
    }
}

export default ClickCounter;