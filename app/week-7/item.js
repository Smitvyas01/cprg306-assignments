import React from 'react';

export default function Item({itemObj, onSelect }) {
    let {name, quantity, category} = itemObj;

    const handleClick = () => {
        if (onSelect) {
          onSelect(itemObj);
        }
      };
    
    return (
        <li className="p-3 bg-teal-300 cursor-pointer" onClick={handleClick}>
        <div className="flex flex-col">
            <span className="font-bold text-bold text-black text-xl ">{name}</span>
            <span className="text-black text-medium"> Buy {quantity}</span>
            <span className="text-black text-medium"> in {category}</span>
        </div>
    </li>
    );
}