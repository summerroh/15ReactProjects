import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  const [value, setValue] = useState(0);
  
  const dataLength = people.length-1
  
  const valueSetUp = () => {
    if (value===dataLength) {
      setValue(0)
    } else {
      setValue(value+1)
    }
  }

  const valueSetDown = () => {
    if (value===0) {
      setValue(dataLength)
    } else {
      setValue(value-1)
    }
  }

  const timeout = setTimeout(onTimeOut, 5000);

  function onTimeOut() {
    valueSetUp()
    stopFunction()
  }

  function stopFunction() {
    clearTimeout(timeout);
  }
  
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      
      <button className='prev' onClick={()=>{
          valueSetDown()}}> <FiChevronLeft />
      </button>

      <div className='section-center'>
        {people.map((person, personIndex) => { 
        const { id, image, name, title, quote } = person;
        
        return (
          <article key={id}>
            <img className='person-img' src={image} alt={name} />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'/>
          </article>
        )
        })}
      </div>

      <button className='next' onClick={()=>{
          valueSetUp()}}> <FiChevronRight />
      </button>

    </section>
  );
}

export default App;
