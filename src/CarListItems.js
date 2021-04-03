// import React, {useState}from 'react'


// const TripsmeupObject =()=> {
//     const cars = [
//         {brand: 'Chevy', model: 'bellair', color:'white'},
//         {brand: 'mercury', model: 'cougar', color:'yellow'},
//         {brand: 'buick', model: 'riviera', color:'green'},
//         {brand: 'Chevy', model: 'impala', color:'gold'},
//         {brand: 'ford', model: 'mustang', color:'red'},
//         {brand: 'Chevy', model: 'apache', color:'blue'}
        
//     ]
    
        


//     return (
//         <div className= 'cars'>
//            {cars.map((car)=>(
//                <div className='car'> {car}</div>

//            ))}
            
//         </div>
//     )
// }

// export default TripsmeupObject

import React from 'react'

const cars = [
 {id: 1 , brand: 'Chevy', model: 'bellair', color:'white' },
 {id: 2,  brand: 'mercury', model: 'cougar', color:'yellow'},
 {id:3, brand: 'buick', model: 'riviera', color:'green'}

]

const CarListItems = (props) => {
    return(
        <li>
            <div className = 'card-container'
            style = {{
                width: '50%' ,
                border: 'solid 3px #d3d3d3',
                margin: '10px auto'
            }}
            >
                <h1>{props.cars.brand}</h1>
                <h1>{props.cars.model}</h1>
                <h1>{props.cars.color}</h1>

            </div>
        </li>
    )
}
export default CarListItems 