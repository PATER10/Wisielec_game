let exist = false;
let fault = 0;
let finished = false;
let words = [
	"pies",
	"kot",
	"sowa",
	"królik",
	"kangur",
	"krowa",
	"sarna",
	"chomik",
	"wiewiórka",
	"jastrząb",
];

window.addEventListener("load", function () {
	document.querySelector("#alfabet").innerHTML =
		'<input type="button" value="Losuj hasło" id="randomPasswd" class="btn" onclick="randomPasswd()">';
});
function randomPasswd() {
	finished = false;
	litery = new Array(35);

	litery[0] = "a";
	litery[1] = "ą";
	litery[2] = "b";
	litery[3] = "c";
	litery[4] = "ć";
	litery[5] = "d";
	litery[6] = "e";
	litery[7] = "ę";
	litery[8] = "f";
	litery[9] = "g";
	litery[10] = "h";
	litery[11] = "i";
	litery[12] = "j";
	litery[13] = "k";
	litery[14] = "l";
	litery[15] = "ł";
	litery[16] = "m";
	litery[17] = "n";
	litery[18] = "ń";
	litery[19] = "o";
	litery[20] = "ó";
	litery[21] = "p";
	litery[22] = "q";
	litery[23] = "r";
	litery[24] = "s";
	litery[25] = "ś";
	litery[26] = "t";
	litery[27] = "u";
	litery[28] = "v";
	litery[29] = "w";
	litery[30] = "x";
	litery[31] = "y";
	litery[32] = "z";
	litery[33] = "ż";
	litery[34] = "ź";

	var tresc_diva = "";

	for (i = 0; i <= 34; i++) {
		var element = "lit" + i;
		tresc_diva =
			tresc_diva +
			'<div class="letter" onclick="checkLetter(' +
			i +
			')" id="' +
			element +
			'">' +
			litery[i] +
			"</div>";
		if ((i + 1) % 10 == 0)
			tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}

	document.getElementById("alfabet").innerHTML = tresc_diva;
	document.querySelector("#btns").innerHTML =
		'<input type="button" value="Losuj hasło" id="randomPasswd" class="btn" onclick="randomPasswd()">';
	document.querySelector("#randomPasswd").value = "Losuj nowe hasło";
	document.querySelector("#displayWord").innerText = "";
	document.querySelector("#wisielec_img").innerHTML =
		'<img src="img/default.png" alt="wisielec" id="wisielec_png" />';
	fault = 0;
	let wordsLength = words.length;
	let random = Math.round((wordsLength - 1) * Math.random());
	randomWord = words[random];
	console.log("Hasło to: " + randomWord);
	for (let i = 1; i <= randomWord.length; i++) {
		createNew(i - 1);
	}
	return randomWord.length;
}

function createNew(i) {
	const el = document.createElement("div");
	el.className = "letters";
	document.querySelector("#displayWord").appendChild(el);
}

function checkLetter(a) {
	exist = false;
	let letter = litery[a];
	console.log(letter);
	for (let j = 0; j < randomWord.length; j++) {
		if (letter === randomWord[j]) {
			exist = true;
			document.getElementsByClassName("letters")[j].innerText = randomWord[j];
		}
	}
	if (exist === false) {
		fault++;
		var image = "img/wisielec" + fault + ".png";
		document.querySelector("#wisielec_img").innerHTML =
			'<img src="' + image + '" alt="wisielec" + id="wisielec_png" />';
	}
	if (fault >= 9) {
		document.querySelector("#alfabet").innerText = "";
		document.querySelector("#displayWord").innerText =
			"Niestety nie udało ci się odgadnąć hasła! Prawidłowe hasło to: " +
			randomWord;
		document.querySelector("#btns").innerHTML =
			'<input type="button" value="Losuj nowe hasło" id="randomPasswd" class="btn" onclick="randomPasswd()">';
	}
	if (fault < 9) {
		for (let i = 0; i < randomWord.length; i++) {
			if (document.getElementsByClassName("letters")[i].innerText === "") {
				return (finished = false);
			} else {
				finished = true;
			}
		}
	}
	if (finished === true) {
		document.querySelector("#alfabet").innerText = "";
		document.querySelector("#displayWord").innerText =
			"Brawo udało ci się odgadnąć hasło!";
		document.querySelector("#btns").innerHTML =
			'<input type="button" value="Losuj nowe hasło" id="randomPasswd" class="btn" onclick="randomPasswd()">';
	}
}
