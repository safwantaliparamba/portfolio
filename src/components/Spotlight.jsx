import React from "react";
import { Link } from "react-router-dom";

import "./Spotlight.css";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram.png";
import profileImg from "../assets/images/profile-img.png";

function Spotlight() {
    return (
        <section id="spotlight">
            <div className="wrapper">
                <div className="left">
                    <h1>
                        Hi <br /> I'm <span>SAFWAN</span>
                        <br />
                    </h1>
                    <p>Software Developer</p>
                    <div className="about">
                        <span className="line" />
                        <p>
                            Hi I'm a Software developer from India <br /> </p>
                    </div>
                    <div className="links">
                        <Link to="/contact" className="link">
                            let's talk
                        </Link>
                        <Link to="/projects" className="link2">
                            Projects
                        </Link>
                    </div>
                    <div className="social">
                        <span>Get in touch</span>
                        <ul>
                            <li>
                                <a href="https://github.com/safwantaliparamba">
                                    <img src={github} alt="github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/safwan-taliparamba-517b9821a/">
                                    <img src={linkedin} alt="linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/safwantaliparamba/">
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
