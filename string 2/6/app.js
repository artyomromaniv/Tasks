const str = prompt("Введите номер");

for (let i = 4; i < str.length; i++) {
	if (str.startsWith("+375") && (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)) {
		console.log("Звоним...");
	} else {
		console.log("Некорректный номер");
	}
}




//	((str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 91)
//		|| (str.charCodeAt(i) >= 97 && str.charCodeAt(i) < 123)))
//&& str.startsWith("+375")