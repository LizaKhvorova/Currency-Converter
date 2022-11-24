import React, {useState, useEffect, useRef} from 'react';
import './style.css';
import down from './arrow-down.svg';

export function Select({onChangeCur, options, selected}) {
  const [isVisible, setIsVisible] = useState(false);
  const [input, setInput] = useState('');
  const [dropdown, setDropdown] = useState(options);
  const ref = useRef(null);

  function change(value) {
    onChangeCur(value);
    setInput(value);
    setIsVisible(false);
  }

  function inputChange(e) {
    setInput(e.target.value); 
    if(!isVisible) {
      setIsVisible(true)
    }
  }
  function toggleVisible() {
    setIsVisible((prevState) => !prevState)
  }

  function handleCloseDropdown (e) {
      if(!ref.current.contains(e.target)) {
        setIsVisible(false)
      }
  }

  useEffect(() => {
   const list = options.filter(item => item.id.toLowerCase().includes(input.toLowerCase()));
    setDropdown(list)
  }, [input])

  useEffect(() => {
    document.body.addEventListener('click', handleCloseDropdown)

    return () => { 
      document.body.removeEventListener('click', handleCloseDropdown)
    }
  }, [])

  return(
    <div className='select' ref={ref}> 
      <div className='select-header'>
        <input 
          type='text' 
          className="select-input-teg"
          onChange={inputChange}
          onFocus={() => setIsVisible(true)}
          value={input}
        >
        </input>
        <img 
          onClick={toggleVisible}
          src={down} 
          alt="arrow-down"
          className={`arrow${isVisible ? "Up" : "Down"}`}
        />
      </div>
      {isVisible? 
      <div className='select-dropdown'> 
        {dropdown.map((cur) => {
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
