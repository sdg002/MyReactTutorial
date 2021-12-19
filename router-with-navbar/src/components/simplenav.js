import React from 'react';
import {Link} from 'react-router-dom'
import {NavLink}  from 'react-router-dom'
import './simplenav.css'

const simplenav = () => {
    return (
        <nav className='bar'>
            <NavLink to='/' className='navlink'>
                Home
            </NavLink>
            
            
            
            <NavLink to='/link1'  className='navlink'>
                This is NavLink 1
            </NavLink>
            
            
            
            <NavLink to='/link2'  className='navlink'>
                This is NavLink 2
            </NavLink>
            
            
            
            <NavLink to='/somenonexistentlink'  className='navlink'>
                This is a NavLink with non-existent route handler
            </NavLink>
        </nav>
    );
};

export default simplenav;