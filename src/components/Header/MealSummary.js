import React from "react";
import Classes from "./MealsSummary.module.css";
export default function MealSummary() {
  return (
    <div className={Classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose yoir favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        ofcourse by experienced chefs!
      </p>
    </div>
  );
}
