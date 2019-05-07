import React from 'react';

const MessageList = ({messages}) => {
  return (
	  <div className="messages">
	    { messages.map( message => {return formatMessage(message,messages.indexOf(message))} )}
	  </div>
  );
};

const formatMessage = function(message,index){

	return(
		<li key = {index}>
	        <div className="message">
		        <div className="sender-info">
		          <span className="username">{message.sender}</span>
		        </div>
		        <div className="message-info">
		          <span className="timestamp">{message.timestamp.toString()}</span>
		        </div>
	            <p className="message-text">{message.text}</p>
	        </div>
        </li>
	);
};

export default MessageList;