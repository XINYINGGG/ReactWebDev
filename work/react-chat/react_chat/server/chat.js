const users = {

};

const messages = [

];

function addMessage({sender, timestamp, text}) {
	messages.push({sender, timestamp, text});
}

function addUser({username}) {
	users[username] = username;
}

function deleteUser({username}){
	delete users[username];
}
const chat = {
	users,
	messages,
	addMessage,
	addUser,
	deleteUser,
};

module.exports = chat;