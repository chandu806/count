import React from "react"
import {useState} from "react"
import "./List.css"
export const List = () => {
  const [count, setCount] = useState(0);
  const changeVariable=(value) => {
    setCount(count + value)
  }
  if({count}%2==0){
    
  }else{
   
  }
  return (
    <div>
      
      <h1>
       {/* {count} */}
       {count}
      </h1>
      {/* {count} */}
     
      <div>
      <button  onClick = {() => changeVariable(1)}>Add</button>
      <button  onClick = {() => changeVariable(-1)}>Sub</button>
      <button  onClick={() => changeVariable(count*1)}>Mul</button>
      </div>
    </div>
  )
}