const str1 = prompt("Введите первую строку").toLowerCase();
const str2 = prompt("Введите вторую строку").toLowerCase();

if (str1.includes(str2)) {
	console.log("Совпадение выявлено");
} else {
	console.log("Повторений не было");
}

