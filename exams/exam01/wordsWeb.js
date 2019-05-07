const words = require('./words');


const wordsWeb = {
	wordsPage: function(words) {
		return `		
			<!DOCTYPE html>
			<html>
			<head>
				<link rel="icon" href="https://img.icons8.com/color/48/000000/sloth.png">
				<link rel="stylesheet" type="text/css" href="./guessWords.css">
				<title>Guess A Word</title>
			</head>
			<body>
				<img src="./header.jpg" alt="" class="guessImage">
				<div class="guess-app">
					<div class="display-panel">
						${wordsWeb.getWordsList(words)}
						${wordsWeb.getGuessedList(words)}
					</div>
					<div class="operate-panel">
						${wordsWeb.getOutgoing(words)}
						${wordsWeb.getGuessedTimes(words)}
					</div>
				</div>
			</body>
			</html>
		`;
	},

	getWordsList: function(words) {
		return `
			<ul class="wordslist"> ` + 'WordsList: ' +
			Object.values(words.wordsInfo).map( wordInfo => `
				<li>
					<div class="words">
						<span class="word">${wordInfo}</span>
					</div>
				</li>
			`).join('') +
			`</ul>
		`;
	},

	getGuessedList: function(words) {
		return `
			<ol class="guessedList">` + 'Guessed words: ' + 
			Object.values(words.outputsInfo).map( message => `
				<div class="guess">
					<span class="times">${message}</span>
				</div>
			`).join('') +
			`</ol>
		`;
	},
	getOutgoing: function(words) {
		return `
			<div class="outgoing">
		        <form action="/type", method="POST">
		        	<input class="to-send" name="typing" value="" placeholder="Type a word"/>
		        	<button type="submit", class="sendButton">Send</button>
		        </form>
		        <div class="reply">
			        <form action="/replay", method="GET">
			        	<button class="toReplay">New Guess</button>
			        </form>
		        </div>
		    </div>
		`;
	},

	getGuessedTimes: function(words) {
		return `
			<div class="count">
				<span class="introTimes">You have guessed:</span>
				<span class="count">${words.getCount()} time(s)</span>
			</div>
		`;
	}

};

module.exports = wordsWeb;













