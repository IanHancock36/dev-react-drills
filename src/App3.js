
import React, {useState}from 'react'

function App3() {
    const[state,setState] = useState ({
        firstName: '',
        lastName: ''
    })
    function handleChange(event){
        const value = event.target.value 
        setState({
            ...state ,[event.target.name] :value });
    }
    return (
        <form>
            <label>
                First Name 
                <input
                type= 'text'
                name='firstName'
                value ={state.firstName}
                onChange ={handleChange}
                />
               </label>
               <label>
                Last Name 
                <input
                name="lastName"
                type= 'text'
                value ={state.lastName}
                onChange ={handleChange}
                />
               </label>
        </form>
    )
}

export default App3
