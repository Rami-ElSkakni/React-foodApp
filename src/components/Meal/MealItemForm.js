import React, { useState } from "react";
import Classes from "./MealItemForm.module.css";
import Input from "./Input";


export default function MealItemForm(props) {

  const [amount, setAmount] = useState();

  const onAddAmountHandler = (amountInput) => {
    if (amount !== "") {
      setAmount(amountInput);
    }
  };

  const formHandler = (e) => {
    e.preventDefault();
    props.onCartItems({name: props.name, amount: +amount, price: props.price, id: props.id})
  };

  

  return (
    <>
      <form className={Classes.form} onSubmit={formHandler}>
        <Input onAddAmount={onAddAmountHandler}></Input>
        <button>+Add</button>
        
      </form>
    </>
  );
}
