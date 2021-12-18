const str = prompt("Введите номер");
let strDone;

for (let i = 1; i < str.length; i++) {
	if (str.startsWith("+") && str.indexOf(3) == 1 && str.indexOf(7) == 2 && str.indexOf(5) == 3 && (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)) {
		strDone = "Звоним...";
	} else {
		strDone = "Некорректный номер";
	}
}
console.log(strDone);

