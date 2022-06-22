import { useState } from "react";
import classes from "./CartItem.module.css";
import Card from "../Card/Card";
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const onAdd = () => {
    props.onButtonAdd(props.id);
  };

  const onSubtract = () => {
    props.onButtonSubtract(props.id);
  };

  if(props.amount > 0) {
    return (
      <li className={classes["cart-item"]}>
        <div>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={onSubtract}>−</button>
          <button onClick={onAdd}>+</button>
        </div>
      </li>
    );
  }
  else {
    <h2>Your cart is empty</h2>
  }

  
};

export default CartItem;
