import React from "react";
import "./Spotlight.css";
import image from "../assets/images/safwan.png";

function Spotlight() {
    return (
        <section id="spotlight">
            <div className="wrapper">
                <div className="left">
                    <h1>
                        HI I AM <span>SAFWAN</span> , <br />
                        SOFTWARE DEVELOPER
                    </h1>
                    <div>
                        <a
                            href="#/"
                            className="btn"
                        >
                            Download CV
                        </a>
                        <a href="#/" className="btn blue">
                            Portfolio
                        </a>
                    </div>
                </div>
                <div className="right">
                    <img src={image} alt="profile_image" />
                </div>
            </div>
        </section>
    );
}

export default Spotlight;
