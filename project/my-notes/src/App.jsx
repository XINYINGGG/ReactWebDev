import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Logout from './Logout';
import Note from './Note';
import { addNewUser, addNewNote,deleteThisNote,moveThisNote,clearNotes,searchThisNote } from './services'; 

class App extends Component {
  constructor(){
    super();
    this.state={
      isLogin: false,
      username:'',
      note:'',
      users:{},
      notes:[],
      sNote: '',
    };
  
    this.updateUserName = this.updateUserName.bind(this);
    this.updateNote = this.updateNote.bind(this);

    this.addNote = this.addNote.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.moveNote = this.moveNote.bind(this);
    this.clearNote = this.clearNote.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.searchNote = this.searchNote.bind(this);
  }

  addNewUser(username){
    if(!username){ 
      return;
    }
    addNewUser(username)
    .then( ({ list }) => {
      this.setState({
        isLogin: true,
        notes: list,
      });
    })
  }

  addNote(note){
    if(!note){
      return;
    }
    const user = this.state.username;
    addNewNote(note, user)
    .then( ({list}) => {
      this.setState({
        notes: list,
        note: '',
      });
    })
  }

  deleteNote(note){
    if(!note){
      return;
    }
    const user = this.state.username;
    deleteThisNote(note, user)
    .then( ({list}) => {
      this.setState({
        notes: list,
        note:'',
      });
    })
  }

  moveNote(note){
    if(!note){
      return;
    }
    const user = this.state.username;
    moveThisNote(note, user)
    .then( ({list}) => {
      this.setState({
        notes: list,
        note:'',
      });
    })
  }

  clearNote(){
    const user = this.state.username;
    clearNotes(user)
    .then( ({list}) => {
      this.setState({
        notes: list,
        note:'',
      });
    })
  }

  deleteUser(){
    this.setState({
      isLogin: false
    });
  }

  updateUserName(username){
    this.setState({
      username:username
    });
  }

  updateNote(note){
    this.setState({
      note:note
    });
  }
  updateSearch(sNote){
    this.setState({
      sNote:sNote
    });
  }
  searchNote(sNote){
    const user = this.state.username;
    searchThisNote(sNote, user)
    .then( ({list}) => {
      this.setState({
        notes: list,
        note:'',
        sNote:'',
      });
    })
  }
  render(){
    if(!this.state.isLogin){
      return(
        <div id="note-app">
          <Login updateUserName={this.updateUserName} username={this.state.username} addNewUser={this.addNewUser}/>
        </div>
      );
    }else{
      return(
        <div id="note-app">
          <Logout deleteUser={this.deleteUser}/>
          <Note notesList={this.state.notes} note={this.state.note} 
                updateNote={this.updateNote} addNote={this.addNote} 
                deleteNote={this.deleteNote} moveNote={this.moveNote}
                clearNote={this.clearNote} sNote={this.state.sNote}
                updateSearch={this.updateSearch} searchNote={this.searchNote}/>
        </div>
      );
    }
  }
}
export default App;