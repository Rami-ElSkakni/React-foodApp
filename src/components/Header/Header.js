import React from "react";
import classes from "./Header.module.css";
import styles from "./HeaderCartButton.module.css";
import MealSummary from "./MealSummary";
import CartIcon from "../Cart/CartIcon";
export default function Header(props) {

 

  const genrateCart = () => {
    props.onBackDrop()
    props.onGenerate()
  }

 
  return (
    <>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <button className={styles.button} onClick = {genrateCart}> <CartIcon></CartIcon> Your cart <span className = {styles.badge}>{props.count}</span></button>
      </div>
      <div className = {classes.mainimage}>
            <img src={require("./meals.jpg")} alt=""  />
      </div>

      <MealSummary />
      
    </>
  )
  
}
