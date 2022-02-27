import React from 'react';

const Categories = ({ categories }) => {

  return (
    <div className='btn-container'>
      <button className='filter-btn'
              onClick={() => categories('breakfast')}
      >Breakfast
      </button>
    </div>
  )
};

export default Categories;