import React, { Component } from 'react';
import Logout from './Logout';
import Login from './Login';
import Chat from './Chat';
import { addNewUser, addNewMessage, deleteUser, updateAll } from './services';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      username:'',
      message:'',
      users:{},
      messages:[],
    };

    updateAll()
      .then(({usersList, messagesList}) => {
        this.setState({
          users: usersList,
          messages: messagesList,
        })
      });

    this.updateUserName = this.updateUserName.bind(this);
    this.updateMessage = this.updateMessage.bind(this);

    this.addMessage = this.addMessage.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount(){
    this.myInterval = setInterval(() => {
      updateAll()
      .then(({usersList, messagesList}) => {
        this.setState({
          users: usersList,
          messages: messagesList,
        })
      });
    }, 5000)
  }

  addNewUser(username){
    if(!username)
      return;
    addNewUser(username)
    .then( ({usersList}) => {
      this.setState({
        isLogin: true,
        users: usersList,
      });
    })
  }

  addMessage(message){
    if(!message){
      return;
    }
    const user = this.state.username;
    addNewMessage(message, user)
    .catch(err => {
      const errMessage = {sender:'service-error', timestamp:new Date(), text:'There is a problem with network'};
      this.setState({
        messages : [...this.state.messages, errMessage]
      })
      return;
    })
    .then(({messagesList, usersList}) => {
      this.setState({
        messages: messagesList,
        users: usersList,
        message:'',
      });
    });
  }

  deleteUser(){
    const username = this.state.username;
    deleteUser(username)
    .then( ({usersList}) => {
      this.setState({
        isLogin: false,
        username:'',
        users: usersList,
      });
    })
  }

  updateUserName(username){
    this.setState({
      username: username
    });
  }

  updateMessage(message){
    this.setState({
      message: message
    });
  }
  render() {
    if(!this.state.isLogin){
      return(
        <div id="chat-app">
          <Login updateUserName={this.updateUserName} username={this.state.username} addNewUser={this.addNewUser}/>
        </div> 
      );
    }else{
      return(
        <div id="chat-app">
          <Logout deleteUser={this.deleteUser}/>
          <Chat usersList={this.state.users} messagesList={this.state.messages} message={this.state.message} updateMessage={this.updateMessage} addMessage={this.addMessage}/>
        </div>
      );
    }
  }
}

export default App;
