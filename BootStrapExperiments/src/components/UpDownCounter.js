import React, {useState} from 'react';

const UpDownCounter = (props) => {
    let initialValue = props.initialValue??0;
    const [counter, setCounter]=useState(initialValue)
    return (
        <div>
            <form className="form-inline">
                <button className={"btn btn-primary"} onClick={()=>setCounter(counter+1)} data-testid={"upbutton"}>Up</button>
                <div>
                    Value of counter is <strong data-testid={"display"}>{counter}</strong>
                </div>
                <button className={"btn btn-primary"} onClick={()=>setCounter(counter-1)} data-testid={"downbutton"}>Down</button>
            </form>
        </div>
    );
};

export default UpDownCounter;