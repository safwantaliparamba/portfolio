import React, { useState, useRef } from "react";
import Modal from "../UI/Modal";
import "./Header.css";

function Header() {
    const [isShown, setIsShown] = useState(false);
    const inputRef = useRef();
    const menuToggle = () => {
        setIsShown(!isShown);
        inputRef.current.checked = !isShown;
    };
    return (
        <>
            <header>
                <div className="wrapper">
                    <h1>
                        <a href="/">SAFWAN</a>
                    </h1>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Portfolio</a>
                            </li>
                            <li className="btn">Contact</li>
                        </ul>
                    </nav>
                    <div className="demo" onClick={menuToggle}>
                        <div className="menu-icon">
                            <input
                                className="menu-icon__cheeckbox"
                                type="checkbox"
                                ref={inputRef}
                            />
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {isShown && (
                <Modal onClick={menuToggle}>
                    <nav className="menu-modal">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Portfolio</a>
                            </li>
                            <li className="btn">Contact</li>
                        </ul>
                    </nav>
                </Modal>
            )}
        </>
    );
}

export default Header;
