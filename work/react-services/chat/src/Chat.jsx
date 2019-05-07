import React from 'react';
import UserList from './UserList';
import MessageList from './MessageList';
import { addMessage, updateMessage } from './services';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue : '',
      users: {
        'Emily': 'Emily',
      },
      messages: [{
      sender: 'Emily',
      timestamp: new Date("2019-03-22 17:09:00"),
      text: "I posted lots of assignments, enjoy it :)",
    },],
    };
    this.onKeyup = this.onKeyup.bind(this);
  }

  componentDidMount(){
    updateMessage()
      .then( ({usersList, messagesList}) => {
        this.setState({
          users: usersList,
          messages : messagesList,
        })
    });
    this.myInterval = setInterval(() => {
      updateMessage()
      .then( ({usersList, messagesList}) => {
        this.setState({
          users: usersList,
          messages : messagesList,
        })
      });
    }, 5000)
  }


  onKeyup(e) {
        if(e.keyCode === 13) {
          addMessage(e.target.value)
            .then( newMessage => {
               this.setState({
                  messages : newMessage
               })
            }); 
            e.target.value = "";

        }
  }



  render() {

    return (
      <div className="display-panel">
      	<UserList users={this.state.users}/>
      	<MessageList messages={this.state.messages}/>
        <input className="to-send" placeholder="Enter message to send" onKeyUp={this.onKeyup} 
               onChange={this.onKeyup.bind(this)} defaultValue={this.state.inputValue}/>
      </div>
    );
  }

}

export default Chat;