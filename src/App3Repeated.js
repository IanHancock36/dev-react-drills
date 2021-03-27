// import React, { useEffect, useState } from "react";
// import './App.css'
// const App3Repeated = () => {
//     const [a , setA] = useState(0)
//     const [b, setB] = useState(0)

//     useEffect(() => {
//       console.log('render App component')
//     })
 
//   return (
//     <div className ='a-button'>
//      <div>Add A:</div>
//      <button onClick = {()=> {
//        setA(a+1)
//      }} />
//   <div> Add B:</div>
//   <button onClick={()=> {
//     setB(b+1)

//   }} />
    
//     <div>A: {a}</div>
//     <div>B: {b}</div>
    
//     </div> 
//   );
// };

// export default App3Repeated;


import React ,{useState, useEffect} from 'react'

const App3Repeated = function () {
  
  const [text,setText] = useState('The Button has not Been clicked')
  const [count, setCount] = useState(0)
   useEffect(() => {
     
   })

  return (
    <div style ={{textAlign: 'center'}}>
      
      <div style={{marign: '50px'}}>
        {text}
      </div>

      <button onClick={() => {
        setText('the button has been clicked')
        setCount(count +1)
      }} >
        Click Me
      </button>
    <div style={{margin: '50px'}}>
      Clicked : {count} Times

    </div>
      
    </div>
  )
}

export default App3Repeated
