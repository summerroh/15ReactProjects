import React from 'react';

const Categories = ({item, onFilterChange}) => {

  return (
    <main>
      <button className='filter-btn'
              onClick={() => onFilterChange(item)}
      >{item}</button>
    </main>
  )
};

export default Categories;