import React from 'react';
import "./style.css";
import icon from "./arrow-icon.svg";

export function Header({cur1, cur2}) {
  return(
    <div className='main-div'>
      <div className='header'>
        <span>{cur1 || "Currency"}</span>
        <img src={icon} alt="arrow" className='icon'/>
        <span>{cur2 || "Converter"}</span>
      </div>
    </div>  
  )
}