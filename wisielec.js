let exist = false;
let fault = 0;
let words = ["pies", "kot", "sowa", "królik", "kangur"];

function randomPasswd() {
	document.querySelector("#randomPasswd").value = "Losuj nowe hasło";
	document.querySelector("#displayWord").innerText = "";
	document.querySelector("#wisielec_img").innerHTML =
		'<img src="img/default.png" alt="wisielec" id="wisielec_png" />';
	fault = 0;
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
	exist = false;
	let letter = document.querySelector("#givenLetterInput").value;
	for (let j = 0; j < randomWord.length; j++) {
		if (letter === randomWord[j]) {
			exist = true;
			document.querySelector(".letters" + j).innerText = randomWord[j];
		}
	}
	if (exist === false) {
		fault++;
		console.log(fault);
		var image = "img/wisielec" + fault + ".png";
		document.querySelector("#wisielec_img").innerHTML =
			'<img src="' + image + '" alt="wisielec" + id="wisielec_png" />';
	}
}
