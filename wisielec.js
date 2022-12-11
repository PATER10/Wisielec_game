let exist = false;
let passwd = "";
let fault = 0;
let words = ["pies", "kot", "sowa", "królik", "kangur"];

function randomPasswd() {
	passwd = "";
	document.querySelector("#btns").innerHTML =
		'<input type="text" placeholder="Podaj literę" id="givenLetterInput" class="btn"><input type="button" value="Potwierdź" class="btn" onclick="checkLetter()"><input type="button" value="Losuj hasło" id="randomPasswd" class="btn" onclick="randomPasswd()">';
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
			passwd += letter;
		}
	}
	if (exist === false) {
		fault++;
		console.log(fault);
		var image = "img/wisielec" + fault + ".png";
		document.querySelector("#wisielec_img").innerHTML =
			'<img src="' + image + '" alt="wisielec" + id="wisielec_png" />';
	}
	if (fault >= 9) {
		document.querySelector("#displayWord").innerText =
			"Niestety nie udało ci się odgadnąć hasła! Prawidłowe hasło to: " +
			randomWord;
		document.querySelector("#btns").innerHTML =
			'<input type="button" value="Losuj nowe hasło" id="randomPasswd" class="btn" onclick="randomPasswd()">';
	}
	if (passwd === randomWord) {
		document.querySelector("#displayWord").innerText =
			"Brawo udało ci się odgadnąć hasło!";
		document.querySelector("#btns").innerHTML =
			'<input type="button" value="Losuj nowe hasło" id="randomPasswd" class="btn" onclick="randomPasswd()">';
	}
	console.log(passwd);
}
