"use client";

import React, { useState } from "react";
import NavIcon from "./nav-icon";
import NavItem from "./nav-item";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="nav">
            <div className="nav-bar">
                <div className="nav-bar-title">
                    <div>
                        <div className="nav-bar-title-name">Anthony Stiles</div>
                        <div className="nav-bar-title-occupation">Senior Software Developer</div>
                    </div>
                </div>
                <div className="nav-bar-buttons">
                    <NavItem
                        link={"/"}
                        text={"Home"} />
                    <NavItem
                        link={"/about"}
                        text={"About / CV"} />
                    <NavItem
                        link={"/projects"}
                        text={"Projects"} />
                    <NavItem
                        link={"/contact"}
                        text={"Contact"} />
                </div>
                <div className="nav-bar-icons">
                    <NavIcon
                        link={"/Anthony-Stiles-CV.pdf"}
                        icon={"document"}
                        tooltip={"Download CV"}
                        download={true} />
                    <NavIcon
                        link={"https://www.linkedin.com/in/anthonystiles/"}
                        icon={"linkedin"}
                        tooltip={""}
                        download={""} />
                    <NavIcon
                        link={"https://github.com/AnthonyStiles"}
                        icon={"github"}
                        tooltip={""}
                        download={""} />
                </div>
                {!isMenuOpen && (
                    <RxHamburgerMenu className="nav-bar-hamburger" onClick={toggleMenu} size={32} />
                )}
                {isMenuOpen && (
                    <IoClose className="nav-bar-hamburger nav-bar-hamburger-hidden" onClick={toggleMenu} size={32} />
                )}
            </div>
            {isMenuOpen && (
                <div className="nav-menu">
                <div className="nav-menu-buttons">
                    <a href="/">
                        <div className="title">
                            Home
                        </div>
                    </a>
                    <a href="/about">
                        <div className="title">
                            About / CV
                        </div>
                    </a>
                    <a href="/projects">
                        <div className="title">
                            Projects
                        </div>
                    </a>
                    <a href="/contact">
                        <div className="title">
                            Contact
                        </div>
                    </a>
                </div>
                <div className="nav-menu-icons">
                    <a href="/Anthony-Stiles-CV.pdf" download={true}>
                        <IoIosDocument size={32} />
                    </a>
                    <a href="https://github.com/AnthonyStiles">
                        <FaGithub size={32} />
                    </a>
                    <a href="https://www.linkedin.com/in/anthonystiles/">
                        <CiLinkedin size={32} />
                    </a>
                </div>
            </div>
            )}
        </nav>
    );
}