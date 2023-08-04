import React from "react";
import Classes from "./AvailableMeals.module.css";
import Card from "../Card/Card";
import MealItem from "./MealItem";
export default function AvailableMeals(props) {
  return (
    <Card>
      <div className={Classes.meals}>
        <ul>
          <li>
            {props.meals.map((meal) => {
                return( <MealItem
                    key = {meal.id}
                    id = {meal.id}
                    name={meal.name}
                    description={meal.description}
                    price={meal.price}
                    onCartItems = {props.onCartItems}
                  ></MealItem>)
            })}
          </li>
        </ul>
      </div>
    </Card>
  );
}
