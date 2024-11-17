import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

export default function NavIcon({ link, icon, tooltip, download }){
    return (
        <a href={link} title={tooltip} download={download}>
            {icon === "linkedin" && <CiLinkedin size={24} />}
            {icon === "github" && <FaGithub size={24} />}
            {icon === "document" && <IoIosDocument size={24} />}
        </a>
    );
}