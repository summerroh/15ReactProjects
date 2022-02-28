import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//1 way of getting unique values form array
const allCategories = ['All',...new Set(items.map( item => item.category))]

//2 way of getting unique values from array
// let categories = items.map(item => item.category)
//                       .filter(uniqueValue)
// function uniqueValue(value, index, self) {
//   return self.indexOf(value) === index
// }

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = ( category ) => {
    if(category === 'All') {
      setMenuItem(items)
      return;
    }
    const newItems = items.filter((item) => 
    item.category === category)
    setMenuItem(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>        
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>

      <div className='btn-container'>
        <Categories categories={categories} filterItem={filterItem} />
      </div>

        <Menu menuItem={menuItem} />

      </section>
    </main>
  );
}

export default App;