let str = prompt("Введите номер");
let string = str.slice(0, 3) + "-" + str.slice(3, 5) + "-" + str.slice(5, 7);
const incorrectNum = "Некорректный номер";

for (let i = 0; i < str.length; i++) {
	if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 91)
		|| (str.charCodeAt(i) >= 97 && str.charCodeAt(i) < 123)
		|| (str.charCodeAt(i) == 45)
		|| (str.charAt(i) == " ")
		|| (str.charAt(i) == "")) {
		console.log(incorrectNum);
		break;
	} else {
		console.log(string);
	}
}

