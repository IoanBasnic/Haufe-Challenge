import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About me</Link></li>
                <li><Link to={"/projects"}>My projects</Link></li>
                <li><Link to={"/contact"}>Contact me</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
