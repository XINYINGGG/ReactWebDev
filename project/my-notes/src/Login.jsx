import React from 'react';

const Login = ({updateUserName, username, addNewUser}) => {
	return (
		<div>
		<img className="photo" src="todolist.png" alt=""/>
		<div className="login">
			<input onChange={e => updateUserName(e.target.value)} value={username} className="username" placeholder="Enter Username"/>
			<button onClick={ () =>addNewUser(username) }>Login</button>
		</div>
		</div>
	);
};
export default Login;