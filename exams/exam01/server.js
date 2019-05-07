const express = require('express');
const app = express();
const PORT = 3000;

const words = require('./words');
const wordsWeb = require('./wordsWeb');

app.use(express.static('./public'));

app.get('/',(req,res)=>{
	
	if(words.getSecretWord() === "") {
		words.selectSecretWord();
		console.log("The secret word is : " + words.getSecretWord());
	}
	res.send(wordsWeb.wordsPage(words));
});

app.get('/replay',(req,res) =>{
	words.setCount(0);
	words.setMatch(0);
	words.newGuess();
	words.setSecretWord("");
	res.redirect('/');
});

app.post('/type',express.urlencoded({ extended: false}), (req, res) =>{
	const typedWord = req.body.typing;
	const secretWord = words.getSecretWord();
	words.addOutput(typedWord,secretWord);
	res.redirect('/');
});



app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
