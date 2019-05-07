import React from 'react';

const formatNote = function(note, index,deleteNote,moveNote){
  return(
      <div key={index}>
        <div className="note">
          <p className="note-title">To Do:</p>
          <p className="note-text">{note.note}</p>
          <div className="note-time">
            <span className="timestamp">Added Time: {note.time}</span>
          </div>
          <button className="priorityButton" onClick={ () => moveNote(note) }> The First Priority</button>
          <button className="finishButton" onClick={ () => deleteNote(note) }>Finished</button>
        </div>
      </div>
  );
};

const NotesList = ({ notes,deleteNote,moveNote }) => {
  return(
    <ol className="messages">
      { notes.map( note => { return formatNote(note, notes.indexOf(note),deleteNote,moveNote)})}
    </ol>
  )
};

export default NotesList;