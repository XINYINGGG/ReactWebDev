import React from 'react';
import UsersList from './UsersList';
import MessagesList from './MessagesList';

const Chat = ({ usersList, messagesList, message, updateMessage, addMessage}) => {
  return (
    <div className="chat-app">
      <div className="display-pannel">
        <UsersList users={usersList}/> 
        <MessagesList messages={messagesList}/>
      </div>
      <div className="outgoing">
        <input onChange={e => updateMessage(e.target.value)} value={message} placeholder="Enter message to send" className="to-send"/>
        <button onClick={ () => addMessage(message)}>Send</button>
      </div>
    </div>
  );
};

export default Chat;