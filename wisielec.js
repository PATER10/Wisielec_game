let exist = false;
let words = ["pies", "kot", "sowa", "królik", "kangur"];

function randomPasswd() {
	document.querySelector("#displayWord").innerText = "";
	let wordsLength = words.length;
	let random = Math.round((wordsLength - 1) * Math.random());
	randomWord = words[random];
	console.log(randomWord);
	checkLetter();
	for (let i = 1; i <= randomWord.length; i++) {
		createNew();
	}

	return randomWord.length;
}

function createNew() {
	const el = document.createElement("div");
	el.className = "letters";
	document.querySelector("#displayWord").appendChild(el);
}

function checkLetter() {
	let letter = "a";
	for (let j = 0; j <= 5; j++) {
		if (letter === randomWord[j]) {
			exist = true;
			break;
		} else {
			exist = false;
		}
	}
	if (exist === true) {
		console.log("brawo");
	} else {
		console.log("Niestety");
	}
}
