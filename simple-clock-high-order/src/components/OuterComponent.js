import React from 'react';
import InnerComponent from './InnerComponent';

const OuterComponent = () => {
    const outerClickHandler=()=>{
        alert("click in outer handler")
    }

    return (
        <div className="mypanel">
            <div className="titlebar">Demonstrates wrapping up an inner component and handling clicks in the outside component</div>
            <h1>This is outer component</h1>
            <br></br>
            <InnerComponent firstName="Cool from outer" clickHandler={outerClickHandler}></InnerComponent>
        </div>
    );
};

export default OuterComponent;