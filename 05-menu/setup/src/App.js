import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//1 way of getting unique values form array
const allCategories = new Set(items.map( item => item.category));
console.log(allCategories)

//2 way of getting unique values from array
// let categories = items.map(item => item.category)
//                       .filter(uniqueValue)
// function uniqueValue(value, index, self) {
//   return self.indexOf(value) === index
// }

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState();

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
        <button className='filter-btn'>All</button>
        <Categories categories={categories} />
        {/* {categories.map(item => {return <Categories item={item} onFilterChange={onFilterChange}/>} )} */}
      </div>

        <Menu menuItem={menuItem} />

      </section>
    </main>
  );
}

export default App;