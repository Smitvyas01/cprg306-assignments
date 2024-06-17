"use client"

import { useState } from "react";

export default function NewItemForm() { // Renamed function for clarity

  const [productName, setProductName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemType, setItemType] = useState("produce");

  const handleAddItem = (event) => { // Renamed function for action

    event.preventDefault();

    const newItem = {
      itemName: productName,
      itemCount: itemQuantity,
      itemCategory: itemType,
    };

    console.log(newItem);

    alert(`Added item: ${newItem.itemName}, quantity: ${newItem.itemCount}, category: ${newItem.itemCategory}`);

    setProductName("");
    setItemQuantity(1);
    setItemType("produce");
  };

  return (
    <main>
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
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </div>
        <div>
          <select
            className="m-10 border-4 border-black"
            id="category"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
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
        <button className="p-4 bg-black text-white  m-10" type="submit" >
          Add Item
        </button>
      </form>
    </main>
  );
}