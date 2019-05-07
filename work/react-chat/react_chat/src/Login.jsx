import React from 'react';

const Login = ({updateUserName, username, addNewUser}) => {
	return(
		<div className="Login">
			<input onChange={e => updateUserName(e.target.value)} value={username} className="username" placeholder="Enter Username"/>
			<button onClick={() => addNewUser(username)}>Login</button>
		</div>
	);
};

export default Login;