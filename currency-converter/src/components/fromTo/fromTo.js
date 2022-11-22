import React from 'react';
import './fromTo.css';

function listCurrency(currencies) {
  return Object.keys(currencies || {}).map((cur) => {
    return(
      <option key={cur}>{cur}</option>
    )
  })
}


export function FromTo({currencies, onChangeCur, onChangeCount, count, countId, setActiveCount}) {
  return(
    <div className='fromTo'>
      <select onChange={(e) => onChangeCur(e.target.value)}>
        {listCurrency(currencies)}
      </select>
      <input 
        className='inputCur' 
        type='text'
        onChange={(e) => onChangeCount(e.target.value)}
        onFocus={() => setActiveCount(countId)}
        value={count}
      /> 
    </div>
  )
}

