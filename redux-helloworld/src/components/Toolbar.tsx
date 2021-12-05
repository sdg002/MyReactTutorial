import React from 'react';

const Toolbar = (props:any) => {
    return (
        <div>
            <button onClick={props.RefreshClickHandler}>Refresh</button>
            <button onClick={props.AddCustomerClickHandler}>Add Customer.</button>
            <button onClick={props.UploadCustomerClickHandler}>Upload customer(csv)</button>
        </div>
    );
};

export default Toolbar;