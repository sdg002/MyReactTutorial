import React,{useState} from 'react';
import { NavLink } from 'react-router-dom'
/*

What are we trying to do?
--------------------------
- Create BS nav-link from an array of objects
- In this example we are using the NavLink to render the active link
 */
const MyBootstrapNavWithNavLink = () => {
    const [activeLink, setActiveLink]=useState("taskList")
    const links=[
        {"title":"Task list", to:"tasklist"},
        {"title":"Demo of modal", to:"modaldemo"},
        {"title":"Demo of data grid", to:"datagriddemo"},
        {"title":"Demo of Bootstrap modal", to:"bootstrapmodal"}
    ]
    function  onLinkClick(e)
    {
        console.log(`On link click ${e.target}`)
        setActiveLink(e.target.href);
    }
    function  renderLinks()
    {
        links.forEach((linkItem,index)=>{
            renderNavLink(linkItem)
        })

        return <h2>Blah1</h2>
    }
    function renderNavLink(linkItem)
    {
        console.log((`Inside renderlink ${linkItem}`))
        let linkClassName="nav-link";
        let linkActiveClassName="nav-link active";
        return (
            <li className="nav-item ">
                <NavLink className={linkClassName} to={linkItem.to}  activeClassName={linkActiveClassName} >{linkItem.title}</NavLink>
            </li>
        )

    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" to="/">My company</a>
            <ul className="navbar-nav mr-auto">
                {
                    links.map(linkItem=>renderNavLink(linkItem))
                }
            </ul>
        </nav>
    );
};

export default MyBootstrapNavWithNavLink;