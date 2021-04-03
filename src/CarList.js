import React,{useState} from 'react'
import CarObjectList from './CarObjectList'




function CarList() {
    const[searchTerm, setSearchTerm] = useState('')
    
    const handleSearchChange = (event) =>{
        setSearchTerm(event.target.value)
    }
    return (
        <div>
            <input type ='text' placeholder ='search cars' onChange ={handleSearchChange} ></input>
       {CarObjectList}
        
        </div>
    )
}

export default CarList

