import React from "react";

export default function NavItem({link, text}){
    return (
        <a className="nav-bar-button" href={link}>
            {text}
        </a>
    );
}