import React from "react";

export default function Menu({ items }) {
  return (
    <div className="hidden md:block">
      <ul className="flex gap-4 text-gray-500 font-medium">
        {items.map((item) => (
          <li key={item.id}>{item.content}</li> 
        ))}
      </ul>
    </div>
  );
}
