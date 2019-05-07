export const addNewUser = (username) => {
	return fetch('/addUser', {
		method:'POST',
		headers: new Headers({'content-type': 'application/json'}),
		body: JSON.stringify({username})
	})
	.catch(err => Promise.reject({error: 'service-error', err}))
	.then(response => {
		if(response.ok){
			return response.json();
		}
		return Promise.reject({error: 'service-complaint', err: response.statusText});
	});
};

export const addNewMessage = (message, user) => {
	return fetch('/addMessage', {
		method:'POST',
		headers: new Headers({'content-type': 'application/json'}),
		body: JSON.stringify({message, user})
	})
	.catch(err => Promise.reject({error: 'service-error', err}))
	.then(response => {
		if(response.ok){
			return response.json();
		}
		return Promise.reject({error: 'service-complaint', err: response.statusText});
	});
};

export const deleteUser = (username) => {
	return fetch('/deleteUser', {
		method: 'POST',
		headers: new Headers({'content-type': 'application/json'}),
		body: JSON.stringify({username})
	})
	.catch(err => Promise.reject({error: 'service-error', err}))
	.then(response => {
		if(response.ok){
			return response.json();
		}
		return Promise.reject({error: 'service-complaint', err: response.statusText});
	});
};

export const updateAll = () => {
	return fetch('/update')
	.catch(err => Promise.reject({error: 'service-error', err}))
	.then(response => {
		if(response.ok){
			return response.json();
		}
		return Promise.reject({error: 'service-complaint', err: response.statusText});
	});
}