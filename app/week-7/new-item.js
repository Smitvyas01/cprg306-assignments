"use client"

import { useState } from "react";

export default function NewItemForm({onAddItem, closeFormFunc}) { // Renamed function for clarity

  const [productName, setProductName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("1");
  const [itemType, setItemType] = useState("produce");

  const handleAddItem = (event) => { // Renamed function for action

    event.preventDefault();
        
    let item = {
      name: productName,
      quantity: itemQuantity,
      category: itemType,
  };
  
    onAddItem(item);

        setProductName("");
        setItemQuantity("1");
        setItemType("produce");
        closeFormFunc();
        
    }
  return (
    <main className="flex flex-col border-2 border-black w-80 ml-12 rounded-2xl"> 
      <form onSubmit={handleAddItem}>
        <div>
          <input
            className="m-10 border-4 border-black" 
            type="text"
            id="name"
            value={productName}
            placeholder="Name"
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            className="m-10 border-4 border-black"
            type="number"
            id="quantity"
            min="0"
            value={itemQuantity}
            onChange={(ent) => setItemQuantity(ent.target.value)}
          />
        </div>
        <div>
          <select
            className="m-10 border-4 border-black"
            id="category"
            value={itemType}
            onChange={(ent) => setItemType(ent.target.value)}
          >
           <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="meat">Meat</option>
            <option value="bakery">Bakery</option>
            <option value="beverages">Beverages</option>
            <option value="frozen">Frozen</option>
            <option value="snacks">Snacks</option>
          </select>
        </div>
        <button className="p-3 border-2  border-cyan-600 bg-orange-400 text-black font-bold  m-9" type="submit" >
          Add Item
        </button>
      </form>
    </main>
  );
}