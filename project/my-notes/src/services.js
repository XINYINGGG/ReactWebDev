export const addNewUser = (username) => {
  return fetch('/addUser', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( { username } )
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const addNewNote = (note, user) => {
  return fetch('/addNote',{
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( { note, user } )
  })
  .catch( err => Promise.reject({ error: 'service-error', err }))
  .then( response => {
    if(response.ok){
      return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const deleteThisNote = (note,user) => {
  return fetch('/deleteNote', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( {note ,user})
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const moveThisNote = (note,user) => {
  return fetch('/moveNote', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( {note ,user})
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};

export const clearNotes = (user) => {
  return fetch('/clearNote', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( {user})
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};
export const searchThisNote = (sNote,user) => {
  return fetch('/searchNote', {
    method:'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify( {sNote, user})
  })
  .catch( err => Promise.reject({ error: 'service-error', err }) )
  .then( response => {
    if(response.ok){
        return response.json();
    }
    return Promise.reject({ error: 'service-complaint', err: response.statusText });
  });
};
