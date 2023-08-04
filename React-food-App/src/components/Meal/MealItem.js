import React, {} from 'react'
import Classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
export default function MealItem(props) {

  return (
   <>
    <div className = {Classes.meal}>
        <h3 className={Classes.mealName}>{props.name}</h3><br></br>
        <p className = {Classes.description}>{props.description}</p><br></br>
        <p className = {Classes.price}>${props.price}</p>
        <MealItemForm name = {props.name} onCartItems = {props.onCartItems} price = {props.price} id = {props.id}></MealItemForm>
         
    </div>
    
   </>
  )
}
