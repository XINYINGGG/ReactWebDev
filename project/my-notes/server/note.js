const users = {

};

const notesList = {
};
class Note{

  constructor(name){
  	this.user = name;
  	this.noteList = [];
  }

  addNotesList(newNote){
    Date.prototype.Format = function (fmt) {
      const o = {
        "M+": this.getMonth() + 1, 
        "d+": this.getDate(),
        "h+": this.getHours(), 
        "m+": this.getMinutes(), 
        "s+": this.getSeconds(), 
      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (let k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    }

  	this.noteList.push({note:newNote, time: (new Date()).Format("yyyy-MM-dd hh:mm:ss").toString() });
  }

  deleteFromNotesList(ThatNote){
    const length = this.noteList.length;
    for(let i = 0; i < length; i++)
    {
      if(this.isObjectValueEqual(this.noteList[i],ThatNote)){
        if(i == 0)
        {
          this.noteList.shift(); 
          return;
        }
        else if(i == length-1)
        {
          this.noteList.pop();
          return;
        }
        else
        {
          this.noteList.splice(i,1);
          return;
        }
      }
    }
  }
  moveToFirst(ThisNote){
    const length = this.noteList.length;
    for(let i = 0; i < length; i++)
    {
      if(this.isObjectValueEqual(this.noteList[i],ThisNote)){
        if(i == 0 || length <= 1)
        {
          return;
        }
        else
        {
          const temp = this.noteList[0];
          this.noteList[0] = this.noteList[i];
          this.noteList[i] = temp;
          return;
        }
      }
    }
  }
  clearNote(){
    this.noteList = [];
  }

  isObjectValueEqual(a, b){
    if(typeof(a) != "object" && typeof(b) != "object"){
      if(a == b){
        return true;
      }else{
        return false;
      }
    }
      const aProps = Object.getOwnPropertyNames(a);
      const bProps = Object.getOwnPropertyNames(b);

      if (aProps.length != bProps.length) {
          return false;
      }

      for (let i = 0; i < aProps.length; i++) {
          const propName = aProps[i];

          if (a[propName] !== b[propName]) {
              return false;
          }
      }

      return true;
  }
}


function addUser(username) {
  users[username] = username;
}

function createNote(name){
	if(users[name]){
  		return;
	}
	else{
		notesList[name] = new Note(name);
		addUser(name);
	}	
}
function addNote(user, newNote){
	notesList[user].addNotesList(newNote);
}
function removeNote(note,user){
  notesList[user].deleteFromNotesList(note);
}
function moveThisNote(note,user){
  notesList[user].moveToFirst(note);
}
function clearNotes(user){
  notesList[user].clearNote();
}
function searchThisNote(sNote,user){
  const realNotes = notesList[user].noteList;
  const newNoteList = [];
  for(let note of realNotes){
    const message = note.note;
    const time = note.time;
    if(message.indexOf(sNote) != -1 || time.indexOf(sNote) != -1){
      newNoteList.push(note);
    }
  }
  return newNoteList;
}


const note = {
  users,
  notesList,
  createNote,
  addNote,
  removeNote,
  addUser,
  moveThisNote,
  clearNotes,
  searchThisNote
};

module.exports = note;