
import { useState } from "react";

export function Count() {
    const [count, setCount] = useState(0);

  const increase = ()=>{
     setCount((prev)=> prev+1);
  }
  const decrease  = ()=>{
    setCount((prev)=> {
      if(prev === 0 ) {
        throw new Error ("Value can not be less than 0 ") 
      }
      return prev -1}
    );
 }
  return (
    <>
     
       <button style={{display: 'inline'}} onClick={increase} > Increase Count</button>
       <h2 style = {{display: 'inline'}}>{ count }</h2>
       <button style = {{display: 'inline'}} onClick = {decrease} >Decrease Count</button>
    </>
  )
}