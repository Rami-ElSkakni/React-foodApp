import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import AvailableMeals from "./components/Meal/AvailableMeals";
import Cart from "./components/Cart/Cart";
import Classes from './components/Cart/Modal.module.css'
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];



function App() {

const [cartItems, setCartItems] = useState([]);
const [count, setCount] = useState(0)
const [generateCart, setGenerateCart] = useState(false)
const[total, setTotal] = useState(0)
const[amountChange, setAmountChange] = useState(false)
const[loadBackDrop, setLoadBackDrop] = useState(false)

const cartItemsHandler = (items) => {
  const exist = cartItems.find((x) => x.id === items.id)
  if(exist) {
    setCartItems(cartItems.map((x) => x.id === items.id ? {...exist, amount: exist.amount + items.amount} : x))
  }
  else {
    setCartItems((prev) => [...prev, items])
  }
}



useEffect(() => {
  setCount(0)
  cartItems.map((item) => setCount((prev) => prev + item.amount))
},[cartItems])



useEffect(() => {
  setTotal(0)
  cartItems.map((item) => setTotal((prev) => prev + item.amount * item.price))
  console.log("activated")
},[cartItems, amountChange])


const onGenerateCart = () => {
  setGenerateCart(!generateCart)
}

const addAmount = (item) => {
  setAmountChange(!amountChange)
  setCount((prev) => prev + 1)
  cartItems.map((i) => i.id === item ? i.amount++: console.log("not working"));
}

const subtractAmount = (item) => {
  setAmountChange(!amountChange)
  setCount((prev) => prev - 1)
  cartItems.map((i) =>
   i.id === item ? i.amount--: console.log("not working")
   );
}

const onBackDropHandler = () => {
  setLoadBackDrop(!loadBackDrop)
 }

  return (
    <div>
      <Header onGenerate = {onGenerateCart} count = {count} onBackDrop = {onBackDropHandler}></Header>
      <AvailableMeals meals = {DUMMY_MEALS} onCartItems = {cartItemsHandler}></AvailableMeals>
       {generateCart && <Cart cartItems = {cartItems} onRemoveCart = {onGenerateCart} totalPrice = {total} onButtonAdd = {addAmount} onButtonSubtract = {subtractAmount}> </Cart> }
    </div>
  );
}

export default App;
