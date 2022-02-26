import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkIndexNumer = (number) => {
    if (number < 0) {
      return people.length -1
    }

    if (number > people.length-1 ) {
      return 0
    }

    return number
  }

  const handleLeftClick = () => {
    setIndex((index) => {
      let newIndex = index -1;
      
      return checkIndexNumer(newIndex);
    });
  }

  const handleRightClick = () => {
    setIndex((index) => {
      let newIndex = index + 1;

      return checkIndexNumer(newIndex);
    });
  }

  const handleRandomClick = () => {
    let randomIndex = Math.floor(Math.random()*people.length);
    if (randomIndex === index) {
      randomIndex += 1
    }
    console.log(randomIndex);
    setIndex(checkIndexNumer(randomIndex))
  }

  return (
  <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className='person-img'></img>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>

    <div className='button-container'>
      <button className='prev-btn' onClick={handleLeftClick}><FaChevronLeft /></button>
      <button className='next-btn' onClick={handleRightClick}><FaChevronRight /></button>
    </div>
      <button className='random-btn' onClick={handleRandomClick}>surprise me!</button>
  </article>
  )
};

export default Review;
