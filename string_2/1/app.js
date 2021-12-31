const str = prompt("Введите строку");

if (str.startsWith("https")) {
	console.log("«При маршрутизации используется либо протокол SSL, либо TLS");
} else if (str.startsWith("http")) {
	console.log("«Шифрование не применяется");
} else if (str.startsWith("") || str.startsWith(" ")) {
	console.log("Ошибка GET запроса");
}

