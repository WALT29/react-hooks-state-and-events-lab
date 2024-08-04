import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory]=useState("All");

  function handleChange(event){
    //console.log(event.target.value);
    setSelectedCategory(event.target.value)
  }

   // Filter items based on the selected category
   const filteredItems = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }
    return item.category === selectedCategory;
  });



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
