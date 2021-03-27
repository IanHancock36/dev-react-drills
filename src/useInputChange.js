// putting the hooks in here and make it reausable. 

import {useState} from 'react'

export const useInputChange =() => {
    const [input,setInput] = useState({})

    const handleInputChange =(event) => setInput({
        ...input, [event.theCurrentTarget.name] :event.theCurrentTarget.value
    })
    return [input,handleInputChange]
}


// Now I need to import this into controlled Component with Hooks. 
