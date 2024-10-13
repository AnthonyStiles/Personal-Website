import React from "react";

export default function NavItem({link, text}){
    return (
        <a className="hover:text-slate-500 font-semibold" href={link}>
            <div>{text}</div>
        </a>
    );
}