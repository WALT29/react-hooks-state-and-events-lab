
import React,{useState}from "react";


function Item({ name, category }) {
  const[inCart,setClass]=useState(false)

  function handleClassClick(event){
    setClass(!inCart)
  }


  return (
    <li className={inCart ?"in-cart" :""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClassClick} >{inCart ?"Remove From Cart" :"Add To Cart"}</button>
    </li>
  );
}

export default Item;
