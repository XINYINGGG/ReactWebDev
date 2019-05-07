const express = require('express');
const app = express();
const PORT = 4000;
const Note = require('./note');

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.post('/addUser', express.json(), (req,res) => {
  const { username } = req.body;
  Note.createNote(username);
  res.json({ list: Note.notesList[username].noteList });
});

app.post('/addNote', express.json(), (req,res) => {
  const { note } = req.body;
  const { user } = req.body;
  Note.addNote(user, note);
  res.json({list: Note.notesList[user].noteList});
});

app.post('/deleteNote', express.json(), (req,res) => {
  const { note } = req.body;
  const {user} = req.body;
  Note.removeNote(note,user);
  res.json({list: Note.notesList[user].noteList});
});

app.post('/moveNote', express.json(), (req,res) => {
  const { note } = req.body;
  const {user} = req.body;
  Note.moveThisNote(note,user);
  res.json({list: Note.notesList[user].noteList});
});

app.post('/clearNote', express.json(), (req,res) => {
  const {user} = req.body;
  Note.clearNotes(user);
  res.json({list: Note.notesList[user].noteList});
});
app.post('/searchNote', express.json(), (req,res) => {
  const { sNote } = req.body;
  const {user} = req.body;
  const newNoteList = Note.searchThisNote(sNote, user);
  res.json({list: newNoteList});
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`) );