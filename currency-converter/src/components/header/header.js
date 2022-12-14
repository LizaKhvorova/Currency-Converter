import React from 'react';
import "./header.css";
import icon from "./arrow-icon.svg";

export function Header({cur1, cur2}) {
  return(
    <div className='main'>
      <div className='header'>
        <span>{cur1 || "Currency"}</span>
        <img src={icon} alt="arrow"/>
        <span>{cur2 || "Converter"}</span>
      </div>
    </div>  
  )
}