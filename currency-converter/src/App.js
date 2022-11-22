import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import { fetchList } from './components/gotServices'
import list from './mocks/list.json';
import live from './mocks/live.json';
import { Header } from './components/header/header';
import { FromTo } from './components/fromTo/fromTo';

function App() {
  // useEffect(() => {
  //   fetchList()
  // }, [])
  const [cur1, setCur1] = useState(null);
  const [cur2, setCur2] = useState(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [rate, setRate] = useState(null);
  const [activeCount, setActiveCount] = useState('');
  const { currencies } = JSON.parse(JSON.stringify(list))
  function handleChangeCur1(value) {
    setCur1(value);
  } 

  function handleChangeCur2(value) {
    setCur2(value);
  } 

  function handleChangeCount1(value) {
    setCount1(value);
  }
  function handleChangeCount2(value) {
    setCount2(value);
  }

  function calculateRate(cur1, cur2) {
    const rate1 = live.quotes[`USD${cur1}`];
    const rate2 = live.quotes[`USD${cur2}`];
    if(cur1 && cur2) {
      setRate(rate1 / rate2);
    } 
  }

  useEffect(() => {
    calculateRate(cur1, cur2)
  }, [cur1, cur2])

  useEffect(() => { 
    if(
        typeof(+count1) === 'number'
        && count1 !== NaN 
        && rate
        && activeCount === "count1"
      ) {
      setCount2(count1 / rate)
    }}, [count1, rate])

  useEffect(() => {
    if(
        typeof(+count2) === 'number' 
        && count2 !== NaN 
        && rate
        && activeCount === "count2"
      ) {
      setCount1(count2 * rate)
    }}, [count2, rate])

  return (
    <>
      <Header cur1={cur1} cur2={cur2}/>
      <div className='from-to'>
        <FromTo 
          countId={"count1"}
          setActiveCount={setActiveCount}
          count={count1}
          onChangeCur={handleChangeCur1}
          onChangeCount={handleChangeCount1}
          currencies={currencies}
        />
        <FromTo 
          countId={"count2"}
          setActiveCount={setActiveCount}
          count={count2}
          onChangeCur={handleChangeCur2}
          onChangeCount={handleChangeCount2}
          currencies={currencies}
        />
      </div>
    </>
  );
}

export default App;
