import React, {useState} from 'react'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import style from './Modal.module.css'
export default function Cart(props) {


 
  const closeHandler = () => [
    props.onRemoveCart()
  ]

  return (
    <div>
      <div className={style.backdrop}></div>
      <div className={style.modal}>
       {props.cartItems.map((item) => {
          return <CartItem 
                key = {item.id}
                name = {item.name}
                price = {item.price}
                amount = {item.amount}
                id = {item.id}
                onButtonAdd = {props.onButtonAdd}
                onButtonSubtract = {props.onButtonSubtract}
            /> 
            
       })} 

        <div className= {classes.total}>
          <p>Total Amount</p>
          <p>${props.totalPrice}</p>
        </div>

       <div className = {classes.actions}>
         <button onClick = {closeHandler}>Close</button>
         <button  className = {classes.button}>Order</button>  
       </div>
    </div>
    </div>
  )
}
