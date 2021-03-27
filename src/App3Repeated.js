import React, { useEffect, useState } from "react";
import './App.css'
const App3Repeated = () => {
    const [a , setA] = useState(0)
    const [b, setB] = useState(0)

    useEffect(() => {
      console.log('render App component')
    })
 
  return (
    <div className ='a-button'>
     <div>Add A:</div>
     <button onClick = {()=> {
       setA(a+1)
     }} />
  <div> Add B:</div>
  <button onClick={()=> {
    setB(b+1)

  }} />
    
    <div>A: {a}</div>
    <div>B: {b}</div>
    
    </div> 
  );
};

export default App3Repeated;

