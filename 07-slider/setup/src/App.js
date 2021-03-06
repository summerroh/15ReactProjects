import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data)
  const [value, setValue] = useState(0);
  
  
  useEffect(() =>{
    const lastIndex = people.length-1

    if (value>lastIndex) {
      setValue(0) }

    if (value<0) {
      setValue(lastIndex) }
  
    },[value, people])

  useEffect( () => { 
    let slider = setInterval(() => { setValue(value+1) }, 3000)
    return(() => {
      clearInterval(slider)
    })
  }, [value] )


  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      
      <button className='prev' onClick={()=>{
          setValue(value-1)}}> <FiChevronLeft />
      </button>

      <div className='section-center'>
        {people.map((person, personIndex) => { 
        const { id, image, name, title, quote } = person;
        let position = 'nextSlide'
        if (personIndex === value ){
          position='activeSlide'
        }
        if (personIndex === value -1 || (value === 0 && personIndex === people.length -1)) {
          position = 'lastSlide'
        }
        return (
          <article key={id} className={position}>
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
          setValue(value+1)}}> <FiChevronRight />
      </button>

    </section>
  );
}

export default App;
