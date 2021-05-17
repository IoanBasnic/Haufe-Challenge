import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return(
        <div className="bef-wrapper">
            <div className="wrapper-home">
                <div className="row">
                    <div className="column">

                        <h2 className={"homeH2"}>Haufe Challenge</h2>
                    <p className={"homeP"}>My CV - Ioan BAȘNIC</p>
                        <p className={"homeP"}>Check <Link to={"/about"}>About me</Link> or <Link to={"/projects"}>My projects</Link> </p>
                    </div>
                    <div className="column">
                        <div className={"myImg"}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
