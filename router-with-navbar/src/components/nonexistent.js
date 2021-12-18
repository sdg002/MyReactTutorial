import React from 'react';


const nonexistent = () => {
    let redStyle={color:"white", backgroundColor:"red"};
    return (
        <div style={redStyle}>
            Unhandled route handler
        </div>
    );
};

export default nonexistent;