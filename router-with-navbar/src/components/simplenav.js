import React from 'react';
import {Link} from 'react-router-dom'

const simplenav = () => {
    return (
        <nav>
            <Link to='/' >Home</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to='/link1'>This is link 1</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to='/link2'>This is link 2</Link>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <Link to='/linknonexistent'>This is a link with non-existent route handler</Link>
            <hr/>
        </nav>
    );
};

export default simplenav;