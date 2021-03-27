// import React, { Component } from 'react';

// export default class ControlledComponents extends Component {
// 	state = {
// 		username: '',
// 		password: ''
// 	};
// 	handleUserNameChange = (event) =>
// 		this.setState({
// 			username: event.target.value
// 		});
// 	handlePassWordChange = (event) =>
// 		this.setState({
// 			password: event.target.value
// 		});
// 	render() {
// 		return (
// 			<form>
// 				<div>
// 					<label>UserName:</label>
// 					<input type="text" onChange={this.handleUserNameChange} />
// 				</div>
// 				<div>
// 					<label>PassWord:</label>
// 					<input type="text" onChange={this.handlePassWordChange} />
// 				</div>
// 				<input type="submit" />
// 			</form>
// 		);
// 	}
// }

import React from 'react'
import {useInputChange} from './useInputChange'

function ControlledComponentWithHooks() {
	const[input,handleInputChange]= useInputChange ()

	
	return (
		<form>
			<div>
				<label>UserName:</label>
				<input type='text' name='username' onCHange={handleInputChange}/>
			</div>
			<div>
				<label>PassWord:</label>
				<input type='text' name='password' onChange={handleInputChange} />
			</div>
			<input type = "submit" />

		</form>
	)
}

export default ControlledComponentWithHooks
