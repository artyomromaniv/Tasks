let str1 = prompt("Введите первую строку").toLowerCase();
let str2 = prompt("Введите вторую строку").toLowerCase();

let string = str1.lastIndexOf(str2) + str2.length;

if (str1.slice(string).startsWith(" ") || str1.slice(string).endsWith(" ")) {
	console.log(str1.slice(string).trim());
} else {
	console.log("Повторений не было");
}











