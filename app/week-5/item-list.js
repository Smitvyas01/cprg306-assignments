"use client"

import React, { useState } from 'react';
import Item from './item'; 
import items from './items.json'; 

const ItemList = () => {
  const [sort, setSort] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sort === 'category') {
      return a.category.localeCompare(b.category);
    };
  });

  return (
    <div>
      <div className='m-5'>
        <button
        className='ml-5 square-md h-10 w-40'
          onClick={() => setSort('name')}
          style={{ backgroundColor: sort === 'name' ? 'orange' : 'white' }}
        >
        <p className='font-bold'>Sort by Name</p>
        </button>
        <button
        className='ml-10 square-md h-10 w-40'
          onClick={() => setSort('category')}
          style={{ backgroundColor: sort === 'category' ? 'orange' : 'white' }}
        >  
      <p className='font-bold'>Sort by Category</p>
        </button>
      </div>  
      <div className="max-w-md justify-items-center">
      <ul className="grid gap-4 md-4 ">
        {sortedItems.map(item => (
          <Item key={item.id} itemObj={item} />
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ItemList;