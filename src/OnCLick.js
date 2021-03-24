// import React from 'react'

// function OnCLick() {
//     // function handleClick(){
//     //     alert('Button click.')
//     // }

// const handleClick = () => {
//     alert('clicky the button')
// }
//     return (
//         <div>
//             <button type='button' onClick={handleClick}>   
//                 Event Handler
//             </button>
            
//         </div>
//     )
// }

// export default OnCLick

// import React,{useState} from 'react'

// function OnCLick() {
//     const [count,setCount] = useState(0)
//     function handleClick() {
//         setCount(count + 1)
//     }
//     return (
//         <div>
//             Count: {count}
//             <button type='button' onClick={handleClick}>
                
//                 Increase Count
//             </button>
//         </div>
//     )
// }

// export default OnCLick

import React,{useState} from 'react'

function OnCLick() {
    const [text,setText] = useState('')
    function handleChange(event){
        setText(event.target.value)
    }
    return (
        <div>
            <input type='text' value={text}onChange={handleChange} />
            {text}
        </div>
    )
}

export default OnCLick


