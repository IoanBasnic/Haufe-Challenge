import React from "react";
import {Link} from "react-router-dom";

function Projects() {
    return(
        <div className="bef-wrapper">
            <div className="wrapper wrapper-proj">

                <div className="row">
                    <div className="column">
                        <h1 className={"projectHeader"}>Personal projects and group project</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <a href={"https://github.com/IoanBasnic/WAD-Project"}><img src="https://i.ibb.co/ThrpkcM/wad.png"/></a>
                    </div>

                    <div className="column">
                        <a href={"https://github.com/IoanBasnic/CG-project"}><img src="https://i.ibb.co/3yFMjzw/p2.png"/></a>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <a href={"https://github.com/IoanBasnic/One-man-s-trash-is-another-man-s-treasure"}><img src="https://i.ibb.co/b7dSPWZ/adbd.png"/></a>
                    </div>

                    <div className="column">
                        <a href={"https://github.com/paulcaraa/COproj_benchmark"}><img src="https://i.ibb.co/grtJWmr/c0proj.png"/></a>
                    </div>
                </div>

                <div className="row">
                    <div className="column">
                        <a href={"https://github.com/IoanBasnic/SEFproject"}><img src="https://i.ibb.co/jfK3D0P/sef.png"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
