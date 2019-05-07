import React from 'react';

const Logout = ({ deleteUser }) => {
	return (
		<div className="logout">
			<button onClick={ () => deleteUser()}>Logout</button>
		</div>
	);
};

export default Logout;