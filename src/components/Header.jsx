import React, { useState, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import Modal from "../UI/Modal";

function Header() {
    const [isShow, setIsShow] = useState(false);
    const [hasWidth, setHasWidth] = useState(false);

    useLayoutEffect(() => {
        const updateSize = () => {
            if (window.innerWidth <= 768) {
                setHasWidth(true);
            } else {
                setHasWidth(false);
            }
        };
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
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                activeClassName="active"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portfolio"
                                activeClassName="active"
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                activeClassName="active"
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
                                        <NavLink to="/portfolio">
                                            Portfolio
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
