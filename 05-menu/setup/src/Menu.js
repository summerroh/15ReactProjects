import React from 'react';

const Menu = ({title, price, img, desc, visible}) => {
  return (
    visible ?

    (<main>
      <img className='photo' src={img} />
      <h1 className='title'>{title}</h1>
      <h2 className='price'>{price}</h2>
      <p className='description'>{desc}</p>
    </main>) :
    
    (null)
  );
};

export default Menu;