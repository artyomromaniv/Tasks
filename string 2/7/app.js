const str = prompt("Введите номер");

for (let i = 4; i < str.length; i++) {
	if (str.startsWith("+375") && (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) && str.length <= 13) {
		console.log("Звоним...");
	} else if (str.length > 13) {
		console.log("Некорректный номер");
	}
}




