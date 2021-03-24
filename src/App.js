// // 
import React from 'react'
import SearchBar from './Components/SearchBar'
import SearchBarArray from './SearchBarArray'
import UpdatedArraySearch from './UpdatedArraySearch'
import App2 from './App2'

import App3 from './App3'



const App =() =>{
return(
    <div>
        {/* <App2 /> */}
    {/* <SearchBar products={['toothpaste','mouthwash','water','sushi','toothbrush']} /> */}
    {/* <SearchBarArray />
    <UpdatedArraySearch /> */}
    <App3 />
    {/* <SearchBar products={['basketball','football','baseball','soccer']} /> */}

    </div>
)
}

export default App







// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state={
//       value: '',
//       list: [1,2,3,4,5]
//     }
     
//   }
//   onAddItem = () =>{
//     this.setState(state=>{
//       const list = state.list.concat(this.state.value)

//       return {
//         list, value:''
//       };
//     });
//   };
 
//   }
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }



//As mentioned, the initial array state is done in the React component's constructor and afterward used within the render() method to display it. Every time the state changes, the render method will run again and display the correct state in your browser. However, the state shouldn't be changed by mutating this.state directly. Instead, there exists the this.setState() method on a React component to update React's state. A quote from the official React documentation says:

//"Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable



// Psuedo code 
//1. Create an app where there is an array of data on state that is then shown on the DOM as a list. 
//2. There should also be a way for the user to filter what's shown in the list. 
//3. The array of data can be as simple as an array of strings. 
//4. The list can be as simple as a list of <h2> elements.



// App \\ 
// 1. Array of Data 
    // ARRAY of drinks with THIS.STATE
        //this.state = drinks: ['beer','wine','coffee','water']

// 2. Filter the Array 
    //  .MAP through the whole array .FILTER through array of DRINKS 
        //.INCLUDE DRINK in empty array called 'drinksToFilter' 

// 3. 

// 4. Array list
    // RETURN <h2> element from element seleceted in the search bar
        // 

// 5. Input Field 
    // text input field 