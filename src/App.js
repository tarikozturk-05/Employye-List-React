import logo from './logo.svg';
import './App.css';
import Card from './components/card/Card';
import data from './data';

import './components/card/Card.css'
import { useState } from 'react';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const [count,setCount]=useState(0);

  const prev =()=>{
    if(count >0 ){setCount(count -5)}
    if(count <4){setCount(15)}
   }
   
const next =()=>{
  if(count <15){setCount(count +5)}
  if(count>14){setCount(0)}
 }
 



  return (
    <div className="container text-center">
    <h1>Employye List</h1>
    <h4>(Employees {count +1} to {count +5})</h4>
    
    <div>
      {data.slice(count,count + 5).map((item)=>{
       return <Card {...item} key={item.id} />
      })}
    </div>
      <div className='button-style '>
      <span className="mx-3">
          <FaChevronLeft onClick={prev} />Prev</span>  
    <span className='mx-3'>Next<FaChevronRight onClick={next} /></span></div>


    </div>
  );
}

export default App;
