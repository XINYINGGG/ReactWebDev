const express = require('express');
const app = express();
const PORT = 4000;
const chat = require('./Chat');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.post('/addUser', express.json(), (req,res) => {
	const {username} = req.body;
	chat.addUser({username});
	res.json({usersList: chat.users});
});

app.post('/addMessage', express.json(),(req,res) => {
	const{message, user} = req.body;
	chat.addMessage({sender: user, timestamp: new Date(), text: message});
	res.json({messagesList: chat.messages, usersList: chat.users});
});

app.post('/deleteUser', express.json(),(req,res) => {
	const {username} = req.body;
	chat.deleteUser({username});
	res.json({usersList: chat.users});
});

app.get('/update', (req,res) => {
	res.json({usersList: chat.users, messagesList: chat.messages});
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));