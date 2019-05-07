const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat');
const chatWeb = require('./chat-web');
const loginWeb = require('./login-web');

app.use(express.static('./public'));


app.get('/', (req, res) => {
	if(chat.currenUser == ""){
		res.send(loginWeb.loginPage());
	}
	else{
		res.send(chatWeb.chatPage(chat));
		chat.currenUser = "";
	}
});

app.get('/login', (req, res) => {
	chat.currenUser = "";
	res.send(loginWeb.loginPage());
	
});

app.post('/login',express.urlencoded({ extended: false}), (req, res) => {
	chat.currenUser = req.body.username;
	chat.addUsers(chat.currenUser);
	res.redirect('/');
});

app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  chat.currenUser = req.body.username;  
  const sender = chat.currenUser;
  const { text } = req.body;
  chat.addMessage({ sender, text, timestamp: new Date() });
  res.redirect('/');
});

app.post('/logout', express.urlencoded({ extended: false }), (req, res) => {
  chat.deleteUser(chat.currenUser);
  res.send(loginWeb.loginPage());
});

app.post('/refresh', express.urlencoded({ extended: false }), (req, res) => {
  const username = req.body.username;
  chat.currenUser = username;
  res.redirect('/');
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
