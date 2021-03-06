import React from "react";
import {Link} from "react-router-dom";

function About() {
    return(
        <div>
        <div className="bef-wrapper">
            <div className="wrapper">

                <div className="row">
                    <div className="column">
                        <img src="https://i.ibb.co/LSt13xQ/me.png"/>
                    </div>
                    <div className="column">
                        <h1>About me</h1>
                        <h3>Who am I?</h3>
                        <p>My name is Ioan BAȘNIC, I'm a 3rd year student at Politehnica University of Timisoara, currently studying Computer Software
                            Engineering (Bachelor's degree).</p><p> My interests are: OOP, Java programming, Databases and Web
                            Development.</p><p> Technologies that I am familiar with: Java, C, Javascript, NodeJS, C#, Oracle SQL, HTML5, CSS3,
                            Linux, Git, Matlab. However, I'm always open to delve into new tools related to my field of study.</p>
                        <div className={"aboutBtn"}><Link to={"/contact"}>Contact me</Link> </div>
                    </div>

                </div>

                <div className="row">
                    <div className="column">
                        <h3>I'm a
                            person who likes to be challenged, always looking for new opportunities and I'm passionate about learning
                            new things. I also like to think in a logical way, also giving attention to how things are designed. I mostly
                            enjoy focusing on the architecture of whatever app I'm working on.</h3>
                    </div>
                </div>
            </div>
        </div>
    <div className="bef-wrapper">
        <div className="wrapper">
            <div className="row">
                <div className="column">
                    <h1>My software skills</h1>
                    <ul className={"skills"}>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>Angular JS</li>
                        <li>Oracle SQL</li>
                        <li>MySQL</li>
                        <li>HTML5 & CSS3</li>
                        <li>C</li>
                        <li>Git</li>
                        <li>Matlab</li>
                    </ul>
                </div>
                <div className="column">
                    <h1>My other skills</h1>
                    <ul className={"skills"}>
                        <li>Quick Learner</li>
                        <li>Adaptive</li>
                        <li>Time management</li>
                        <li>Responsible</li>
                        <li>Communicator</li>
                        <li>Cooperator</li>
                        <li>Creative and able to think artistically</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

            <div className="bef-wrapper">
                <div className="wrapper">
                    <div className="row">
                        <div className="column">
                            <h1>Volunteer at Liga AC: 20 Oct. 2018 - Current </h1>
                            <p>I'm a volunteer at Liga AC as a Graphic Designer.</p>
                            <p>My job is to create new concepts, new graphic illustrations/logos/photos for our projects.</p>
                            <p>Tools that I'm using:</p>
                            <ul className={"skills"}>
                                <li>Adobe Illustrator</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Premiere Pro</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <div className="column">
                            <img src="https://i.ibb.co/dQ5Hvjg/Liga-AC-Logo-Full-Color-Tall-No-Slogan.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
