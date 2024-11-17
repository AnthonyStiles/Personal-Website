import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";

export default function InfoSticker({icon, primaryText, secondaryText, tertiaryText}: { icon: string, primaryText: string, secondaryText: string, tertiaryText: string }){
    return (
        <div className="info-sticker-container">
            {icon === "education" && <FaGraduationCap size={64} className='info-sticker-icon' />}
            {icon === "engineer" && <IoIosConstruct size={64} className='info-sticker-icon' />}
            <div className="info-sticker-text text">
                {primaryText && <div>{primaryText}</div>} 
                {secondaryText && <div>{secondaryText}</div>} 
                {tertiaryText && <div>{tertiaryText}</div>}
            </div>
        </div>
    );
}