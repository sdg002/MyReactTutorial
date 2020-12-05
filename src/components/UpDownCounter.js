import React, {useState} from 'react';

const UpDownCounter = () => {
    const [counter, setCounter]=useState("0")
    return (
        <div>
            <form className="form-inline">
                <button className={"btn btn-primary"} onClick={()=>setCounter(counter+1)}>Up</button>
                <label>
                    Value of counter is {counter}
                </label>
                <button className={"btn btn-primary"} onClick={()=>setCounter(counter-1)}>Down</button>
            </form>
        </div>
    );
};

export default UpDownCounter;