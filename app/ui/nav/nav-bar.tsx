
import React from "react";
import NavIcon from "./nav-icon";
import NavItem from "./nav-item";

export default function NavBar(){
    return(
        <nav className="top-0 w-full fixed flex items-center bg-emerald-900 text-white">
            <div className="w-1/4 flex">
                <a href="/">
                    <div className="pl-5">
                        <div className="font-bold">Anthony Stiles</div>
                        <div className="font-semibold text-sm">Senior Software Developer</div>
                    </div>
                </a>
            </div>
            <div className="w-2/4 flex gap-x-5">
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
            <div className="w-1/4 p-5 flex gap-x-1 justify-end">
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
        </nav>
    );
}