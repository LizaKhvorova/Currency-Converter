import React from 'react';
import cancel from './cancel.svg';
import './style.css';

export function Input({onClearCount, onChangeCount, count, countId, setActiveCount}) {
  return (
    <div className='container'>
      <input 
        type='text' 
        className='input'
        value={count}
        onChange={(e) => onChangeCount(e.target.value)}
        onFocus={() => setActiveCount(countId)}
      >
      </input>
      <img 
        src={cancel} 
        alt="cancel" 
        className="cancel"
        onClick={onClearCount}
      />
    </div>
  )
}