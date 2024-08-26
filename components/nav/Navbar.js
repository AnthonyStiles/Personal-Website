
import NavIcon from "./NavIcon";
import NavItem from "./NavItem";

export default function NavBar(){
    return(
        <nav className="top-0 w-full fixed flex items-center bg-white">
            <div className="w-1/4 flex">
                <a href="/">
                    <div className="p-5">
                        <div className="text-xl text-custom-orange font-bold">Anthony Stiles</div>
                        <div className="font-semibold">Senior Software Developer</div>
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
                    icon={"linkedin"} />
                <NavIcon 
                    link={"https://github.com/AnthonyStiles"} 
                    icon={"github"} />
            </div>
        </nav>
    );
}