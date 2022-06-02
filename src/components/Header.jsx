import React, { useState, useLayoutEffect } from "react";

import "./Header.css";
import Modal from "../UI/Modal";

function Header() {
    const [isShow, setIsShow] = useState(false);
    const [hasWidth, setHasWidth] = useState(false);

    useLayoutEffect(() => {
        const updateSize = () => {
            if (window.innerWidth <= 768) {
                setHasWidth(true);
            }else{
                setHasWidth(false)
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
                <a href="/">SAFWAN</a>
                <nav>
                    <ul>
                        <li>
                            <a href="/" className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Portfolio</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
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
                                <ul className="mobile-menu">
                                    <li>
                                        <a href="/" className="active">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">About</a>
                                    </li>
                                    <li>
                                        <a href="/">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="/">Contact</a>
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
