import React, {useState, useEffect} from 'react'
import Classes from './Input.module.css'

export default function Input(props) {

  // const inputAmount = useRef("")

  const [inputVal, setInputVal] = useState(1);

  const inputValHandler = (e) => {
    if(e.target.value !== '') {
      setInputVal(e.target.value)
    }
    
  }
  
  useEffect(() => {
    props.onAddAmount(inputVal);
  }, [inputVal, props])
  

  return (
    <>
        <div className={Classes.input}>
            <label>
                Amount 
                <input type="number"  onChange = {inputValHandler} value = {inputVal} min = "1" />
            </label>
        </div>
    </>
  )
}
