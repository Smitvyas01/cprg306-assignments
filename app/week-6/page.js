"use client";

import React, { useState, useEffect } from 'react';
import itemsData from './items.json';
import ItemList from "../week-6/item-list";
import NewItem from "./new-item";


export default function Page() {
    const [items, setItems] = useState(
        itemsData.map((items) => ({...items}))
    );

    const [isNewItemFormOpen, setNewItemFormOpen] = useState(false);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const openNewItemForm = () => setNewItemFormOpen(true);
    const closeNewItemForm = () => setNewItemFormOpen(false);

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
        <ItemList items={items} />
        </main>
    );
}