import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";

export default function InfoSticker({icon, primaryText, secondaryText, tertiaryText}: { icon: string, primaryText: string, secondaryText: string, tertiaryText: string }){
    return (
        <div className='flex items-center'>
            {icon === "education" && <FaGraduationCap size={52} />}
            {icon === "engineer" && <IoIosConstruct size={52} />}
            <div className='flex flex-col pl-5'>
              {primaryText && <span>{primaryText}</span>} 
              {secondaryText && <span>{secondaryText}</span>} 
              {tertiaryText && <span>{tertiaryText}</span>}
            </div>
        </div>
    );
}