
const wordsInfo = [
	"TEA", 
	"EAT", 
	"TEE", 
	"PEA", 
	"PET", 
	"APE",
];

const outputsInfo = [];


let count = 0;

let match = 0;

let secretWord = "";


function getCount(){
	return count;
}

function setCount(num){
	count = num;
}
function getMatch(){
	return match;
}
function setMatch(ma){
	match = ma;
}
function getSecretWord(){
	return secretWord;
}
function setSecretWord(secret){
	secretWord = secret;
}





function selectSecretWord(){

	const randomIndex = Math.floor(Math.random() * wordsInfo.length);

	secretWord = wordsInfo[randomIndex];
}


function inWordsInfo(typedWord){
	for(let word of wordsInfo){
		word = word.toLowerCase();
		typedWord = typedWord.toLowerCase();
		if(word === typedWord){
			return true;
		}
	}
	return false;
}


function addOutput(typedWord, secretWord){

	let text = "";

	secretWord = secretWord.toLowerCase();
	typedWord = typedWord.toLowerCase();

	if(inWordsInfo(typedWord) === false){
		text = typedWord+" is an invalid word, not increment the turn counter and allow a new guess";
		outputsInfo.push(text);
		return;
	}

	if(secretWord.length != typedWord.length){
		text = typedWord+" is an invalid word, not increment the turn counter and allow a new guess";
		outputsInfo.push(text);
		return;
	}

	if(typedWord === secretWord){
		count++;
		text = "You have won the game in "+count+" turns and you can start a new game with a new randomly selected word from the list";
		outputsInfo.push(text);
		return;
	}
	else{
		const str1 = typedWord.split("");
		const str2 = secretWord.split("");

		const sorted_1 = str1.concat().sort();
		const sorted_2 = str2.concat().sort();

		let sameValue = [];
		let str1_index = 0;
		let str2_index = 0;

		while (str1_index < str1.length
	           && str2_index < str2.length)
	    {
	        if (sorted_1[str1_index] === sorted_2[str2_index]) {
	            sameValue.push(sorted_1[str1_index]);
	            str1_index++;
	            str2_index++;
	        }
	        else if(sorted_1[str1_index] < sorted_2[str2_index]) {
	            str1_index++;
	        }
	        else {
	            str2_index++;
	        }
	    }

	    match = sameValue.length;

		 if(match >= 1){
			text = typedWord+" is "+match+" matche and increment the turn counter then allow a new guess";
			count++;
		}else{
			text = typedWord+" is an invalid word, not increment the turn counter and allow a new guess";
			
		}

		outputsInfo.push(text);

	}




}

function newGuess(){
	outputsInfo.length = 0;
}


const words = {
	wordsInfo,
	outputsInfo,
	count,
	match,
	secretWord,
	selectSecretWord,
	addOutput,
	newGuess,
	getCount,
	getMatch,
	getSecretWord,
	setCount,
	setMatch,
	setSecretWord,
	inWordsInfo,
};

module.exports = words;