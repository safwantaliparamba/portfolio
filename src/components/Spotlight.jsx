import React from "react";


import './Spotlight.css';
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram.png";
import profileImg from '../assets/images/profile-img.png';

function Spotlight() {
    return (
        <section id="spotlight">
            <div className="wrapper">
                <div className="left">
                    <h1>
                        Hi <br /> I'm <span>SAFWAN</span>
                        <br />
                        UI Engineer
                    </h1>
                    <div className="about">
                        <span className="line" />
                        <p>
                            Hi I'm a front-end engineer, <br /> who obsessed
                            with design and programming
                        </p>
                    </div>
                    <div className="links">
                        <a href="/" className="link">
                            let's talk
                        </a>
                        <a href="/" className="link2">Portfolio</a>
                    </div>
                    <div className="social">
                        <span>Get in touch</span>
                        <ul>
                            <li>
                                <a href="/">
                                    <img src={github} alt="github" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={linkedin} alt="linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src={instagram} alt="instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <img src={profileImg} alt="Profile_image" />
                </div>
            </div>
        </section>
    );
}

export default Spotlight;
