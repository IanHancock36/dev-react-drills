import React,{useState}from 'react'
import './SearchBar.css'


const SearchBar = (props) => {
    const[searchValue,setSearchValue] =useState('')
    // searchValue is state basically
const handleInputChange =(event)=> {
  setSearchValue(event.target.value)
 
}
const handleClearClick=()=> {
setSearchValue('text cleared')
}

const shouldDisplayButton = searchValue.length > 0 
console.log(shouldDisplayButton)

const filterProducts = props.products.filter((product)=>{
  return product.includes(searchValue)
})
  
    return <div>
        <input type="text" value={searchValue} onChange={handleInputChange}placeholder='whoa man' />
        {shouldDisplayButton &&  <button onClick={handleClearClick}>Clear</button>}
       
       {filterProducts.map((product)=>{
         return <li key={product}> {product} </li>
       })}
       
        
        </div>
        
        
        
}

export default SearchBar


// onChange is specific to inputs

// event.target.value basically is telling react what the new value will be
//onChange is fired here is the event that is fired and then here is the value the user wants to be inside that user field