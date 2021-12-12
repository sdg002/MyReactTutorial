
import * as react from 'react';

const Navbar = () => {
    const navStyle:react.CSSProperties={
        'backgroundColor':'ghostwhite'
    }
    return (
        <div style={navStyle}>
            <h1>Manage customers page.</h1>
            <hr/>
        </div>
    );
};

export default Navbar;