let str1 = prompt("Введите первую строку").toLowerCase();
let str2 = prompt("Введите вторую строку").toLowerCase();

let string = str1.lastIndexOf(str2) + str2.length;
let resultString = str1.slice(string);

if (resultString.startsWith(" ") || resultString.endsWith(" ")) {
	resultString.trim();
} else {
	console.log("Повторений не было");
}

let masterString = resultString.trim();
let s = "";


for (let i = 0; i < masterString.length; i++) {
	if (masterString.charAt(i) === masterString.charAt(i).toLowerCase()) {
		s += masterString.charAt(i).toUpperCase();
	} else if (masterString.charAt(i) === masterString.charAt(i).toUpperCase()) {
		s += masterString.charAt(i).toLowerCase();
	}
}
console.log(s);


/* как привести результирующую строку с Верхнего регистра,
в нижний, если она приходит строго в нижнем*/