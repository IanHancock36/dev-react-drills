import React, { Component } from 'react'
const list =[1,2,3]
export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      list,
    }
  }

  onClearArray =()=>{
    this.setState({list:[]});
  }
  onResetArray =()=>{
    this.setState({list})
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item =>(
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button type='button' onClick={this.onClearArray}>
          Clear Away
        </button>
        
        <button type="button" onClick={this.onResetArray}> Reset</button>
        
      </div>
    )
  }
}


//As mentioned, the initial array state is done in the React component's constructor and afterward used within the render() method to display it. Every time the state changes, the render method will run again and display the correct state in your browser. However, the state shouldn't be changed by mutating this.state directly. Instead, there exists the this.setState() method on a React component to update React's state. A quote from the official React documentation says:

//"Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable