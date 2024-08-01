"use client";

import React, { useState } from 'react';
import itemsData from './items.json';
import ItemList from "../week-8/item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";


export default function Page() {
    const [items, setItems] = useState(
        itemsData.map((items) => ({...items}))
    );

    const [isNewItemFormOpen, setNewItemFormOpen] = useState(false);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const openNewItemForm = () => setNewItemFormOpen(true);
    const closeNewItemForm = () => setNewItemFormOpen(false);

    const handleItemSelect = (item) => {
      const cleanedName = item.name
        .split(',')[0] 
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '')
        .trim(); 
      setSelectedItemName(cleanedName);
    };
  

    return (
        <main className="h-screen-300vh bg-black">
            <h1 className="text-5xl text-center mb-10 font-serif text-orange-400">SHOPPING LIST</h1>
        <div>
            <button className='ml-32 mt-5 mb-5 rounded-md bg-orange-400 border-black text-black font-bold h-10 w-40' onClick={openNewItemForm}>Add New Item</button>
        </div>
        {
            isNewItemFormOpen && (
                <NewItem closeFormFunc={closeNewItemForm} onAddItem={handleAddItem} />
            )
        }
        <div className="flex">
        <div className="w-1/2">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
        </main>
    );
}