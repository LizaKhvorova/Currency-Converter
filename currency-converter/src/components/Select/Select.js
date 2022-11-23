import React, {useState} from 'react';
import './style.css';
import down from './arrow-down.svg';

export function Select({onChangeCur, options, selected}) {
  const [isVisible, setIsVisible] = useState(false);

  function change(value) {
    onChangeCur(value);
    setIsVisible(false);
  }

  return(
    <div className='select'> 
      <div className='select-header'>
        <span>{selected}</span>
        <img 
          onClick={() => { setIsVisible((prevState) => !prevState)}}
          src={down} 
          alt="arrow-down"
          className={`arrow${isVisible ? "Up" : "Down"}`}
        />
      </div>
      {isVisible? 
      <div className='select-dropdown'> 
        {options.map((cur) => {
        return (
          <span
            className='select-dropdown-item'
            key={cur.id}
            onClick={() => change(cur.label)}
          >
            {cur.label}
          </span>
          )
        })}
      </div> : null}
    </div>
  )
}
