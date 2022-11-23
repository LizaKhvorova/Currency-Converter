import React, { useState, useEffect } from 'react';
import './App.css';
// import { fetchList } from './components/gotServices'
import list from './mocks/list.json';
import live from './mocks/live.json';
import { Header } from './components/Header/Header';
import { Select } from './components/Select/Select';
import { Input } from './components/Input/Input';

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
  const currencies = Object.keys(JSON.parse(JSON.stringify(list)).currencies).map((item) => ({
    id: item,
    label: item
  }))

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

  function handleClear1() {
    setCount1('')
  }
  function handleClear2() {
    setCount2('')
  }

  function calculateRate(cur1, cur2) {
    const rate1 = live.quotes[`USD${cur1}`];
    const rate2 = live.quotes[`USD${cur2}`];
    if (cur1 && cur2) {
      setRate(rate1 / rate2);
    } 
  }

  useEffect(() => {
    calculateRate(cur1, cur2)
  }, [cur1, cur2])

  useEffect(() => { 
  if (
      typeof(+count1) === 'number'
      && count1 !== NaN 
      && rate
      && activeCount === "count1"
    ) {
    setCount2(count1 / rate)
  }}, [count1, rate])

  useEffect(() => {
  if (
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
      <div className='main'>
        <div className='select-input'>
          <Select 
            onChangeCur={handleChangeCur1}
            options={currencies}
            selected={cur1}
          />
          <Input
            count={count1}
            countId={"count1"}
            setActiveCount={setActiveCount}
            onChangeCount={handleChangeCount1}
            onClearCount={handleClear1}
          />
        </div>
        <div className='select-input'>
          <Select 
            onChangeCur={handleChangeCur2}
            options={currencies}
            selected={cur2}
          />
          <Input
            count={count2}
            countId={"count2"}
            setActiveCount={setActiveCount}
            onChangeCount={handleChangeCount2}
            onClearCount={handleClear2}
          />
        </div>
      </div>
      
    </>
  );
}

export default App;
