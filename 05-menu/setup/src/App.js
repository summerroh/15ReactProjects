import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [filter, setFilter] = useState('All')
  
  const onFilterChange = (selectedFilter) => {
    setFilter(selectedFilter)
  }

  let categories = items.map(item => item.category)
                        .filter(uniqueValue)

  function uniqueValue(value, index, self) {
    return self.indexOf(value) === index
  }

  return (
    <main>
      <h2  className='title'>Our Menu</h2>
      <div className='underline'></div>

      <div className='btn-container'>
        <button className='filter-btn' onClick={() => setFilter('All')}>All</button>
        {categories.map(item => {return <Categories item={item} onFilterChange={onFilterChange}/>} )}
      </div>

      {items.map(item => {
        return (
          <Menu key={item.id}
                title={item.title} 
                price={item.price} 
                img={item.img} 
                desc={item.desc}
                visible={filter === item.category | filter === 'All'} />
                ) 
        })}
      
      
    </main>
  );
}

export default App;