import React from 'react'
const cars = [
            {brand: 'Chevy', model: 'bellair', color:'white'},
            {brand: 'mercury', model: 'cougar', color:'yellow'},
            {brand: 'buick', model: 'riviera', color:'green'},
            {brand: 'Chevy', model: 'impala', color:'gold'},
            {brand: 'ford', model: 'mustang', color:'red'},
            {brand: 'Chevy', model: 'apache', color:'blue'}
]


function CarObjectList() {
    return (
       <ul>
           {cars.map(car =>{
               return(

        
           <li> 
               <div className = 'car-container'>
                   <h1> {car.brand}</h1>
                   <h1> {car.model}</h1>
                   <h1>{car.color}</h1>
               </div>
           </li>
        )
        })}
       </ul>
    )
}

export default CarObjectList
