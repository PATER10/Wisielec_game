let exist = false;
let fault = 0;
let words = ["pies", "kot", "sowa", "królik", "kangur"];

function randomPasswd() {
	document.querySelector("#displayWord").innerText = "";
	let wordsLength = words.length;
	let random = Math.round((wordsLength - 1) * Math.random());
	randomWord = words[random];
	console.log(randomWord);
	for (let i = 1; i <= randomWord.length; i++) {
		createNew(i - 1);
	}

	return randomWord.length;
}

function createNew(i) {
	const el = document.createElement("div");
	el.className = "letters" + " " + "letters" + i;
	document.querySelector("#displayWord").appendChild(el);
}

function checkLetter() {
	let letter = document.querySelector("#givenLetterInput").value;
	for (let j = 0; j < randomWord.length; j++) {
		if (letter === randomWord[j]) {
			document.querySelector(".letters" + j).innerText = randomWord[j];
		} else {
			fault++;
			console.log(fault);
			var image = "img/wisielec" + fault + ".png";
			document.querySelector("#wisielec_img").innerHTML =
				'<img src="' + image + '" alt="wisielec" + id="wisielec_png" />';
		}
	}
}
