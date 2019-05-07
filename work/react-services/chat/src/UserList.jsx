import React from 'react';

const UserList = ({ users  }) => {
  return (
	  <div className="users">
	    { Object.values(users).map(name => {return formatUser(name)})}
	  </div>
  );
};

const formatUser = function(name){
	return(
		<li key = {name}>
        <div>
          <span className="username">{name}</span>
        </div>
        </li>
	);
};

export default UserList;