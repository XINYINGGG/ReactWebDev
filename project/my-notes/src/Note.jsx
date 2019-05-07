import React from 'react';
import NotesList from './NotesList';

const Note = ({ notesList, note, updateNote, addNote,deleteNote,moveNote,clearNote,sNote,updateSearch,searchNote }) => {
  return (
    <div className="chat-app">
      <div className="display-panel">
        <input className="searchInput" onChange={e => updateSearch(e.target.value)} value={sNote} placeholder="Search The Task or Date..." className="to-send"/>
        <button className="searchButton" onClick={ () => searchNote(sNote) }>Search</button>
        <NotesList notes={notesList} deleteNote={deleteNote} 
                   moveNote={moveNote} clearNote={clearNote}/>
      </div>
      <div className="outgoing">
        <input onChange={e => updateNote(e.target.value)} value={note} placeholder="Enter New Task..." className="to-send"/>
        <button onClick={ () => addNote(note) }>Send</button>
        <button className="importantButton" onClick={ () => clearNote() }> ClearAll</button>
      </div>
    </div>
  );
};

export default Note;