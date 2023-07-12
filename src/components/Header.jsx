import React, { useState, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import Modal from "../UI/Modal";

function Header() {
    const [isShow, setIsShow] = useState(false);
    const [hasWidth, setHasWidth] = useState(false);

    const updateSize = () => {
        if (window.innerWidth <= 768) {
            setHasWidth(true);
        } else {
            setHasWidth(false);
        }
    };
    useLayoutEffect(() => {
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => {
            window.removeEventListener("resize", updateSize);
        };
    }, [hasWidth]);

    const toggleHandler = () => {
        setIsShow(!isShow);
    };
    return (
        <section id="header">
            <header className="wrapper">
                <NavLink to="/">SAFWAN</NavLink>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                activeclassname="active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                activeclassname="active"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                activeclassname="active"
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                activeclassname="active"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {hasWidth && (
                    <div className="mobile-nav">
                        <button
                            id="menu-toggler"
                            data-class="menu-active"
                            className="hamburger"
                            onClick={toggleHandler}
                        >
                            <span className="hamburger-line hamburger-line-top"></span>
                            <span className="hamburger-line hamburger-line-middle"></span>
                            <span className="hamburger-line hamburger-line-bottom"></span>
                        </button>
                        {isShow && (
                            <Modal onClick={toggleHandler}>
                                <ul className='mobile-menu'>
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/projects">
                                            Projects
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </Modal>
                        )}
                    </div>
                )}
            </header>
        </section>
    );
}

export default Header;
